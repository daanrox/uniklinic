function toggleMenu() {
    var menu = document.getElementById("menuOpen");
    var hamburgerIcon = document.querySelector(".menu__hamburguer");
    var screenWidth = window.innerWidth;
    if (screenWidth < 940) {
        if (menu.style.display === "flex") {
            menu.style.display = "none";
            hamburgerIcon.innerText = "menu";
        } else {
            menu.style.display = "flex";
            hamburgerIcon.innerText = "close";
        }
    }
}