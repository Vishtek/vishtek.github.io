document.addEventListener("DOMContentLoaded", function () {

  // ===== 1️⃣ Canonical URL =====
  let canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    document.head.appendChild(canonical);
  }
  canonical.setAttribute('href', window.location.href);

  // ===== 2️⃣ Meta Robots =====
  let metaRobots = document.querySelector('meta[name="robots"]');
  if (!metaRobots) {
    metaRobots = document.createElement('meta');
    metaRobots.setAttribute('name', 'robots');
    document.head.appendChild(metaRobots);
  }
  metaRobots.setAttribute('content', 'index, follow');

  // ===== 3️⃣ SEO Structured Data: Organization =====
  const ldJsonOrg = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "VishTek Group",
    "url": "https://vishtekgroup.github.io/",
    "logo": "https://vishtekgroup.github.io/assets/Vtb.png",
    "contactPoint": [{
      "@type": "ContactPoint",
      "telephone": "+971-XX-XXXXXXX",
      "contactType": "sales",
      "areaServed": "AE",
      "availableLanguage": ["en"]
    }]
  };
  const orgScript = document.createElement("script");
  orgScript.type = "application/ld+json";
  orgScript.text = JSON.stringify(ldJsonOrg);
  document.head.appendChild(orgScript);

  // ===== 4️⃣ SEO Structured Data: Website =====
  const ldJsonWebsite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "VishTek Group",
    "url": "https://vishtekgroup.github.io/",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://vishtekgroup.github.io/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };
  const websiteScript = document.createElement("script");
  websiteScript.type = "application/ld+json";
  websiteScript.text = JSON.stringify(ldJsonWebsite);
  document.head.appendChild(websiteScript);

  // ===== 5️⃣ Twitter Card Meta =====
  const twitterTags = [
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: document.title || "VishTek Group" },
    { name: "twitter:description", content: document.querySelector('meta[name="description"]')?.content || "Innovative solutions by VishTek Group." },
    { name: "twitter:image", content: "https://vishtekgroup.github.io/assets/og-image.jpg" }
  ];
  twitterTags.forEach(tag => {
    let el = document.querySelector(`meta[name="${tag.name}"]`);
    if (!el) {
      el = document.createElement("meta");
      el.setAttribute("name", tag.name);
      document.head.appendChild(el);
    }
    el.setAttribute("content", tag.content);
  });

  // ===== 6️⃣ Open Graph Meta (LinkedIn, Facebook) =====
  const ogTags = [
    { property: "og:title", content: document.title || "VishTek Group" },
    { property: "og:description", content: document.querySelector('meta[name="description"]')?.content || "Innovative solutions by VishTek Group." },
    { property: "og:image", content: "https://vishtekgroup.github.io/assets/og-image.jpg" },
    { property: "og:url", content: window.location.href },
    { property: "og:type", content: "website" }
  ];
  ogTags.forEach(tag => {
    let el = document.querySelector(`meta[property="${tag.property}"]`);
    if (!el) {
      el = document.createElement("meta");
      el.setAttribute("property", tag.property);
      document.head.appendChild(el);
    }
    el.setAttribute("content", tag.content);
  });

  // ===== 7️⃣ Product Lists Toggle =====
  window.toggleList = function (id) {
    const clickedList = document.getElementById(id);
    if (!clickedList) return;
    document.querySelectorAll('#products ul').forEach(list => {
      if (list !== clickedList) list.classList.add('hidden');
    });
    clickedList.classList.toggle('hidden');
  };

  document.addEventListener('click', function (event) {
    if (!event.target.closest('.card')) {
      document.querySelectorAll('#products ul').forEach(list => list.classList.add('hidden'));
    }
  });

  // ===== 8️⃣ Mobile Drawer Menu =====
  const menuToggle = document.getElementById('menuToggle');
  const closeMenu = document.getElementById('closeMenu');
  const mobileMenu = document.getElementById('mobileMenu');
  const overlay = document.getElementById('overlay');
  const body = document.body;

  if (menuToggle && closeMenu && mobileMenu && overlay) {
    const openMenu = () => {
      mobileMenu.classList.remove('-translate-x-full');
      overlay.classList.remove('hidden');
      body.classList.add('overflow-hidden'); // Lock scroll
    };
    const closeMenuFunc = () => {
      mobileMenu.classList.add('-translate-x-full');
      overlay.classList.add('hidden');
      body.classList.remove('overflow-hidden'); // Unlock scroll
    };
    menuToggle.addEventListener('click', openMenu);
    closeMenu.addEventListener('click', closeMenuFunc);
    overlay.addEventListener('click', closeMenuFunc);
  }

});
