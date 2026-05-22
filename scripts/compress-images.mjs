import sharp from "sharp";
import { readdirSync, statSync } from "fs";
import { join, extname } from "path";

const dir = "./public/images";
const files = readdirSync(dir);

let saved = 0;

for (const file of files) {
  const ext = extname(file).toLowerCase();
  if (![".jpg", ".jpeg", ".png"].includes(ext)) continue;

  const input = join(dir, file);
  const sizeBefore = statSync(input).size;

  try {
    const img = sharp(input);
    const meta = await img.metadata();

    // Resize if wider than 1600px
    if (meta.width > 1600) img.resize({ width: 1600, withoutEnlargement: true });

    if (ext === ".png") {
      await img.png({ quality: 80, compressionLevel: 9 }).toFile(input + ".tmp");
    } else {
      await img.jpeg({ quality: 75, progressive: true }).toFile(input + ".tmp");
    }

    // Only replace if actually smaller
    const sizeAfter = statSync(input + ".tmp").size;
    if (sizeAfter < sizeBefore) {
      const { renameSync } = await import("fs");
      renameSync(input + ".tmp", input);
      saved += sizeBefore - sizeAfter;
      console.log(`✓ ${file}: ${(sizeBefore/1024).toFixed(0)}KB → ${(sizeAfter/1024).toFixed(0)}KB`);
    } else {
      const { unlinkSync } = await import("fs");
      unlinkSync(input + ".tmp");
      console.log(`- ${file}: already optimal`);
    }
  } catch (e) {
    console.error(`✗ ${file}: ${e.message}`);
  }
}

console.log(`\nTotal saved: ${(saved / 1024).toFixed(0)}KB`);
