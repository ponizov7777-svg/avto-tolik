/**
 * Zapchasty — основной скрипт статического сайта
 */

document.addEventListener('DOMContentLoaded', function () {
  // Плавная подсветка активного пункта навигации при скролле
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav__link[href^="#"]');

  function setActiveLink() {
    const scrollY = window.scrollY;
    let current = '';

    sections.forEach(function (section) {
      const top = section.offsetTop - 80;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');
      if (scrollY >= top && scrollY < top + height && id) {
        current = id;
      }
    });

    navLinks.forEach(function (link) {
      link.classList.remove('nav__link--active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('nav__link--active');
      }
    });
  }

  if (navLinks.length && sections.length) {
    window.addEventListener('scroll', setActiveLink);
    setActiveLink();
  }
});
