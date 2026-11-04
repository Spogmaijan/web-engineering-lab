import fs from "node:fs";
import path from "node:path";
import page from "./page.mjs";

const outputDir = path.join("demo", "dist");

fs.mkdirSync(outputDir, { recursive: true });

const html = page();

fs.writeFileSync(
    path.join(outputDir, "ssg.html"),
    html
);

console.log("Static HTML generated successfully!");
