const legacySections = {
  "#about": "about.html",
  "#impact": "experience.html#impact",
  "#experience": "experience.html",
  "#work": "work.html#case-studies",
  "#tkhub": "work.html#tkhub",
  "#services": "services.html",
  "#pricing": "services.html#pricing",
  "#skills": "experience.html#skills",
};

if (document.body.classList.contains("home")) {
  const followLegacyLink = () => {
    const destination = legacySections[location.hash];
    if (destination) location.replace(destination);
  };
  followLegacyLink();
  window.addEventListener("hashchange", followLegacyLink);
}

const toggle = document.querySelector(".nav-toggle");
const navigation = document.querySelector(".nav-list");
const setMenuOpen = (open) => toggle.setAttribute("aria-expanded", String(open));

document.documentElement.classList.add("js");
toggle.addEventListener("click", () => setMenuOpen(toggle.getAttribute("aria-expanded") === "false"));
navigation.addEventListener("click", (event) => {
  if (event.target.closest("a")) setMenuOpen(false);
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true" &&
      getComputedStyle(toggle).display !== "none") {
    setMenuOpen(false);
    toggle.focus();
  }
});
