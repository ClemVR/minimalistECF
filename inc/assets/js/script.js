var hamburger = document.querySelector(".hamburger--boring");
  hamburger.addEventListener("click", function() {
    menu = document.querySelector(".menu-portable");
    spotlight =document.querySelector(".hamburger-menu-spotlight");
    hamburger.classList.toggle("is-active");
    
    menu.classList.toggle("is-open"); 
    spotlight.classList.toggle("is-open");
  });