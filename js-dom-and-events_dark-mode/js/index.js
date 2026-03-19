console.clear();

const bodyElement = document.querySelector('[data-js="body"]');
const switchToDarkModeButton = document.querySelector(
  '[data-js="dark-mode-button"]',
);
const switchToLightModeButton = document.querySelector(
  '[data-js="light-mode-button"]',
);
const toggleModeButton = document.querySelector('[data-js="toggle-button"]');

switchToDarkModeButton.addEventListener("click", () => {
  bodyElement.classList.add("button--dark");
  bodyElement.classList.remove("button--light");
  bodyElement.classList.remove("button--toggle");
});
switchToLightModeButton.addEventListener("click", () => {
  bodyElement.classList.add("button--light");
  bodyElement.classList.remove("button--dark");
  bodyElement.classList.remove("button--toggle");
});
toggleModeButton.addEventListener("click", () => {
  bodyElement.classList.add("button--toggle");
  bodyElement.classList.remove("button--light");
  bodyElement.classList.remove("button--dark");
});
