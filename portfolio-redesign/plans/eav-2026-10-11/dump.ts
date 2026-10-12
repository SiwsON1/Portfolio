import { services } from "../../lib/services";
import { SEO_BLOCKS } from "../../lib/seoBlocks";
import { industries } from "../../lib/industries";
import fs from "fs";
for (const slug of process.argv.slice(2)) {
  const s: any = services.find((x) => x.slug === slug) ?? (industries as any[]).find((x) => x.slug === slug);
  const b = SEO_BLOCKS[slug];
  fs.writeFileSync(`plans/eav-2026-10-11/obecna-${slug}.json`, JSON.stringify({ page: s, block: b }, null, 1));
  console.log(slug, "keys:", Object.keys(s || {}).join(","), "| block sections:", b?.sections.length, "| chars", JSON.stringify(s).length + JSON.stringify(b).length);
}
