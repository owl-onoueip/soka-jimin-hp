import sharp from 'sharp';
import { existsSync } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, '../public');

const targets = [
  // 議員写真：JPG → WebP変換
  { src: 'images/members/shibano.jpg',   dst: 'images/members/shibano.webp',   width: 400 },
  { src: 'images/members/YABE.jpg',      dst: 'images/members/YABE.webp',      width: 400 },
  { src: 'images/members/ogawa.jpg',     dst: 'images/members/ogawa.webp',     width: 400 },
  { src: 'images/members/matui.jpg',     dst: 'images/members/matui.webp',     width: 400 },
  { src: 'images/members/shiraishi.jpg', dst: 'images/members/shiraishi.webp', width: 400 },
  // ヒーロー背景：WebP再圧縮
  { src: 'images/hero-normal.webp', dst: 'images/hero-normal.webp', width: 1200 },
  { src: 'images/hero-anime.webp',  dst: 'images/hero-anime.webp',  width: 1200 },
];

for (const { src, dst, width } of targets) {
  const srcPath = path.join(publicDir, src);
  const dstPath = path.join(publicDir, dst);

  if (!existsSync(srcPath)) {
    console.log(`スキップ（見つからない）: ${src}`);
    continue;
  }

  const info = await sharp(srcPath)
    .resize({ width, withoutEnlargement: true })
    .webp({ quality: 80 })
    .toFile(dstPath);

  console.log(`✅ ${src} → ${dst}  ${(info.size / 1024).toFixed(0)}KB`);
}

console.log('\n完了');
