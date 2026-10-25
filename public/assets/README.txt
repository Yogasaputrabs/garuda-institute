# Garuda Institute — Separated Assets

Asset ini dipisahkan dari PNG asset sheet yang dikirim.

## Rekomendasi penggunaan
- Foto / poster -> WebP untuk website.
- Logo -> PNG di paket ini karena sumber yang diberikan adalah PNG. Jika tersedia file vector dari Figma, ganti dengan SVG asli.
- Icon -> jangan memakai screenshot tile sebagai gambar di website; gunakan icon asli dari Figma sebagai SVG jika tersedia.
- Button, badge, navigation, success-rate card -> sebaiknya dibuat dengan HTML/CSS/React, bukan sebagai gambar. Folder 07 dan 08 hanya reference.

## Struktur
01-logo/                Logo raster hasil crop
02-hero/                Foto hero
03-training/            Foto materi/pelatihan
04-alumni-featured/     4 poster alumni unggulan
05-alumni-grid/         10 poster alumni lainnya
06-testimonial-reference/ Reserved for testimonial exports
07-ui-reference/        Referensi elemen UI yang sebaiknya dikodekan
08-icons-reference/     Referensi grid icon; ganti dengan SVG asli bila tersedia
99-source/              PNG asset sheet asli

## Penting
Crop berasal dari satu PNG asset sheet, sehingga resolusi asset mengikuti resolusi PNG sumber. Untuk kualitas terbaik, export langsung dari Figma.
