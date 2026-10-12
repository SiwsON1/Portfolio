import { projects } from "../../lib/projects";
for (const s of process.argv.slice(2)) { const p:any = projects.find(x=>x.slug===s); console.log("##", s, JSON.stringify(p)); }
