/* Toolnest 2.0 shared navigation and theme support. Does not modify tool logic. */
(() => {
  const init = () => {
    const body = document.body;
    if (!body || body.dataset.toolnestShell === "ready") return;
    body.dataset.toolnestShell = "ready";
    body.classList.add("toolnest-tool-page");
    const root = "../";
    const brand = '<a class="tn-brand" href="' + root + 'index.html" aria-label="Toolnest home"><span class="tn-brand-mark">TN</span><span>Toolnest</span></a>';
    const header = document.createElement("header");
    header.className = "tn-topbar";
    header.innerHTML = '<div class="tn-topbar-inner">' + brand +
      '<nav class="tn-nav" id="tn-main-nav" aria-label="Main navigation">' +
      '<a href="' + root + 'index.html#files">File tools</a><a href="' + root + 'index.html#images">Image tools</a><a href="' + root + 'index.html#text">Text tools</a><a href="' + root + 'index.html#media">Media tools</a><a href="' + root + 'guides/index.html">Guides</a>' +
      '</nav><div class="tn-actions"><button class="tn-theme-toggle" type="button" aria-label="Switch color theme">☼ Theme</button><button class="tn-menu-toggle" type="button" aria-controls="tn-main-nav" aria-expanded="false">Menu</button></div></div>';
    body.insertBefore(header, body.firstChild);

    const skip = document.createElement("a");
    skip.className = "tn-skip-link";
    skip.href = "#tn-main-content";
    skip.textContent = "Skip to tool";
    header.insertAdjacentElement("afterend", skip);
    const main = body.querySelector("main") || body.querySelector(".main-content") || body.querySelector(".tool-content") || body.querySelector(".app-container") || body.querySelector(".container");
    if (main && !main.id) main.id = "tn-main-content";

    const crumb = document.createElement("div");
    crumb.className = "tn-breadcrumb";
    const pageTitle = (body.querySelector("h1")?.textContent || document.title || "Online tool").trim();
    crumb.innerHTML = '<a href="../index.html">Home</a> <span aria-hidden="true">/</span> <span></span>';
    crumb.lastElementChild.textContent = pageTitle;
    skip.insertAdjacentElement("afterend", crumb);

    const footer = document.createElement("footer");
    footer.className = "tn-footer";
    footer.innerHTML = '<div class="tn-footer-inner"><div><div class="tn-footer-brand">Toolnest</div><div>Free, practical tools that work in your browser.</div></div><nav class="tn-footer-links" aria-label="Footer navigation"><a href="../about.html">About</a><a href="../contact.html">Contact</a><a href="../privacy.html">Privacy</a><a href="../terms.html">Terms</a><a href="../disclaimer.html">Disclaimer</a><a href="../guides/index.html">Guides</a></nav><div>© ' + new Date().getFullYear() + ' Toolnest</div></div>';
    body.appendChild(footer);

    const themeButton = header.querySelector(".tn-theme-toggle");
    let theme = "dark";
    try { theme = localStorage.getItem("toolnest-theme") || "dark"; } catch (_) {}
    if (theme === "light") body.classList.add("tn-light");
    themeButton.addEventListener("click", () => {
      body.classList.toggle("tn-light");
      const next = body.classList.contains("tn-light") ? "light" : "dark";
      try { localStorage.setItem("toolnest-theme", next); } catch (_) {}
      themeButton.textContent = next === "light" ? "☾ Dark" : "☼ Light";
    });
    themeButton.textContent = theme === "light" ? "☾ Dark" : "☼ Light";
    const menuButton = header.querySelector(".tn-menu-toggle");
    const nav = header.querySelector(".tn-nav");
    menuButton.addEventListener("click", () => {
      const open = nav.classList.toggle("is-open");
      menuButton.setAttribute("aria-expanded", String(open));
    });
  };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init, { once: true });
  else init();
})();
