import {
  clients,
  contact,
  footer,
  hero,
  nav,
  site,
  studio,
  theme,
} from "./content.js";

const root = document.documentElement;
root.style.setProperty("--paper", theme.paper);
root.style.setProperty("--ink", theme.ink);
root.style.setProperty("--lime", theme.lime);
root.style.setProperty("--magenta", theme.magenta);
root.style.setProperty("--cyan", theme.cyan);
root.style.setProperty("--violet", theme.violet);

const app = document.querySelector("#app");

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function headerMarkup() {
  return `
    <header class="site-header">
      <a class="logo" href="#top" aria-label="${escapeHtml(site.name)}">
        <img src="${escapeHtml(site.logo)}" alt="${escapeHtml(site.name)}" />
      </a>
      <nav class="nav" data-nav aria-label="Primary">
        <ul>
          ${nav
            .map(
              (item) =>
                `<li><a href="${escapeHtml(item.href)}">${escapeHtml(item.label)}</a></li>`,
            )
            .join("")}
        </ul>
      </nav>
      <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="mobile-nav" data-nav-toggle>
        <span class="nav-toggle-label">Menu</span>
      </button>
    </header>
    <div class="mobile-nav" id="mobile-nav" data-mobile-nav hidden>
      <ul>
        ${nav
          .map(
            (item) =>
              `<li><a href="${escapeHtml(item.href)}">${escapeHtml(item.label)}</a></li>`,
          )
          .join("")}
      </ul>
    </div>
  `;
}

function footerMarkup() {
  return `
    <footer class="site-footer">
      <p>${escapeHtml(footer.note)}</p>
      <p>© ${new Date().getFullYear()}</p>
    </footer>
  `;
}

function homeMarkup() {
  return `
    ${headerMarkup()}
    <main id="main">
      <section class="hero" id="top">
        <p class="eyebrow">${escapeHtml(hero.eyebrow)}</p>
        <h1 class="hero-title">
          <span>${escapeHtml(hero.title[0])}</span>
          ${hero.title
            .slice(1)
            .map((line) => `<span class="hero-plus">${escapeHtml(line)}</span>`)
            .join("")}
        </h1>
        <p class="hero-lede">${escapeHtml(hero.lede)}</p>
        <div class="hero-actions">
          ${hero.actions
            .map(
              (action) =>
                `<a class="action action-${escapeHtml(action.variant)}" href="${escapeHtml(action.href)}">${escapeHtml(action.label)}</a>`,
            )
            .join("")}
        </div>
        <div class="hero-marks" aria-hidden="true">
          <div class="sheet sheet-lime"></div>
          <div class="sheet sheet-magenta"></div>
          <div class="sheet sheet-cyan"></div>
        </div>
      </section>

      <section class="section clients" id="${escapeHtml(clients.id)}">
        <h2 class="clients-caption">${escapeHtml(clients.caption)}</h2>
        <ul class="client-list">
          ${clients.names
            .map(
              (name) => `
            <li>${escapeHtml(name)}</li>`,
            )
            .join("")}
        </ul>
      </section>

      <section class="section studio" id="${escapeHtml(studio.id)}">
        <div class="section-head">
          <p class="kicker">${escapeHtml(studio.kicker)}</p>
          <h2>${escapeHtml(studio.title)}</h2>
          <p class="section-body">${escapeHtml(studio.body)}</p>
        </div>
        <div class="studio-tracks">
          ${studio.tracks
            .map(
              (track, trackIndex) => `
            <section class="studio-track ${trackIndex === 1 ? "studio-track-print" : ""} reveal">
              <p class="kicker">${escapeHtml(track.kicker)}</p>
              <h3>${escapeHtml(track.title)}</h3>
              <ul class="service-list">
                ${track.items
                  .map(
                    (item, index) => `
                  <li>
                    <span class="index">${String(index + 1).padStart(2, "0")}</span>
                    <div>
                      <h4>${escapeHtml(item.title)}</h4>
                      <p>${escapeHtml(item.text)}</p>
                    </div>
                  </li>`,
                  )
                  .join("")}
              </ul>
            </section>`,
            )
            .join("")}
        </div>
        <dl class="facts reveal">
          ${studio.facts
            .map(
              (fact) => `
            <div>
              <dt>${escapeHtml(fact.label)}</dt>
              <dd>${escapeHtml(fact.value)}</dd>
            </div>`,
            )
            .join("")}
        </dl>
      </section>

      <section class="section contact" id="${escapeHtml(contact.id)}">
        <div class="section-head">
          <p class="kicker">${escapeHtml(contact.kicker)}</p>
          <h2>${escapeHtml(contact.title)}</h2>
          <p class="section-body">${escapeHtml(contact.body)}</p>
        </div>
        <div class="contact-grid">
          <a class="contact-email" href="mailto:${escapeHtml(site.email)}">${escapeHtml(site.email)}</a>
          <address>
            ${escapeHtml(site.name)}<br />
            ${escapeHtml(site.address.street)}<br />
            ${escapeHtml(site.address.city)}
          </address>
          <ul class="contact-people">
            ${site.people
              .map(
                (person) => `
              <li>
                <span>${escapeHtml(person.name)}</span>
                <a href="tel:${escapeHtml(person.phone.replaceAll(" ", ""))}">${escapeHtml(person.phone)}</a>
              </li>`,
              )
              .join("")}
          </ul>
          <a class="contact-instagram" href="${escapeHtml(site.instagram.url)}" rel="noreferrer">${escapeHtml(site.instagram.handle)}</a>
        </div>
      </section>
    </main>
    ${footerMarkup()}
  `;
}

let chromeController;

function bindChrome() {
  chromeController?.abort();
  chromeController = new AbortController();
  const { signal } = chromeController;

  const header = document.querySelector(".site-header");
  const toggle = document.querySelector("[data-nav-toggle]");
  const mobileNav = document.querySelector("[data-mobile-nav]");

  function setMenu(open) {
    toggle.setAttribute("aria-expanded", String(open));
    toggle.querySelector(".nav-toggle-label").textContent = open ? "Close" : "Menu";
    mobileNav.hidden = !open;
    document.body.classList.toggle("nav-open", open);
  }

  toggle.addEventListener("click", () => {
    setMenu(toggle.getAttribute("aria-expanded") !== "true");
  }, { signal });

  mobileNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setMenu(false), { signal });
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setMenu(false);
  }, { signal });

  const onScroll = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 12);
  };
  window.addEventListener("scroll", onScroll, { passive: true, signal });
  onScroll();
}

function bindReveal() {
  const revealItems = document.querySelectorAll(".reveal");
  const showPassed = () => {
    revealItems.forEach((item) => {
      if (item.getBoundingClientRect().top < window.innerHeight - 8) {
        item.classList.add("is-in");
      }
    });
  };

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    revealItems.forEach((item) => item.classList.add("is-in"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-in");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: "0px 0px -4% 0px" },
  );
  revealItems.forEach((item) => observer.observe(item));
  showPassed();
}

function render() {
  document.body.classList.remove("nav-open");
  app.innerHTML = homeMarkup();
  document.title = "Disco Turbo — Graphic design & print, Copenhagen";
  const sectionId = window.location.hash.replace(/^#/, "");
  if (sectionId) {
    requestAnimationFrame(() => {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "auto", block: "start" });
      bindReveal();
    });
  }

  bindChrome();
  bindReveal();
}

window.addEventListener("hashchange", render);
render();
