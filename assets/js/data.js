/*
  DATA WEBSITE
  Semua data layanan dan profil talenta dapat diubah langsung dari file ini.
  Website ini tidak menggunakan database.
*/

window.SITE_CONFIG = {
  brand: "TalentaSMK",
  tagline: "Jasa kreatif dan profesional dari talenta SMK Indonesia.",
  email: "halo@talentasmk.id",
  phone: "+62 812-3456-7890",
  whatsapp: "6281234567890",
  address: "Medan, Sumatera Utara",
};

window.SERVICES = [
  {
    id: "dkv",
    code: "DKV",
    title: "Desain Komunikasi Visual",
    icon: "palette",
    summary: "Layanan desain visual untuk kebutuhan promosi, identitas merek, dan konten digital.",
    description:
      "Jurusan Desain Komunikasi Visual mempelajari cara menyampaikan pesan melalui elemen visual. Layanan pada kategori ini cocok untuk bisnis, organisasi, sekolah, maupun kegiatan yang membutuhkan materi visual yang rapi dan komunikatif.",
    workItems: [
      "Desain poster dan banner",
      "Konten media sosial",
      "Logo dan identitas visual sederhana",
      "Kemasan dan label produk",
      "Presentasi dan infografis",
      "Ilustrasi digital sederhana",
    ],
    tools: ["Adobe Illustrator", "Adobe Photoshop", "CorelDRAW", "Figma", "Canva"],
  },
  {
    id: "pplg",
    code: "PPLG / RPL",
    title: "Pengembangan Perangkat Lunak & Gim",
    icon: "code",
    summary: "Pembuatan website statis, antarmuka aplikasi, dan prototipe digital sederhana.",
    description:
      "Jurusan Pengembangan Perangkat Lunak dan Gim berfokus pada proses perancangan, pembuatan, dan pengujian perangkat lunak. Layanan dapat digunakan untuk kebutuhan website profil, landing page, prototipe aplikasi, atau perbaikan antarmuka.",
    workItems: [
      "Website profil atau landing page",
      "Pembuatan halaman HTML, CSS, dan JavaScript",
      "Prototipe antarmuka aplikasi",
      "Perbaikan tampilan responsif",
      "Formulir dan kalkulator sederhana",
      "Pengujian fungsi dasar website",
    ],
    tools: ["HTML", "CSS", "JavaScript", "Figma", "Git", "Visual Studio Code"],
  },
  {
    id: "tjkt",
    code: "TJKT / TKJ",
    title: "Teknik Jaringan Komputer & Telekomunikasi",
    icon: "network",
    summary: "Bantuan dokumentasi jaringan, instalasi dasar, dan pengecekan perangkat komputer.",
    description:
      "Jurusan Teknik Jaringan Komputer dan Telekomunikasi mempelajari instalasi, konfigurasi, dan pemeliharaan perangkat jaringan. Layanan difokuskan pada pekerjaan dasar yang dapat disesuaikan dengan kebutuhan lokasi dan perangkat.",
    workItems: [
      "Dokumentasi topologi jaringan",
      "Instalasi jaringan lokal dasar",
      "Konfigurasi perangkat sederhana",
      "Pengecekan koneksi dan perangkat",
      "Pendataan inventaris komputer",
      "Panduan penggunaan jaringan internal",
    ],
    tools: ["Cisco Packet Tracer", "MikroTik", "Windows", "Linux", "LAN Tester"],
  },
  {
    id: "mplb",
    code: "MPLB",
    title: "Manajemen Perkantoran & Layanan Bisnis",
    icon: "briefcase",
    summary: "Pengolahan dokumen, administrasi, presentasi, dan penataan data perkantoran.",
    description:
      "Jurusan Manajemen Perkantoran dan Layanan Bisnis membekali siswa dengan keterampilan administrasi, komunikasi bisnis, dan pengelolaan dokumen. Layanan cocok untuk pekerjaan administrasi yang membutuhkan kerapian dan format konsisten.",
    workItems: [
      "Pengetikan dan format dokumen",
      "Pembuatan surat administrasi",
      "Penyusunan presentasi",
      "Input dan rekap data sederhana",
      "Pembuatan agenda dan notulen",
      "Pengarsipan dokumen digital",
    ],
    tools: ["Microsoft Word", "Microsoft Excel", "Microsoft PowerPoint", "Google Workspace"],
  },
  {
    id: "akl",
    code: "AKL",
    title: "Akuntansi & Keuangan Lembaga",
    icon: "calculator",
    summary: "Pencatatan transaksi, rekap keuangan sederhana, dan penyusunan laporan dasar.",
    description:
      "Jurusan Akuntansi dan Keuangan Lembaga mempelajari pencatatan transaksi serta penyusunan laporan keuangan. Layanan diarahkan untuk membantu rekap dan administrasi keuangan dasar, bukan audit atau konsultasi profesional.",
    workItems: [
      "Rekap pemasukan dan pengeluaran",
      "Pencatatan transaksi sederhana",
      "Pembuatan format kas harian",
      "Rekap invoice dan bukti transaksi",
      "Laporan keuangan dasar",
      "Penataan arsip dokumen keuangan",
    ],
    tools: ["Microsoft Excel", "Google Sheets", "Aplikasi Akuntansi Dasar"],
  },
  {
    id: "pemasaran",
    code: "PM",
    title: "Pemasaran",
    icon: "megaphone",
    summary: "Bantuan konten promosi, riset sederhana, dan perencanaan pemasaran digital.",
    description:
      "Jurusan Pemasaran berfokus pada komunikasi produk, pelayanan pelanggan, dan strategi penjualan. Layanan dapat membantu menyusun materi promosi sederhana dan rencana konten yang lebih terarah.",
    workItems: [
      "Ide dan kalender konten",
      "Copywriting promosi sederhana",
      "Riset kompetitor dasar",
      "Deskripsi produk",
      "Template balasan pelanggan",
      "Laporan performa konten sederhana",
    ],
    tools: ["Google Trends", "Meta Business Suite", "Canva", "Microsoft Excel"],
  },
];

/*
  PROFIL TALENTA
  Saat ini sengaja dikosongkan sesuai permintaan.
  Tambahkan data dengan format berikut:

  dkv: [
    {
      name: "Nama Talenta",
      school: "Nama SMK",
      role: "Desainer Grafis",
      initials: "NT"
    }
  ]
*/
window.TALENTS = {
  dkv: [],
  pplg: [],
  tjkt: [],
  mplb: [],
  akl: [],
  pemasaran: [],
};

window.BLOG_POSTS = [
  {
    category: "Panduan",
    title: "Cara Menyiapkan Brief Desain yang Mudah Dipahami",
    excerpt: "Susun tujuan, ukuran, isi, dan referensi visual agar proses pengerjaan lebih terarah.",
    icon: "file",
  },
  {
    category: "Tips",
    title: "Hal yang Perlu Disiapkan Sebelum Membuat Website Profil",
    excerpt: "Mulai dari identitas usaha, susunan halaman, hingga materi kontak yang akan ditampilkan.",
    icon: "browser",
  },
  {
    category: "Wawasan",
    title: "Mengenal Layanan dari Berbagai Jurusan SMK",
    excerpt: "Setiap jurusan memiliki keahlian yang dapat dikembangkan menjadi layanan profesional.",
    icon: "book",
  },
];
