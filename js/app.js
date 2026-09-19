/**
 * TING-YI CHEN — GRAND OPERA ARCHIVE & CONSERVATORY
 * Opera Stage Theatrical Curtain & Dynamic Content Hydration
 */

// Opera Singer & Music Professor Fallback Data
const FALLBACK_DATA = {
  splash: {
    title: "TING-YI CHEN",
    subtitle: "LIRICO-SPINTO SOPRANO ‧ PROFESSOR OF VOCAL MUSIC",
    tagline: "GRAND OPERA HOUSE & CONSERVATOIRE DE MUSIQUE",
    button_text: "✦ RAISE THE CURTAIN / 揭幕入席 ✦",
  },
  bio: {
    name: "陳亭儀 Ting-Yi Chen",
    fach: "Lirico-Spinto Soprano 抒情戲劇女高音",
    role: "歌劇聲樂藝術家 ‧ 國立藝術大學聲樂系教授",
    tagline: "「以極致的呼吸與聲線，在歌劇殿堂中鐫刻人類靈魂的永恆共鳴。」",
    avatar:
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=900&q=80",
    content:
      "陳亭儀（Ting-Yi Chen），著名女高音歌唱家，現任國立藝術大學音樂學系聲樂教授。畢業於**奧地利維也納國立音樂暨表演藝術大學**（MDW）歌劇與聲樂演唱最高演奏家文憑。\n\n其嗓音被歐洲歌劇樂評譽為「**兼具純淨如銀的穿透力與深邃熾熱的情感張力**」。曾受邀於維也納國家歌劇院、米蘭斯卡拉歌劇院客席巡演、國家兩廳院與衛武營國家藝術文化中心，領銜主演普契尼《托斯卡》、《波希米亞人》、威爾第《茶花女》、《阿依達》等數十部經典歌劇主角。\n\n在學術與教育領域，陳教授致力於古典義大利美聲學派（Bel Canto）之科學發聲法與舞台戲劇表演體系傳承，長年受邀於薩爾茲堡國際音樂夏令營、歐洲知名音樂學院開設大師班，培育眾多傑出青年歌唱家榮獲國際聲樂大賽首獎。",
    highlights: [
      { label: "主演歌劇主角 (Opera Roles)", value: "25+" },
      { label: "國際知名劇院 (Major Theaters)", value: "30+" },
      { label: "大師班與講席 (Masterclasses)", value: "60+" },
      { label: "教席育才年資 (Years Teaching)", value: "15+" },
    ],
  },
  experience: [
    {
      company: "國立藝術大學 音樂學系 (Conservatory of Music)",
      role: "聲樂系專任教授 兼 歌劇工作坊藝術總監",
      year: "2020 — PRESENT",
      description:
        "執掌研究所聲樂主修、德義法藝術歌曲詮釋與歌劇製作課程；創辦年度全本歌劇製作實習計畫，培育新世代青年歌劇新星登上國家級劇院舞臺。",
    },
    {
      company: "國家表演藝術中心 (兩廳院 / 衛武營 / 臺中國家歌劇院)",
      role: "特邀客席女高音獨唱家 (Guest Principal Soprano)",
      year: "2016 — PRESENT",
      description:
        "多次於年度歌劇旗艦製作中擔綱第一女主角，包括普契尼《托斯卡》標題主角托斯卡、威爾第《茶花女》薇奧莉塔，深獲歐洲歌劇權威樂評極致讚譽。",
    },
    {
      company: "維也納室內歌劇院 & 歐洲巡迴歌劇節 (Wiener Kammeroper)",
      role: "駐院首席獨唱家 (Principal Soloist)",
      year: "2012 — 2018",
      description:
        "常駐奧地利、德國與義大利歌劇重鎮演出，飾演莫札特《費加洛婚禮》伯爵夫人、普契尼《蝴蝶夫人》秋秋桑等數百場正式公演。",
    },
    {
      company: "薩爾茲堡國際音樂節夏季學院 (Salzburg Summer Academy)",
      role: "客座大師班教授 (Guest Masterclass Clinician)",
      year: "2018 — 2025",
      description:
        "指導來自全球各國之青年聲樂家精修義大利歌劇風格語法（Stile Italiano）、呼吸力學及舞台戲劇心理刻劃。",
    },
  ],
  portfolio: [
    {
      title: "普契尼：歌劇《托斯卡》 (Tosca)",
      category: "G. Puccini ‧ 主演：佛羅莉亞 ‧ 托斯卡 (Floria Tosca)",
      image:
        "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&w=1200&q=80",
      description:
        "「陳亭儀的托斯卡兼具高貴熱烈與驚心動魄的戲劇張力，在第二幕〈為藝術，為愛情〉（Vissi d'arte）的長線條歌唱中展現了近乎奇蹟的氣息掌控與情感昇華。」——《歐洲歌劇評論雜誌》",
      link: "https://npac-ntt.org",
      tags: ["Verismo Opera", "Puccini", "Tosca", "Flagship Production"],
    },
    {
      title: "威爾第：歌劇《茶花女》 (La Traviata)",
      category: "G. Verdi ‧ 主演：薇奧莉塔 (Violetta Valéry)",
      image:
        "https://images.unsplash.com/photo-1469488865564-c2de10f69f96?auto=format&fit=crop&w=1200&q=80",
      description:
        "完美駕馭第一幕〈及時行樂〉（Sempre libera）的高超花腔技巧，並在第三幕以淒美動人的弱音（Pianissimo）細膩刻劃女主角走向命運終點的悲憫與昇華。",
      link: "https://npac-ntt.org",
      tags: ["Bel Canto", "Verdi", "La Traviata", "Coloratura"],
    },
    {
      title: "莫札特：歌劇《費加洛婚禮》 (Le Nozze di Figaro)",
      category: "W. A. Mozart ‧ 主演：伯爵夫人 (Contessa Almaviva)",
      image:
        "https://images.unsplash.com/photo-1514306191717-452ec28c7814?auto=format&fit=crop&w=1200&q=80",
      description:
        "以醇美純淨的莫札特式經典音色詮釋〈何處尋覓那美好的時光〉（Dove sono），將伯爵夫人內心隱忍的哀愁與古典貴族尊嚴刻劃得入木三分。",
      link: "https://npac-ntt.org",
      tags: ["Mozart", "Classical Opera", "Contessa", "Pure Tone"],
    },
    {
      title: "理查 ‧ 史特勞斯：歌劇《玫瑰騎士》 (Der Rosenkavalier)",
      category: "R. Strauss ‧ 主演：元帥夫人 (Die Feldmarschallin)",
      image:
        "https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&w=1200&q=80",
      description:
        "詮釋德語後期浪漫派的交響歌劇巔峰之作，以深厚的人生洞察與德語正統聲韻，展現時光流逝與哲學沉思的唯美重唱三重奏。",
      link: "https://npac-ntt.org",
      tags: ["R. Strauss", "Late Romantic", "Die Feldmarschallin"],
    },
  ],
  media: [
    {
      title: "普契尼：《托斯卡》經典名曲〈為藝術，為愛情〉(Vissi d'arte)",
      subtitle: "國家戲劇院 旗艦歌劇現場實況錄影 (Live at National Theater)",
      video_url: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
      description:
        "陳亭儀教授於國家戲劇院年度大戲領銜演出普契尼名作《托斯卡》，由國家交響樂團 (NSO) 磅礴協奏，展現極具戲劇張力與深情訴說的美聲極致境界。",
    },
  ],
  contact: {
    email: "tingyi.chen.opera@conservatory.edu",
    phone: "+886 (0)2 2896 1000 ext. 3120",
    location: "Taipei, Taiwan ‧ Vienna, Austria",
    statement:
      "隨時歡迎國內外各大歌劇院製作人邀演、交響樂團協奏演出、國際聲樂大師班講席及音樂學院學術交流合作。",
    socials: [
      {
        name: "Operabase",
        url: "https://www.operabase.com",
        icon: "fa-solid fa-masks-theater",
      },
      {
        name: "YouTube",
        url: "https://youtube.com",
        icon: "fa-brands fa-youtube",
      },
      {
        name: "Facebook",
        url: "https://facebook.com",
        icon: "fa-brands fa-facebook-f",
      },
      {
        name: "Instagram",
        url: "https://instagram.com",
        icon: "fa-brands fa-instagram",
      },
    ],
  },
};

