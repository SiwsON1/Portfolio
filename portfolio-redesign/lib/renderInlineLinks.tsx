import Link from "next/link";
import type { ReactNode } from "react";

/**
 * Parsuje [text](url) w stringu na elementy React. Wewnętrzne URL-e (zaczynają
 * się od /) idą przez next/link, zewnętrzne przez <a> z target=_blank.
 */
export function renderInlineLinks(text: string): ReactNode[] {
  const re = /\[([^\]]+)\]\(([^)]+)\)/g;
  const out: ReactNode[] = [];
  let lastIdx = 0;
  let m: RegExpExecArray | null;
  let key = 0;

  while ((m = re.exec(text)) !== null) {
    const [full, label, url] = m;
    if (m.index > lastIdx) {
      out.push(text.slice(lastIdx, m.index));
    }
    if (url.startsWith("/")) {
      out.push(
        <Link
          key={`l-${key++}`}
          href={url}
          className="text-ink underline underline-offset-4 decoration-ink-faint hover:text-peach hover:decoration-peach transition-colors"
        >
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
          className="text-ink underline underline-offset-4 decoration-ink-faint hover:text-peach hover:decoration-peach transition-colors"
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
