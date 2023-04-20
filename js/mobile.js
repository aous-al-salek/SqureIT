const menu = document.querySelector(".menu");
const hamburger= document.querySelector(".hamburger");

function toggleMenu() {
    if (menu.classList.contains("showMenu")) {
        menu.classList.remove("showMenu");
        document.body.style.overflow = "inherit";
    } else {
        menu.classList.add("showMenu");
        document.body.style.overflow = "hidden";
    }
}

hamburger.addEventListener("click", toggleMenu);

function barShuffle(x) {
    x.classList.toggle("change");
}
