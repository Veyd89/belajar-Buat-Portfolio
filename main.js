let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("fa-xmark");
  navbar.classList.toggle("active");
});
let sectionsMain = document.querySelectorAll("section ,main");
// let main = document.querySelector("main");
let navlink = document.querySelectorAll("header nav a");
window.onscroll = () => {
  sectionsMain.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navlink.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector(`header nav a[href*= ${id}]`)
          .classList.add("active");
      });
    }
  });
  let header = document.querySelector("header");
  // sticky navbar
  header.classList.toggle("sticky", window.scrollY > 100);

  // remove toggle icon
  menuIcon.classList.remove("fa-xmark");
  navbar.classList.remove("active");
};
