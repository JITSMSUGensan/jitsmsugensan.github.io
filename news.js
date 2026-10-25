(() => {
  const scriptUrl = document.currentScript?.src || location.href;
  const manifestUrl = new URL("news/manifest.json", scriptUrl);
  const categories = ["NEWS", "ANNOUNCEMENT", "INFORMATION", "NOTICE"];
  const dateValue = (date) => new Date(`${date}T00:00:00`);
  const formatDate = (date) => dateValue(date).toLocaleDateString("en", { year: "numeric", month: "long", day: "numeric" });
  let ordered = [];
  const esc = (value = "") => String(value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
  const card = (item) => `<article class="news-card"><a class="news-card-link" href="article.html?slug=${encodeURIComponent(item.slug)}"><div class="news-card-meta"><time datetime="${esc(item.date)}">${esc(formatDate(item.date))}</time><span>${esc(item.category || "Update")}</span></div><h3>${esc(item.title)}</h3><p>${esc(item.summary)}</p><span class="news-card-cta">Read article <span aria-hidden="true">↗</span></span></a></article>`;

  const parseArticle = (source, path) => {
    const match = source.match(/^---\s*\r?\n([\s\S]*?)\r?\n---\s*\r?\n?([\s\S]*)$/);
    if (!match) throw new Error(`Missing front matter in ${path}`);
    const metadata = {};
    for (const line of match[1].split(/\r?\n/)) {
      const field = line.match(/^([\w-]+):\s*(.*)$/);
      if (field) metadata[field[1]] = field[2].replace(/^(["'])(.*)\1$/, "$2");
    }
    return { ...metadata, slug: path.split("/").pop().replace(/\.md$/, ""), markdown: match[2] };
  };
  const inlineMarkdown = (text) => esc(text)
    .replace(/!\[([^\]]*)\]\(([^\s)]+)\)/g, '<img class="article-image" src="$2" alt="$1">')
    .replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1 ↗</a>')
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/\*([^*]+)\*/g, "<em>$1</em>");
  const renderMarkdown = (source) => {
    const blocks = source.trim().split(/\r?\n\s*\r?\n/).filter(Boolean);
    return blocks.map((block) => {
      const lines = block.split(/\r?\n/);
      if (lines.every((line) => /^[-*]\s+/.test(line))) return `<ul>${lines.map((line) => `<li>${inlineMarkdown(line.replace(/^[-*]\s+/, ""))}</li>`).join("")}</ul>`;
      if (lines.length === 1 && /^!\[/.test(lines[0])) return inlineMarkdown(lines[0]);
      const heading = block.match(/^(#{1,3})\s+(.+)$/);
      if (heading) return `<h${heading[1].length}>${inlineMarkdown(heading[2])}</h${heading[1].length}>`;
      return `<p>${lines.map(inlineMarkdown).join("<br>")}</p>`;
    }).join("");
  };

  const renderLists = () => document.querySelectorAll("[data-news-list]").forEach((list) => {
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
    if (list.hasAttribute("data-limit")) {
      list.innerHTML = groups.flatMap((group) => group.articles).map(card).join("");
      return;
    }
    list.innerHTML = groups.map(({ category, articles: groupArticles }) => `<section class="news-category-section" aria-labelledby="news-category-${category.toLowerCase()}"><h2 id="news-category-${category.toLowerCase()}" class="news-category-heading">${esc(category)}</h2><div class="news-grid">${groupArticles.map(card).join("")}</div></section>`).join("");
  });

  const article = document.querySelector("[data-article]");
  const slug = new URLSearchParams(location.search).get("slug");
  const renderArticle = () => {
    if (!article) return;
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
    article.innerHTML = `<a class="article-back" href="news.html">← All updates</a><p class="eyebrow"><span class="eyebrow-line"></span> ${esc(item.category || "JITS UPDATE")}</p><h1>${esc(item.title)}<span class="accent">.</span></h1><p class="article-date"><time datetime="${esc(item.date)}${publishedTime}">${esc(formatDate(item.date))}${item.publishedTime ? ` · ${esc(item.publishedTime)} (PHT)` : ""}</time></p><div class="article-body">${renderMarkdown(item.markdown || "")}</div>${item.link ? `<a class="home-hero-button home-hero-button-primary article-action" href="${esc(item.link)}" target="_blank" rel="noopener noreferrer">${esc(item.linkLabel || "Learn more")} ↗</a>` : ""}${credits ? `<aside class="article-credits" aria-label="Article credits">${credits}</aside>` : ""}`;
  };
  fetch(manifestUrl).then((response) => {
    if (!response.ok) throw new Error("Unable to load news manifest");
    return response.json();
  }).then((paths) => Promise.all(paths.map((path) => {
    const articleUrl = new URL(path, manifestUrl);
    return fetch(articleUrl).then((response) => {
      if (!response.ok) throw new Error(`Unable to load ${articleUrl} (${response.status})`);
      return response.text().then((source) => parseArticle(source, path));
    });
  }))).then((articles) => {
    ordered = articles.sort((a, b) => dateValue(b.date) - dateValue(a.date));
    renderLists();
    if (article) renderArticle();
  }).catch((error) => {
    console.error("JITS news could not be loaded:", error);
    document.querySelectorAll("[data-news-list]").forEach((list) => { list.innerHTML = '<p class="news-empty">News and updates could not be loaded. Please try again later.</p>'; });
    if (article) article.innerHTML = '<p class="eyebrow"><span class="eyebrow-line"></span> JITS NEWS &amp; UPDATES</p><h1>Unable to load article<span class="accent">.</span></h1><p class="coming-message">Please try again later.</p><a class="text-link" href="news.html">← Back to all updates</a>';
  });
})();
