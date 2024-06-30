let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

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
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('header nav a');

    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        }
    });
};

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}