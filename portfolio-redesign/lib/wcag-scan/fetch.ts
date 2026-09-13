import { lookup } from "node:dns/promises";
import type { LookupAddress } from "node:dns";
import { isIP } from "node:net";

const USER_AGENT =
  "MarcinSiwoniaA11yScan/1.0 (+https://www.marcinsiwonia.pl/sprawdz-dostepnosc)";
const MAX_BYTES = 3 * 1024 * 1024;
const MAX_REDIRECTS = 3;

export class ScanFetchError extends Error {
  constructor(
    public readonly status: 400 | 422 | 504,
    message: string,
  ) {
    super(message);
    this.name = "ScanFetchError";
  }
}

function rawHostname(value: string): string {
  const withScheme = /^[a-z][a-z\d+.-]*:\/\//i.test(value)
    ? value
    : `https://${value}`;
  const authority = withScheme.match(/^[a-z][a-z\d+.-]*:\/\/([^/?#]*)/i)?.[1] ?? "";
  const hostPort = authority.slice(authority.lastIndexOf("@") + 1);
  if (hostPort.startsWith("[")) return hostPort.slice(1, hostPort.indexOf("]"));
  return hostPort.replace(/:\d*$/, "");
}

function isNonCanonicalNumericHost(hostname: string): boolean {
  if (isIP(hostname) === 4) return false;
  return /^(?:0x[\da-f]+|\d+)(?:\.(?:0x[\da-f]+|\d+))*$/i.test(hostname);
}

function ipv4Number(address: string): number | null {
  if (isIP(address) !== 4) return null;
  return address
    .split(".")
    .reduce((result, part) => (result << 8) + Number(part), 0) >>> 0;
}

function inIpv4Range(address: string, network: string, prefix: number): boolean {
  const value = ipv4Number(address);
  const base = ipv4Number(network);
  if (value === null || base === null) return false;
  const mask = prefix === 0 ? 0 : (0xffffffff << (32 - prefix)) >>> 0;
  return (value & mask) === (base & mask);
}

// IPv4 osadzony w IPv6: zmapowany (::ffff:), zgodny (::a.b.c.d), NAT64 (64:ff9b::) i 6to4 (2002:xxxx:xxxx::).
// Bez rozpakowania ::127.0.0.1 albo 64:ff9b::a9fe:a9fe omijają blokadę sieci prywatnych.
function mappedIpv4(address: string): string | null {
  const normalized = address.toLowerCase();
  const dotted = normalized.match(/^(?:::ffff:|::|64:ff9b::)(\d{1,3}(?:\.\d{1,3}){3})$/);
  if (dotted && isIP(dotted[1]) === 4) return dotted[1];
  const hex =
    normalized.match(/^(?:::ffff:|::|64:ff9b::)([\da-f]{1,4}):([\da-f]{1,4})$/) ??
    normalized.match(/^2002:([\da-f]{1,4}):([\da-f]{1,4})(?::|$)/);
  if (!hex) return null;
  const value = Number.parseInt(hex[1], 16) * 65536 + Number.parseInt(hex[2], 16);
  return `${value >>> 24}.${(value >>> 16) & 255}.${(value >>> 8) & 255}.${value & 255}`;
}

function isForbiddenAddress(address: string): boolean {
  const unwrapped = address.replace(/^\[|\]$/g, "").toLowerCase();
  const mapped = mappedIpv4(unwrapped);
  if (mapped) return isForbiddenAddress(mapped);

  if (isIP(unwrapped) === 4) {
    return [
      ["0.0.0.0", 8],
      ["10.0.0.0", 8],
      ["100.64.0.0", 10],
      ["127.0.0.0", 8],
      ["169.254.0.0", 16],
      ["172.16.0.0", 12],
      ["192.0.0.0", 24],
      ["192.168.0.0", 16],
      ["198.18.0.0", 15],
      ["224.0.0.0", 4],
      ["240.0.0.0", 4],
    ].some(([network, prefix]) => inIpv4Range(unwrapped, network as string, prefix as number));
  }

  if (isIP(unwrapped) === 6) {
    return (
      unwrapped === "::" ||
      unwrapped === "::1" ||
      /^64:ff9b:/i.test(unwrapped) ||
      /^ff[\da-f]{2}:/i.test(unwrapped) ||
      /^(?:fc|fd)[\da-f]{2}:/i.test(unwrapped) ||
      /^(?:fe[89ab])[\da-f]:/i.test(unwrapped)
    );
  }

  return true;
}

function parseUrl(rawUrl: string): URL {
  const value = rawUrl.trim();
  if (!value) throw new ScanFetchError(400, "Podaj adres strony.");
  const originalHost = rawHostname(value);
  if (isNonCanonicalNumericHost(originalHost)) {
    throw new ScanFetchError(400, "Ten adres strony jest niedozwolony.");
  }

  let url: URL;
  try {
    url = new URL(/^[a-z][a-z\d+.-]*:\/\//i.test(value) ? value : `https://${value}`);
  } catch {
    throw new ScanFetchError(400, "Podaj poprawny adres strony.");
  }
  if (url.protocol !== "http:" && url.protocol !== "https:") {
    throw new ScanFetchError(400, "Dozwolone są tylko adresy HTTP i HTTPS.");
  }
  if (url.username || url.password) {
    throw new ScanFetchError(400, "Adres strony nie może zawierać danych logowania.");
  }
  const expectedPort = url.protocol === "http:" ? "80" : "443";
  if (url.port && url.port !== expectedPort) {
    throw new ScanFetchError(400, "Dozwolone są tylko standardowe porty 80 i 443.");
  }
  const hostname = url.hostname.replace(/^\[|\]$/g, "").toLowerCase().replace(/\.$/, "");
  if (hostname === "localhost" || hostname.endsWith(".local") || hostname.endsWith(".internal")) {
    throw new ScanFetchError(400, "Ten adres strony jest niedozwolony.");
  }
  return url;
}

export async function assertPublicUrl(rawUrl: string): Promise<URL> {
  const url = parseUrl(rawUrl);
  const hostname = url.hostname.replace(/^\[|\]$/g, "");
  if (isIP(hostname)) {
    if (isForbiddenAddress(hostname)) {
      throw new ScanFetchError(400, "Ten adres strony jest niedozwolony.");
    }
    return url;
  }

  let addresses: LookupAddress[];
  try {
    addresses = await lookup(hostname, { all: true, verbatim: true });
  } catch {
    throw new ScanFetchError(422, "Nie udało się odnaleźć tej strony.");
  }
  if (!addresses.length || addresses.some(({ address }) => isForbiddenAddress(address))) {
    throw new ScanFetchError(400, "Ten adres strony jest niedozwolony.");
  }
  return url;
}

async function readBody(response: Response): Promise<string> {
  const declaredLength = Number(response.headers.get("content-length"));
  if (Number.isFinite(declaredLength) && declaredLength > MAX_BYTES) {
    await response.body?.cancel();
    throw new ScanFetchError(422, "Strona jest zbyt duża do przeskanowania.");
  }
  if (!response.body) throw new ScanFetchError(422, "Strona nie zwróciła treści.");

  const reader = response.body.getReader();
  const chunks: Uint8Array[] = [];
  let size = 0;
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    size += value.byteLength;
    if (size > MAX_BYTES) {
      await reader.cancel();
      throw new ScanFetchError(422, "Strona jest zbyt duża do przeskanowania.");
    }
    chunks.push(value);
  }
  const bytes = new Uint8Array(size);
  let offset = 0;
  for (const chunk of chunks) {
    bytes.set(chunk, offset);
    offset += chunk.byteLength;
  }
  return new TextDecoder().decode(bytes);
}

export async function fetchHtml(rawUrl: string): Promise<{ finalUrl: string; html: string }> {
  let current = rawUrl;
  for (let redirects = 0; redirects <= MAX_REDIRECTS; redirects += 1) {
    const url = await assertPublicUrl(current);
    let response: Response;
    try {
      response = await fetch(url, {
        redirect: "manual",
        signal: AbortSignal.timeout(8_000),
        headers: { "User-Agent": USER_AGENT, Accept: "text/html,application/xhtml+xml" },
      });
    } catch (error) {
      if (error instanceof ScanFetchError) throw error;
      if (error instanceof Error && (error.name === "TimeoutError" || error.name === "AbortError")) {
        throw new ScanFetchError(504, "Pobieranie strony trwało zbyt długo.");
      }
      throw new ScanFetchError(422, "Nie udało się pobrać tej strony.");
    }

    if (response.status >= 300 && response.status < 400) {
      await response.body?.cancel();
      const location = response.headers.get("location");
      if (!location) throw new ScanFetchError(422, "Strona zwróciła nieprawidłowe przekierowanie.");
      if (redirects === MAX_REDIRECTS) {
        throw new ScanFetchError(422, "Strona przekierowuje zbyt wiele razy.");
      }
      current = new URL(location, url).toString();
      continue;
    }
    if (!response.ok) {
      await response.body?.cancel();
      throw new ScanFetchError(422, `Strona zwróciła błąd HTTP ${response.status}.`);
    }
    const contentType = response.headers.get("content-type")?.split(";", 1)[0].trim().toLowerCase();
    if (contentType !== "text/html" && contentType !== "application/xhtml+xml") {
      await response.body?.cancel();
      throw new ScanFetchError(422, "Podany adres nie prowadzi do strony HTML.");
    }
    try {
      return { finalUrl: url.toString(), html: await readBody(response) };
    } catch (error) {
      if (error instanceof ScanFetchError) throw error;
      if (error instanceof Error && (error.name === "TimeoutError" || error.name === "AbortError")) {
        throw new ScanFetchError(504, "Pobieranie strony trwało zbyt długo.");
      }
      throw new ScanFetchError(422, "Nie udało się odczytać treści strony.");
    }
  }
  throw new ScanFetchError(422, "Strona przekierowuje zbyt wiele razy.");
}