document.addEventListener("DOMContentLoaded", () => {
  initApp();
});

async function initApp() {
  // Prevent scrolling while theatrical curtain is lowered
  document.body.classList.add("splash-active");

  // Fetch content data from _data/content.json
  let siteData = FALLBACK_DATA;
  try {
    const res = await fetch("./_data/content.json?v=" + Date.now());
    if (res.ok) {
      siteData = await res.json();
    } else {
      console.warn(
        "Could not fetch _data/content.json, using fallback operatic data.",
      );
    }
  } catch (err) {
    console.warn(
      "Fetch error (e.g. running locally via file://), using fallback data.",
      err,
    );
  }

  // Hydrate DOM with siteData
  renderSplashScreen(siteData.splash);
  renderBio(siteData.bio);
  renderExperience(siteData.experience);
  renderPortfolio(siteData.portfolio);
  renderMedia(siteData.media);
  renderContact(siteData.contact);

  // Setup interactions
  setupSplashDismissal();
  setupNavigation();
  setupEmailCopy(siteData.contact.email);
  setupAdminShortcut();
}

/**
 * 1. Render Theatrical Proscenium Curtain
 */
function renderSplashScreen(splash) {
  if (!splash) return;
  const titleEl = document.getElementById("splash-title");
  const subtitleEl = document.getElementById("splash-subtitle");
  const btnEl = document.getElementById("splash-enter-btn");

  if (titleEl && splash.title) titleEl.textContent = splash.title;
  if (subtitleEl && splash.subtitle) subtitleEl.textContent = splash.subtitle;
  if (btnEl && splash.button_text) {
    btnEl.innerHTML = `<span>${escapeHTML(splash.button_text)}</span> <i class="fa-solid fa-arrow-right"></i>`;
  }
}

