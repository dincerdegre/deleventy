/* Menu Toggle */
const menuButton = document.getElementById('menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const menuList = document.getElementById('menu-list');

menuButton.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
}, false);

document.addEventListener('click', function(event) {
  console.log(event.target);
  if (event.target !== menuButton && mobileMenu.classList.contains('active')) {
      // hide the menu
    mobileMenu.classList.toggle('active');
  }
});

/* Lazy load images */
const lazyImages = document.getElementsByClassName('lazy');


document.addEventListener('DOMContentLoaded', () => {
  [...lazyImages].forEach((elem) => {
    const originalImage = elem.dataset.src;

    elem.setAttribute('src', originalImage);
    elem.removeAttribute('data-src');
  });
}, false);