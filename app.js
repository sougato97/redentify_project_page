const state = {
  theme: window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light",
};

const themeToggle = document.getElementById("themeToggle");
const yearNode = document.getElementById("year");

function render() {
  document.body.dataset.theme = state.theme;
  themeToggle.textContent = state.theme === "dark" ? "◑" : "◐";
  themeToggle.setAttribute("aria-label", state.theme === "dark" ? "Switch to light theme" : "Switch to dark theme");
  themeToggle.setAttribute("aria-pressed", String(state.theme === "dark"));
  yearNode.textContent = String(new Date().getFullYear());
}

themeToggle.addEventListener("click", () => {
  state.theme = state.theme === "light" ? "dark" : "light";
  render();
});

render();