/**
 * Setup Theatrical Curtain Rise (Slide Up & Reveal the Stage)
 */
function setupSplashDismissal() {
  const splash = document.getElementById("splash-screen");
  const enterBtn = document.getElementById("splash-enter-btn");

  if (!splash || !enterBtn) return;

  const raiseCurtain = () => {
    // Trigger curtain lift animation
    splash.classList.add("curtain-up");

    // Enable scrolling on stage
    document.body.classList.remove("splash-active");

    // Once curtain animation finishes, hide overlay
    splash.addEventListener(
      "transitionend",
      () => {
        splash.style.display = "none";
      },
      { once: true },
    );
  };

  enterBtn.addEventListener("click", raiseCurtain);

  // Keyboard shortcut: Press ENTER or SPACE to raise curtain
  window.addEventListener("keydown", (e) => {
    if (
      document.body.classList.contains("splash-active") &&
      (e.key === "Enter" || e.key === " ")
    ) {
      e.preventDefault();
      raiseCurtain();
    }
  });
}

/**
 * 2. Render Act I: Vocal Artist & Pedagogy
 */
function renderBio(bio) {
  if (!bio) return;

  const brandName = document.getElementById("brand-name");
  const heroFach = document.getElementById("hero-fach");
  const heroRoleTitle = document.getElementById("hero-role-title");
  const heroName = document.getElementById("hero-name");
  const heroTagline = document.getElementById("hero-tagline");
  const heroAvatar = document.getElementById("hero-avatar");
  const bioMarkdown = document.getElementById("bio-markdown");
  const heroStats = document.getElementById("hero-stats");

  if (brandName && bio.name) brandName.textContent = bio.name;
  if (heroFach)
    heroFach.textContent = bio.fach || "Lirico-Spinto Soprano 抒情戲劇女高音";
  if (heroRoleTitle && bio.role) heroRoleTitle.textContent = bio.role;
  if (heroName && bio.name) heroName.textContent = bio.name;
  if (heroTagline && bio.tagline) heroTagline.textContent = bio.tagline;
  if (heroAvatar && bio.avatar) {
    heroAvatar.src = bio.avatar;
    heroAvatar.alt = bio.name || "Ting-Yi Chen Portrait";
  }

  // Render Markdown safely
  if (bioMarkdown && bio.content) {
    if (typeof marked !== "undefined" && marked.parse) {
      bioMarkdown.innerHTML = marked.parse(bio.content);
    } else {
      bioMarkdown.innerHTML = `<p>${escapeHTML(bio.content).replace(/\n/g, "<br>")}</p>`;
    }
  }

  // Render Stats/Highlights
  if (heroStats && Array.isArray(bio.highlights)) {
    heroStats.innerHTML = bio.highlights
      .map(
        (stat) => `
        <div class="stat-item">
          <span class="stat-value">${escapeHTML(stat.value)}</span>
          <span class="stat-label">${escapeHTML(stat.label)}</span>
        </div>
      `,
      )
      .join("");
  }
}

