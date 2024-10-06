console.log("start")
  
let lastScrollTop = 0;
const navbar = document.getElementById("menu");

window.addEventListener("scroll", function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop) {
        navbar.style.transform = "translateY(-100%)";
    } else {
        navbar.style.transform = "translateY(0)";
    }
    
    lastScrollTop = scrollTop;
});