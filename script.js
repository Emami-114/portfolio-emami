let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

document.addEventListener("DOMContentLoaded", function () {
  loadComponent("home", "home.html");
  loadComponent("skills", "skills.html");
  loadComponent("education", "education.html");
  loadComponent("portfolio", "portfolio.html");
  function loadComponent(id, url) {
    fetch(url)
      .then((response) => response.text())
      .then((data) => {
        document.getElementById(id).innerHTML = data;
      })
      .catch((error) =>
        console.error("Fehler beim Laden der Komponente:", error)
      );
  }
});

window.onscroll = () => {
  let sections = document.querySelectorAll("section");
  let navLinks = document.querySelectorAll("header nav a");

  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
      });
      document
        .querySelector("header nav a[href*=" + id + "]")
        .classList.add("active");
    }
  });
};

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

let currentItemIndex = 0;
let currentImageIndex = 0;

const items = [
  {
    images: [
      { src: "asset/food-iphone-1.png", caption: "Image 1" },
      { src: "asset/food-iphone-2.png", caption: "Image 2" },
      { src: "asset/food-iphone-3.png", caption: "Image 3" },
      { src: "asset/food-iphone-4.png", caption: "Image 4" },
      { src: "asset/food-iphone-5.png", caption: "Image 5" },
      { src: "asset/food-iphone-6.png", caption: "Image 6" },
    ],
  },
  {
    images: [
      { src: "asset/food-mac-1.png", caption: "Image 1" },
      { src: "asset/food-mac-2.png", caption: "Image 2" },
      { src: "asset/food-mac-3.png", caption: "Image 3" },
      { src: "asset/food-mac-4.png", caption: "Image 4" },
      { src: "asset/food-mac-5.png", caption: "Image 5" },
      { src: "asset/food-mac-6.png", caption: "Image 6" },
      { src: "asset/food-mac-7.png", caption: "Image 7" },
      { src: "asset/food-mac-8.png", caption: "Image 8" },
    ],
  },
  {
    images: [
      { src: "asset/leben-in-deutschland-1.png", caption: "Image 1" },
      { src: "asset/leben-in-deutschland-2.png", caption: "Image 2" },
    ],
  },
  {
    images: [
      { src: "asset/learn-android-1.png", caption: "Image 1" },
      { src: "asset/learn-android-2.png", caption: "Image 1" },
      { src: "asset/learn-android-3.png", caption: "Image 1" },
      { src: "asset/learn-android-4.png", caption: "Image 1" },
    ],
  },
  // Add more items and their images as needed
];

function showPopup(itemIndex) {
  currentItemIndex = itemIndex;
  currentImageIndex = 0;
  updateSlide();
  document.getElementById("popup").style.display = "block";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

function changeSlide(n) {
  currentImageIndex += n;
  const images = items[currentItemIndex].images;
  if (currentImageIndex >= images.length) {
    currentImageIndex = 0;
  } else if (currentImageIndex < 0) {
    currentImageIndex = images.length - 1;
  }
  updateSlide();
}

function updateSlide() {
  const image = items[currentItemIndex].images[currentImageIndex];
  document.getElementById("popup-image").src = image.src;
  document.getElementById("caption").innerText = image.caption;
}
