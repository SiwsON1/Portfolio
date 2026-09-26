import Link from "next/link";
import type { ReactNode } from "react";

const LINK_CLASS =
  "text-ink underline underline-offset-4 decoration-ink-faint hover:text-peach hover:decoration-peach transition-colors";

/**
 * Parsuje [text](url), **pogrubienie** i `kod` w stringu na elementy React.
 * Wewnętrzne URL-e (zaczynają się od /) idą przez next/link, zewnętrzne przez <a> z target=_blank.
 */
export function renderInlineLinks(text: string): ReactNode[] {
  const re = /\*\*(.+?)\*\*|`([^`]+)`|\[([^\]]+)\]\(([^)]+)\)/g;
  const out: ReactNode[] = [];
  let lastIdx = 0;
  let m: RegExpExecArray | null;
  let key = 0;

  while ((m = re.exec(text)) !== null) {
    const [full, bold, code, label, url] = m;
    if (m.index > lastIdx) {
      out.push(text.slice(lastIdx, m.index));
    }
    if (bold !== undefined) {
      out.push(
        <strong key={`b-${key++}`} className="font-semibold text-ink">
          {renderInlineLinks(bold)}
        </strong>
      );
    } else if (code !== undefined) {
      out.push(
        <code
          key={`c-${key++}`}
          className="rounded bg-ink/5 px-1.5 py-0.5 font-mono text-[0.85em] text-ink"
        >
          {code}
        </code>
      );
    } else if (url.startsWith("/")) {
      out.push(
        <Link key={`l-${key++}`} href={url} className={LINK_CLASS}>
          {label}
        </Link>
      );
    } else {
      out.push(
        <a
          key={`l-${key++}`}
          href={url}
          target="_blank"
          rel="noreferrer"
          className={LINK_CLASS}
        >
          {label}
        </a>
      );
    }
    lastIdx = m.index + full.length;
  }
  if (lastIdx < text.length) out.push(text.slice(lastIdx));
  return out;
}
