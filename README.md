# Skiller - Website Statis

Website dibuat menggunakan HTML, CSS, dan JavaScript murni tanpa database, login, atau dashboard.

## Cara menjalankan

1. Ekstrak seluruh folder.
2. Buka `index.html` menggunakan browser.
3. Untuk hasil terbaik, jalankan melalui ekstensi Live Server di Visual Studio Code atau hosting statis.

## Mengubah nama dan kontak

Buka file:

`assets/js/data.js`

Ubah bagian `SITE_CONFIG`:

- `brand`
- `email`
- `phone`
- `whatsapp`
- `address`

## Mengubah jurusan atau layanan

Data jurusan berada pada array `SERVICES` di file `assets/js/data.js`.

Setiap objek layanan memiliki:

- `id`
- `code`
- `title`
- `icon`
- `summary`
- `description`
- `workItems`
- `tools`

## Menambahkan profil talenta

Profil sengaja dikosongkan. Tambahkan data pada objek `TALENTS` di `assets/js/data.js`.

Contoh:

```js
dkv: [
  {
    name: "Nama Talenta",
    school: "SMK Contoh",
    role: "Desainer Grafis",
    initials: "NT"
  }
]
```

Jika array masih kosong, bagian profil tidak akan tampil pada halaman detail.

## Halaman tersedia

- `index.html` - Beranda
- `tentang.html` - Tentang Kami
- `layanan.html` - Daftar jurusan/layanan
- `detail.html?id=dkv` - Detail layanan
- `blog.html` - Blog statis
- `kontak.html` - Form kontak berbasis email

## Pembaruan tampilan mobile dan animasi

- Hamburger menu berubah menjadi ikon tutup saat dibuka.
- Menu mobile tampil sebagai panel dari sisi kanan dengan overlay.
- Menu dapat ditutup melalui overlay, tombol Escape, atau saat memilih navigasi.
- Animasi masuk, efek hover kartu, hero, tombol, dan CTA dibuat ringan tanpa library tambahan.
- Pengguna yang mengaktifkan `prefers-reduced-motion` tetap mendapatkan tampilan tanpa animasi berlebihan.
