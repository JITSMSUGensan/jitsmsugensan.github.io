(() => {
  const articles = Array.isArray(window.JITS_NEWS) ? window.JITS_NEWS : [];
  const categories = ["NEWS", "ANNOUNCEMENT", "INFORMATION", "NOTICE"];
  const dateValue = (date) => new Date(`${date}T00:00:00`);
  const formatDate = (date) => dateValue(date).toLocaleDateString("en", { year: "numeric", month: "long", day: "numeric" });
  const ordered = [...articles].sort((a, b) => dateValue(b.date) - dateValue(a.date));
  const esc = (value = "") => String(value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
  const card = (item) => `<article class="news-card"><a class="news-card-link" href="article.html?slug=${encodeURIComponent(item.slug)}"><div class="news-card-meta"><time datetime="${esc(item.date)}">${esc(formatDate(item.date))}</time><span>${esc(item.category || "Update")}</span></div><h3>${esc(item.title)}</h3><p>${esc(item.summary)}</p><span class="news-card-cta">Read article <span aria-hidden="true">↗</span></span></a></article>`;

  document.querySelectorAll("[data-news-list]").forEach((list) => {
    const limit = Number(list.dataset.limit) || ordered.length;
    const items = ordered.slice(0, limit);
    if (!items.length) {
      list.innerHTML = '<p class="news-empty">JITS news and updates will appear here soon.</p>';
      return;
    }
    const groups = categories.map((category) => ({
      category,
      articles: items.filter((item) => (categories.includes(item.category) ? item.category : "NEWS") === category)
    })).filter((group) => group.articles.length);
    list.innerHTML = groups.map(({ category, articles: groupArticles }) => `<section class="news-category-section" aria-labelledby="news-category-${category.toLowerCase()}"><h2 id="news-category-${category.toLowerCase()}" class="news-category-heading">${esc(category)}</h2><div class="news-grid">${groupArticles.map(card).join("")}</div></section>`).join("");
  });

  const article = document.querySelector("[data-article]");
  if (article) {
    const slug = new URLSearchParams(location.search).get("slug");
    const item = ordered.find((entry) => entry.slug === slug);
    if (!item) {
      article.innerHTML = '<p class="eyebrow"><span class="eyebrow-line"></span> JITS NEWS &amp; UPDATES</p><h1>Article not found<span class="accent">.</span></h1><p class="coming-message">This article may have been moved or removed.</p><a class="text-link" href="news.html">← Back to all updates</a>';
      return;
    }
    document.title = `${item.title} · JITS MSU-GSC`;
    const credits = [
      item.articleBy && `<span><strong>Article by</strong> ${esc(item.articleBy)}</span>`,
      item.dateAdded && `<span><strong>Added to website</strong> <time datetime="${esc(item.dateAdded)}">${esc(formatDate(item.dateAdded))}</time></span>`,
      item.codedBy && `<span><strong>Website implementation</strong> ${esc(item.codedBy)}</span>`,
      item.captionBy && `<span><strong>Caption by</strong> ${esc(item.captionBy)}</span>`,
      item.layoutBy && `<span><strong>Layout by</strong> ${esc(item.layoutBy)}</span>`
    ].filter(Boolean).join("");
    const publishedTime = item.publishedTime ? `T${esc(item.publishedTime)}:00+08:00` : "";
    article.innerHTML = `<a class="article-back" href="news.html">← All updates</a><p class="eyebrow"><span class="eyebrow-line"></span> ${esc(item.category || "JITS UPDATE")}</p><h1>${esc(item.title)}<span class="accent">.</span></h1><p class="article-date"><time datetime="${esc(item.date)}${publishedTime}">${esc(formatDate(item.date))}${item.publishedTime ? ` · ${esc(item.publishedTime)} (PHT)` : ""}</time></p>${item.image ? `<img class="article-image" src="${esc(item.image)}" alt="${esc(item.imageAlt || "")}">` : ""}${(item.images || []).map((image) => `<img class="article-image" src="${esc(image.src)}" alt="${esc(image.alt || "")}">`).join("")}<div class="article-body">${(item.body || []).map((paragraph) => `<p>${esc(paragraph)}</p>`).join("")}${item.socialLinks?.length ? `<div class="article-social-links"><p>The only pages the University regulates are:</p>${item.socialLinks.map((link) => `<a href="${esc(link.url)}" target="_blank" rel="noopener noreferrer">${esc(link.label)} ↗</a>`).join("")}</div>` : ""}</div>${item.link ? `<a class="home-hero-button home-hero-button-primary article-action" href="${esc(item.link)}" target="_blank" rel="noopener noreferrer">${esc(item.linkLabel || "Learn more")} ↗</a>` : ""}${credits ? `<aside class="article-credits" aria-label="Article credits">${credits}</aside>` : ""}`;
  }
})();
