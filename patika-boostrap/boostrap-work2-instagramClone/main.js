const navbarToggler = document.getElementById('navbarToggler');
const fixedNavbarFix = document.getElementById('fixedNavbarFix');

navbarToggler.addEventListener('click', function() {
  if (fixedNavbarFix.style.marginTop === '137px') {
    fixedNavbarFix.style.marginTop = '70px';
  } else {
    fixedNavbarFix.style.marginTop = '137px';
  }
});