/**
 * 3. Render Act III: Stage Chronicle (Experience)
 */
function renderExperience(experienceList) {
  const container = document.getElementById("experience-timeline");
  if (!container || !Array.isArray(experienceList)) return;

  container.innerHTML = experienceList
    .map(
      (item) => `
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-card">
          <div class="timeline-header">
            <h3 class="timeline-role">${escapeHTML(item.role)}</h3>
            <span class="timeline-year">${escapeHTML(item.year)}</span>
          </div>
          <div class="timeline-company">
            <i class="fa-solid fa-landmark"></i> ${escapeHTML(item.company)}
          </div>
          <p class="timeline-desc">${escapeHTML(item.description)}</p>
        </div>
      </div>
    `,
    )
    .join("");
}

/**
 * 4. Render Act II: Operatic Repertoire (Portfolio)
 */
function renderPortfolio(portfolioList) {
  const container = document.getElementById("portfolio-grid");
  if (!container || !Array.isArray(portfolioList)) return;

  container.innerHTML = portfolioList
    .map((item) => {
      const tagsHTML = Array.isArray(item.tags)
        ? item.tags
            .map((tag) => `<span class="tag-pill">${escapeHTML(tag)}</span>`)
            .join("")
        : "";

      const linkHTML = item.link
        ? `<a href="${escapeHTML(item.link)}" target="_blank" rel="noopener noreferrer" class="portfolio-link">
             劇院製作詳情 / Review <i class="fa-solid fa-arrow-up-right-from-square"></i>
           </a>`
        : "";

      return `
        <article class="portfolio-card">
          <div class="portfolio-thumb-wrapper">
            <img src="${escapeHTML(item.image)}" alt="${escapeHTML(item.title)}" class="portfolio-thumb" loading="lazy" />
            <div class="portfolio-overlay"></div>
          </div>
          <div class="portfolio-body">
            <div class="portfolio-meta">
              <span class="portfolio-category">${escapeHTML(item.category || "Opera Production")}</span>
            </div>
            <h3 class="portfolio-title">${escapeHTML(item.title)}</h3>
            <p class="portfolio-desc">${escapeHTML(item.description)}</p>
            ${tagsHTML ? `<div class="portfolio-tags">${tagsHTML}</div>` : ""}
            ${linkHTML}
          </div>
        </article>
      `;
    })
    .join("");
}

/**
 * 5. Render Act IV: Arias & Masterclasses (Media)
 */
function renderMedia(mediaList) {
  const container = document.getElementById("media-container");
  if (!container || !Array.isArray(mediaList) || mediaList.length === 0) return;

  container.innerHTML = mediaList
    .map(
      (item) => `
      <div class="media-card">
        <div class="media-video-wrapper">
          <iframe 
            src="${escapeHTML(item.video_url)}" 
            title="${escapeHTML(item.title)}" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
          </iframe>
        </div>
        <div class="media-info">
          ${item.subtitle ? `<div class="media-subtitle">${escapeHTML(item.subtitle)}</div>` : ""}
          <h3 class="media-title">${escapeHTML(item.title)}</h3>
          ${item.description ? `<p class="media-desc">${escapeHTML(item.description)}</p>` : ""}
        </div>
      </div>
    `,
    )
    .join("");
}

/**
 * 6. Render Encore: Contact Information
 */
