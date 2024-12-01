const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-menu");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {
  nav.style.height = `${nav.scrollHeight}px`;
});
closeBtn.addEventListener("click", () => {
  nav.style.height = 0;
});

const slides = [...document.querySelectorAll(".easy .slider .slide")];
const swipe = document.querySelector(".easy .navigation .swipe");
const navigations = [...document.querySelectorAll(".slider-name")];

// swipe.style.width = `${navigations[0].scrollWidth}px`;
// navigations.forEach((navi) => {
//   navi.addEventListener("click", () => {
//     swipe.style.left = `${navi.offsetLeft}px`;
//     swipe.style.width = `${navi.scrollWidth}px`;
//     slides[0].style.marginLeft = `-${navigations.indexOf(navi) * 100}%`;
//     navigations.forEach((n) => {
//       n.classList.remove("active");
//     });
//     navi.classList.add("active");
//   });
// });

const aoccordions = [...document.querySelectorAll(".aoccordion .question")];
aoccordions.forEach((acc) => {
  acc.addEventListener("click", () => {
    acc.classList.toggle("active");
    const answer = acc.nextElementSibling;
    const icon = acc.children[1];
    if (acc.classList.contains("active")) {
      answer.style.height = `${answer.scrollHeight}px`;
      icon.innerHTML = `<i class="fa-solid fa-minus"></i>`;
    } else {
      answer.style.height = 0;
      icon.innerHTML = `<i class="fa-solid fa-plus"></i>`;
    }
  });
});

const documentH3 = [
  ...document.querySelectorAll("#documents-container .document h3"),
];
const documents = [
  ...document.querySelectorAll("#documents-container .document"),
];
const documentNavi = [
  ...document.querySelectorAll("#document-navigation span"),
];
const businessH3 = [
  ...document.querySelectorAll("#business-container .document h3"),
];
const business = [
  ...document.querySelectorAll("#business-container .document"),
];
const businessNavi = [...document.querySelectorAll("#business-navi span")];

navigation(documentNavi, documents);
navigation(businessNavi, business);
open(documentH3, documents);
open(businessH3, business);

function open(elements, array) {
  elements.forEach((h) => [
    h.addEventListener("click", () => {
      array.forEach((d) => {
        d.classList.remove("active");
      });
      h.parentElement.classList.add("active");
    }),
  ]);
}

function navigation(navigate, elements) {
  navigate.forEach((nav) => {
    nav.addEventListener("click", () => {
      navigate.forEach((n) => {
        n.classList.remove("active");
      });
      nav.classList.add("active");
      elements[0].style.marginLeft = `-${navigate.indexOf(nav) * 50}%`;
    });
  });
}
