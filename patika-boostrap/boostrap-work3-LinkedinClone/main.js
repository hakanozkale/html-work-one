const navbarToggler = document.getElementById('navbarToggler');
const fixedNavbarFix = document.getElementById('fixedNavbarFix');
const acilirKisim = document.getElementById('navbarTogglerDemo02');

navbarToggler.addEventListener('click', function() {
    // 
    if (fixedNavbarFix.style.marginTop == '530px' && acilirKisim.style.height<='484.289px') {
        fixedNavbarFix.style.marginTop = '48px';
        acilirKisim.style.height='1px';
    }
    else{
      fixedNavbarFix.style.marginTop = '530px';
      acilirKisim.style.height='484.289px';
    }
  
});
