(() => {
  "use strict";

  const config = window.SITE_CONFIG;
  const services = window.SERVICES || [];
  const talents = window.TALENTS || {};
  const blogPosts = window.BLOG_POSTS || [];

  const iconPaths = {
    search:
      '<circle cx="11" cy="11" r="7"></circle><path d="m20 20-3.8-3.8"></path>',
    menu: '<path d="M4 7h16M4 12h16M4 17h16"></path>',
    close: '<path d="m6 6 12 12M18 6 6 18"></path>',
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"></path>',
    check: '<path d="m5 12 4 4L19 6"></path>',
    palette:
      '<path d="M12 3a9 9 0 1 0 0 18h1.5a1.5 1.5 0 0 0 0-3H12a2 2 0 0 1 0-4h2a7 7 0 0 0 0-14h-2Z"></path><circle cx="7.5" cy="10.5" r="1"></circle><circle cx="9.5" cy="6.5" r="1"></circle><circle cx="14.5" cy="6.5" r="1"></circle><circle cx="17" cy="10" r="1"></circle>',
    code: '<path d="m8 9-4 3 4 3M16 9l4 3-4 3M14 5l-4 14"></path>',
    network:
      '<rect x="3" y="4" width="7" height="5" rx="1"></rect><rect x="14" y="4" width="7" height="5" rx="1"></rect><rect x="8.5" y="15" width="7" height="5" rx="1"></rect><path d="M6.5 9v2h11V9M12 11v4"></path>',
    briefcase:
      '<rect x="3" y="7" width="18" height="13" rx="2"></rect><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18M10 12v2h4v-2"></path>',
    calculator:
      '<rect x="5" y="2" width="14" height="20" rx="2"></rect><path d="M8 6h8M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01"></path>',
    megaphone:
      '<path d="m3 11 15-6v14L3 13v-2Z"></path><path d="M11.5 16.5 9 21H6l1.5-6M18 9a3 3 0 0 1 0 6"></path>',
    layers:
      '<path d="m12 2 9 5-9 5-9-5 9-5Z"></path><path d="m3 12 9 5 9-5M3 17l9 5 9-5"></path>',
    message:
      '<path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v8Z"></path>',
    shield:
      '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"></path><path d="m9 12 2 2 4-4"></path>',
    file: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"></path><path d="M14 2v6h6M8 13h8M8 17h6"></path>',
    browser:
      '<rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="M2 9h20M6 6.5h.01M9 6.5h.01"></path>',
    book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5v14Z"></path><path d="M8 7h8M8 11h6"></path>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"></rect><path d="m3 7 9 6 9-6"></path>',
    phone:
      '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.34 1.78.65 2.62a2 2 0 0 1-.45 2.11L8 9.76a16 16 0 0 0 6 6l1.31-1.31a2 2 0 0 1 2.11-.45c.84.31 1.72.53 2.62.65A2 2 0 0 1 22 16.92Z"></path>',
    pin: '<path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"></path><circle cx="12" cy="10" r="2.5"></circle>',
    target:
      '<circle cx="12" cy="12" r="9"></circle><circle cx="12" cy="12" r="5"></circle><circle cx="12" cy="12" r="1"></circle>',
    heart:
      '<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z"></path>',
    spark:
      '<path d="m12 3-1.5 4.5L6 9l4.5 1.5L12 15l1.5-4.5L18 9l-4.5-1.5L12 3Z"></path><path d="m5 15-.8 2.2L2 18l2.2.8L5 21l.8-2.2L8 18l-2.2-.8L5 15ZM19 13l-.7 2-2 .7 2 .7.7 2 .7-2 2-.7-2-.7-.7-2Z"></path>',
  };

  function icon(name, className = "") {
    const path = iconPaths[name] || iconPaths.layers;
    return `<svg class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${path}</svg>`;
  }

  function brandMarkup() {
    const parts = config.brand.match(/^(.+?)(SMK)$/i);
    const first = parts ? parts[1] : config.brand;
    const accent = parts ? parts[2] : "";
    return `
      <span class="brand-mark" aria-hidden="true"><span></span><span></span><span></span></span>
      <span>${first}<span class="brand-accent">${accent}</span></span>
    `;
  }

  function renderHeader() {
    const mount = document.querySelector("#site-header");
    if (!mount) return;

    const page = document.body.dataset.page || "home";
    const links = [
      ["home", "Beranda", "index.html"],
      ["about", "Tentang Kami", "tentang.html"],
      ["services", "Layanan Kami", "layanan.html"],
      ["blog", "Blogs", "blog.html"],
      ["contact", "Kontak Kami", "kontak.html"],
    ];

    mount.className = "site-header";
    mount.innerHTML = `
      <div class="container header-inner">
        <a class="brand" href="index.html" aria-label="${config.brand} - Beranda">${brandMarkup()}</a>
        <nav class="site-nav" id="site-nav" aria-label="Navigasi utama">
          <ul class="nav-list">
            ${links
              .map(
                ([key, label, href]) =>
                  `<li><a class="nav-link ${page === key ? "active" : ""}" href="${href}">${label}</a></li>`,
              )
              .join("")}
          </ul>
          <form class="mobile-search global-search" role="search">
            <input type="search" name="q" placeholder="Cari layanan SMK..." aria-label="Cari layanan" />
          </form>
        </nav>
        <div class="header-actions">
          <form class="header-search global-search" role="search">
            ${icon("search")}
            <input type="search" name="q" placeholder="Cari layanan SMK (Web, Desain, RPL...)" aria-label="Cari layanan" />
          </form>
          <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="site-nav" aria-label="Buka menu">
            <span class="hamburger-lines" aria-hidden="true">
              <span></span><span></span><span></span>
            </span>
          </button>
        </div>
      </div>
      <button class="menu-overlay" type="button" aria-label="Tutup menu" tabindex="-1"></button>
    `;

    const toggle = mount.querySelector(".menu-toggle");
    const nav = mount.querySelector(".site-nav");
    const overlay = mount.querySelector(".menu-overlay");

    const setMenuState = (open, focusMenu = false) => {
      nav.classList.toggle("open", open);
      overlay.classList.toggle("open", open);
      toggle.classList.toggle("active", open);
      document.body.classList.toggle("menu-open", open);
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Tutup menu" : "Buka menu");

      if (open && focusMenu) {
        window.setTimeout(() => nav.querySelector(".nav-link")?.focus(), 180);
      }
    };

    toggle?.addEventListener("click", () => {
      setMenuState(!nav.classList.contains("open"), true);
    });

    overlay?.addEventListener("click", () => setMenuState(false));

    mount.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", () => setMenuState(false));
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && nav.classList.contains("open")) {
        setMenuState(false);
        toggle.focus();
      }
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 860 && nav.classList.contains("open")) {
        setMenuState(false);
      }
    });
  }

  function renderFooter() {
    const mount = document.querySelector("#site-footer");
    if (!mount) return;

    mount.className = "site-footer";
    mount.innerHTML = `
      <div class="container footer-main">
        <div class="footer-brand">
          <a class="brand" href="index.html">${brandMarkup()}</a>
          <p>${config.tagline}</p>
        </div>
        <div class="footer-column">
          <h3>Kategori</h3>
          <div class="footer-links">
            <a href="detail.html?id=pplg">Web & Pemrograman</a>
            <a href="detail.html?id=dkv">Desain Grafis</a>
            <a href="detail.html?id=tjkt">Jaringan Komputer</a>
            <a href="detail.html?id=pemasaran">Pemasaran Digital</a>
          </div>
        </div>
        <div class="footer-column">
          <h3>Pelajari</h3>
          <div class="footer-links">
            <a href="tentang.html">Tentang Kami</a>
            <a href="layanan.html">Daftar Layanan</a>
            <a href="blog.html">Artikel</a>
          </div>
        </div>
        <div class="footer-column">
          <h3>Bantuan</h3>
          <div class="footer-links">
            <a href="kontak.html">Hubungi Kami</a>
            <a href="kontak.html#form-kontak">Kirim Pertanyaan</a>
            <a href="mailto:${config.email}">${config.email}</a>
          </div>
        </div>
      </div>
      <div class="container footer-bottom">
        <span>&copy; <span data-year></span> ${config.brand}. All rights reserved.</span>
      </div>
    `;
  }

  function serviceCard(service) {
    return `
      <article class="service-card">
        <div class="service-icon">${icon(service.icon)}</div>
        <span class="service-code">${service.code}</span>
        <h3>${service.title}</h3>
        <p>${service.summary}</p>
        <a class="service-link" href="detail.html?id=${encodeURIComponent(service.id)}">
          Lihat selengkapnya ${icon("arrow")}
        </a>
      </article>
    `;
  }

  function renderHomeServices() {
    const mount = document.querySelector("#home-services");
    if (!mount) return;
    mount.innerHTML = services.slice(0, 6).map(serviceCard).join("");
  }

  function renderServicesPage() {
    const mount = document.querySelector("#services-grid");
    const input = document.querySelector("#service-search");
    const count = document.querySelector("#service-count");
    if (!mount || !input) return;

    const params = new URLSearchParams(window.location.search);
    input.value = params.get("q") || "";

    function update() {
      const query = input.value.trim().toLowerCase();
      const filtered = services.filter((service) => {
        const haystack = [
          service.code,
          service.title,
          service.summary,
          service.description,
          ...service.workItems,
          ...service.tools,
        ]
          .join(" ")
          .toLowerCase();
        return haystack.includes(query);
      });

      count.textContent = `${filtered.length} jurusan ditemukan`;
      mount.innerHTML = filtered.length
        ? filtered.map(serviceCard).join("")
        : `
          <div class="empty-state">
            <div class="empty-state-icon">${icon("search")}</div>
            <h3>Layanan belum ditemukan</h3>
            <p>Coba gunakan kata lain seperti desain, website, administrasi, atau pemasaran.</p>
          </div>
        `;
    }

    input.addEventListener("input", update);
    update();
  }

  function talentCard(person) {
    return `
      <article class="talent-card">
        <div class="talent-avatar">${person.initials || person.name.slice(0, 2).toUpperCase()}</div>
        <h3>${person.name}</h3>
        <p>${person.role}</p>
        <p>${person.school}</p>
      </article>
    `;
  }

  function renderDetailPage() {
    const mount = document.querySelector("#service-detail");
    if (!mount) return;

    const id = new URLSearchParams(window.location.search).get("id") || "dkv";
    const service = services.find((item) => item.id === id) || services[0];
    const people = talents[service.id] || [];

    document.title = `${service.title} | ${config.brand}`;

    mount.innerHTML = `
      <div class="detail-layout">
        <main class="detail-main">
          <article class="detail-card">
            <div class="detail-title-row">
              <div class="service-icon">${icon(service.icon)}</div>
              <div>
                <p class="eyebrow" style="margin-bottom: 7px;">${service.code}</p>
                <h1>${service.title}</h1>
                <p>Layanan berdasarkan kompetensi jurusan SMK.</p>
              </div>
            </div>
            <p class="detail-intro">${service.description}</p>

            <section class="detail-section">
              <h2>Contoh pekerjaan</h2>
              <ul class="check-list">
                ${service.workItems.map((item) => `<li>${icon("check")}<span>${item}</span></li>`).join("")}
              </ul>
            </section>

            <section class="detail-section">
              <h2>Perangkat yang umum digunakan</h2>
              <div class="tag-list">
                ${service.tools.map((tool) => `<span class="tag">${tool}</span>`).join("")}
              </div>
            </section>
          </article>

          ${
            people.length
              ? `<section class="detail-section" id="talenta">
                  <div class="section-heading">
                    <span class="eyebrow">Talenta tersedia</span>
                    <h2 class="section-title">Profil pada jurusan ini</h2>
                  </div>
                  <div class="talent-grid">${people.map(talentCard).join("")}</div>
                </section>`
              : ""
          }
        </main>

        <aside class="detail-sidebar">
          <div class="sidebar-card">
            <h3>Butuh layanan ini?</h3>
            <p>Sampaikan kebutuhan dan detail pekerjaan melalui halaman kontak. Tidak diperlukan akun atau login.</p>
            <a class="btn btn-primary" href="kontak.html?layanan=${encodeURIComponent(service.title)}">Hubungi Kami</a>
          </div>
          <p class="sidebar-note">Profil talenta akan muncul otomatis setelah ditambahkan pada <strong>assets/js/data.js</strong>.</p>
        </aside>
      </div>
    `;
  }

  function renderBlogPage() {
    const mount = document.querySelector("#blog-grid");
    if (!mount) return;
    mount.innerHTML = blogPosts
      .map(
        (post) => `
          <article class="blog-card">
            <div class="blog-cover">${icon(post.icon)}</div>
            <div class="blog-card-body">
              <span class="blog-meta">${post.category}</span>
              <h3>${post.title}</h3>
              <p>${post.excerpt}</p>
              <a class="blog-link" href="kontak.html">Tanyakan lebih lanjut ${icon("arrow")}</a>
            </div>
          </article>
        `,
      )
      .join("");
  }

  function setupContactForm() {
    const form = document.querySelector("#contact-form");
    if (!form) return;

    const serviceSelect = form.querySelector("#layanan");
    serviceSelect.innerHTML = `
      <option value="">Pilih layanan</option>
      ${services.map((service) => `<option value="${service.title}">${service.title}</option>`).join("")}
      <option value="Lainnya">Lainnya</option>
    `;

    const requestedService = new URLSearchParams(window.location.search).get(
      "layanan",
    );
    if (requestedService) serviceSelect.value = requestedService;

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!form.reportValidity()) return;

      const data = new FormData(form);
      const subject = `Permintaan layanan: ${data.get("layanan") || "Umum"}`;
      const body = [
        `Nama: ${data.get("nama")}`,
        `Email/WhatsApp: ${data.get("kontak")}`,
        `Layanan: ${data.get("layanan") || "Belum dipilih"}`,
        "",
        "Detail kebutuhan:",
        data.get("pesan"),
      ].join("\n");

      const mailto = `mailto:${config.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailto;

      const status = document.querySelector("#form-status");
      status?.classList.add("show");
    });
  }

  function setupGlobalSearch() {
    document.querySelectorAll(".global-search").forEach((form) => {
      form.addEventListener("submit", (event) => {
        event.preventDefault();
        const query = new FormData(form).get("q")?.toString().trim() || "";
        window.location.href = `layanan.html${query ? `?q=${encodeURIComponent(query)}` : ""}`;
      });
    });
  }

  function setupMotion() {
    const header = document.querySelector(".site-header");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const updateHeader = () => {
      header?.classList.toggle("scrolled", window.scrollY > 8);
    };

    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });

    requestAnimationFrame(() => document.body.classList.add("page-ready"));

    if (reduceMotion || !("IntersectionObserver" in window)) {
      document.querySelectorAll("[data-reveal]").forEach((element) => {
        element.classList.add("revealed");
      });
      return;
    }

    const revealTargets = document.querySelectorAll(
      ".section-heading, .feature-card, .service-card, .step-card, .value-card, .blog-card, .detail-card, .sidebar-card, .contact-card, .form-card, .about-copy, .about-visual, .cta-inner, .hero-stat",
    );

    revealTargets.forEach((element, index) => {
      element.setAttribute("data-reveal", "");
      element.style.setProperty("--reveal-delay", `${(index % 4) * 70}ms`);
    });

    const observer = new IntersectionObserver(
      (entries, revealObserver) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("revealed");
          revealObserver.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -42px" },
    );

    revealTargets.forEach((element) => observer.observe(element));
  }

  function hydrateStaticContent() {
    document
      .querySelectorAll("[data-brand]")
      .forEach((el) => (el.textContent = config.brand));
    document.querySelectorAll("[data-email]").forEach((el) => {
      el.textContent = config.email;
      if (el.tagName === "A") el.href = `mailto:${config.email}`;
    });
    document
      .querySelectorAll("[data-phone]")
      .forEach((el) => (el.textContent = config.phone));
    document
      .querySelectorAll("[data-address]")
      .forEach((el) => (el.textContent = config.address));
    document
      .querySelectorAll("[data-year]")
      .forEach((el) => (el.textContent = new Date().getFullYear()));
  }

  renderHeader();
  renderFooter();
  renderHomeServices();
  renderServicesPage();
  renderDetailPage();
  renderBlogPage();
  setupContactForm();
  setupGlobalSearch();
  hydrateStaticContent();
  setupMotion();
})();
