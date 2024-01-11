const desktopMenu = document.querySelector(".desktop-menu");
const ulList = document.querySelector(".ul-list");
const mobileMenuwrapper = document.querySelector(".menu-wrappar");
window.addEventListener("scroll", function () {
    if(window.scrollY > 60) {
        desktopMenu.classList.add("scroll");
        mobileMenuwrapper.classList.add("scroll");
    }else {
        desktopMenu.classList.remove("scroll");
        mobileMenuwrapper.classList.remove("scroll");
    }
});

const hamburger = document.getElementById("hamburger");
const closebtn = document.getElementById("close");
hamburger.addEventListener('click', () => {
    ulList.style.left = "0%";
    ulList.style.top = window.scrollY+"px";
    
});

closebtn.addEventListener("click", () => {
    ulList.style.left = "-100%";
});