const selectElement = (selector) => {
  const element = document.querySelector(selector);
  if (element) return element;
  throw Error(
    `Uverite se dali ovaj ${selector} postoji i da li je pravilno napisan `
  );
};

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    var myCollapse = document.getElementById("main-nav");
    var bsCollapse = new bootstrap.Collapse(myCollapse, {
      hide: true,
    });
  });
});
window.onload = function () {
  document.getElementById("preloader").classList.add("opacity-0");
  setTimeout(() => {
    document.getElementById("preloader").classList.add("d-none");
  }, 1000);
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
