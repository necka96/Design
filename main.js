const selectElement = (selector) => {
  const element = document.querySelector(selector);
  if (element) return element;
  throw Error(
    `Uverite se dali ovaj ${selector} postoji i da li je pravilno napisan `
  );
};

const date = selectElement("#date");
date.textContent = new Date().getFullYear();

const onScroll = () => {
  const nav = selectElement("nav");
  if (window.scrollY > 300) {
    nav.classList.add("sticky-top", "p-3", "shadow");
  } else {
    nav.classList.remove("sticky-top", "p-3", "shadow");
  }
};

window.addEventListener("scroll", onScroll);