function renderContact(contact) {
  if (!contact) return;

  const statementEl = document.getElementById("contact-statement");
  const emailBtn = document.getElementById("contact-email-btn");
  const emailText = document.getElementById("contact-email-text");
  const phoneEl = document.getElementById("contact-phone");
  const locationEl = document.getElementById("contact-location");
  const socialsContainer = document.getElementById("contact-socials");

  if (statementEl && contact.statement)
    statementEl.textContent = contact.statement;
  if (emailText && contact.email) emailText.textContent = contact.email;
  if (emailBtn && contact.email) emailBtn.href = `mailto:${contact.email}`;

  if (phoneEl && contact.phone) {
    phoneEl.innerHTML = `<i class="fa-solid fa-phone"></i> <span>${escapeHTML(contact.phone)}</span>`;
  }
  if (locationEl && contact.location) {
    locationEl.innerHTML = `<i class="fa-solid fa-location-dot"></i> <span>${escapeHTML(contact.location)}</span>`;
  }

  if (socialsContainer && Array.isArray(contact.socials)) {
    socialsContainer.innerHTML = contact.socials
      .map(
        (s) => `
        <a href="${escapeHTML(s.url)}" target="_blank" rel="noopener noreferrer" class="social-btn" title="${escapeHTML(s.name)}">
          <i class="${escapeHTML(s.icon)}"></i>
        </a>
      `,
      )
      .join("");
  }
}

/**
 * 7. Copy Email Helper
 */
function setupEmailCopy(email) {
  const copyTrigger = document.getElementById("copy-email-btn");
  if (!copyTrigger || !email) return;

  copyTrigger.addEventListener("click", async (e) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(email);
      const originalText = copyTrigger.innerHTML;
      copyTrigger.innerHTML = `<i class="fa-solid fa-check"></i> 複製成功 (Copied!)`;
      setTimeout(() => {
        copyTrigger.innerHTML = originalText;
      }, 2500);
    } catch (err) {
      console.error("Clipboard copy failed:", err);
    }
  });
}

/**
 * 8. Responsive Navigation & Active Section Tracking
 */
function setupNavigation() {
  const toggleBtn = document.getElementById("mobile-toggle-btn");
  const menu = document.getElementById("nav-menu");
  const links = document.querySelectorAll(".nav-link");

  if (toggleBtn && menu) {
    toggleBtn.addEventListener("click", () => {
      menu.classList.toggle("open");
      const icon = toggleBtn.querySelector("i");
      if (icon) {
        icon.classList.toggle("fa-bars");
        icon.classList.toggle("fa-xmark");
      }
    });

    links.forEach((link) => {
      link.addEventListener("click", () => {
        menu.classList.remove("open");
        const icon = toggleBtn.querySelector("i");
        if (icon) {
          icon.classList.add("fa-bars");
          icon.classList.remove("fa-xmark");
        }
      });
    });
  }

  // Active section observer
  const sections = document.querySelectorAll("section[id]");
  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 130;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute("id");
      }
    });

    links.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });
}

/**
 * 9. Discreet Admin Shortcut (Invisible to general visitors)
 * - Pressing Ctrl + Shift + A (or Cmd + Shift + A) navigates to /admin/
 * - Triple-clicking the copyright text in the footer navigates to /admin/
 */
function setupAdminShortcut() {
  // Update copyright year dynamically
  const yearEl = document.getElementById("current-year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Keyboard shortcut: Ctrl + Shift + A / Cmd + Shift + A
  window.addEventListener("keydown", (e) => {
    if (
      (e.ctrlKey || e.metaKey) &&
      e.shiftKey &&
      (e.key === "A" || e.key === "a")
    ) {
      e.preventDefault();
      window.location.href = "admin/";
    }
  });

  // Triple-click on copyright notice
  const copyrightEl = document.querySelector(".copyright");
  if (copyrightEl) {
    let clickCount = 0;
    let clickTimer = null;
    copyrightEl.addEventListener("click", () => {
      clickCount++;
      clearTimeout(clickTimer);
      if (clickCount >= 3) {
        window.location.href = "admin/";
        clickCount = 0;
      } else {
        clickTimer = setTimeout(() => {
          clickCount = 0;
        }, 600);
      }
    });
  }
}

/**
 * Utility: Escape HTML to protect against XSS
 */
function escapeHTML(str) {
  if (str === null || str === undefined) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
