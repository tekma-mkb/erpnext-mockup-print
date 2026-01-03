# Mockup Print

Project ini digunakan untuk membuat **mockup cetak dokumen Sales Order / Invoice**
yang dioptimalkan untuk **printer dot matrix** dengan kertas
**continuous form 3 ply** ukuran **9.5 × 5.5 inch**.

Layout saat ini **sudah aman untuk produksi**:
- Margin sesuai traktor printer
- Item tabel tidak terpotong
- Footer selalu tercetak utuh
- Konsisten antara HTML, PDF, dan cetak fisik
- Setiap halaman memiliki timestamp
- jika halaman lebih dari 1, tambahkan nomor halaman di sekitar timestamp 1/3 2/3 3/3
---

## Tujuan Project

- Menyediakan template cetak Sales Order
- Menjamin akurasi ukuran fisik dokumen
- Menghindari masalah umum printer dot matrix:
  - Item terbelah
  - Footer terpotong
  - Margin tidak aman

---

## Development

### Prasyarat
- Node.js (LTS)
- npm

### Menjalankan Project
1. Install dependency:
   ```bash
   npm install
   ```
2. Jalankan development server:
   ```bash
   npm run dev
   ```
3. Akses:
   http://localhost:8080
4. Output HTML:
   output/
5. Contoh hasil cetak (PDF/Gambar):
   pdf/

---

## Struktur Folder

.
├── assets/
├── templates/
├── output/
├── pdf/
├── compile-pug.js
├── package.json
└── README.md

---

## Print Configuration

@page:
- Size: 9.5in x 5.5in
- Margin kiri: 18mm (traktor)
- Margin kanan: 3mm
- Margin atas/bawah: 5mm