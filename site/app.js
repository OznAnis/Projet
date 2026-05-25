(() => {
  const configuredRepository = document.documentElement.dataset.repository.trim();
  const pagesOwner = location.hostname.endsWith(".github.io")
    ? location.hostname.slice(0, -".github.io".length)
    : "";
  const pagesRepository = location.pathname.split("/").filter(Boolean)[0] || "";
  const repository = configuredRepository || (pagesOwner && pagesRepository ? `${pagesOwner}/${pagesRepository}` : "");

  if (!repository) return;

  const releasesUrl = `https://github.com/${repository}/releases/latest/download/revision-naturalisation-francaise.apk`;
  document.querySelectorAll("[data-download]").forEach((link) => {
    link.href = releasesUrl;
    link.removeAttribute("aria-disabled");
    link.classList.remove("is-pending");
  });

  const status = document.querySelector("[data-download-status]");
  if (status) status.textContent = "APK Android disponible via la dernière release GitHub.";

  const source = document.querySelector("[data-source-link]");
  if (source) {
    source.href = `https://github.com/${repository}`;
    source.hidden = false;
  }
})();
