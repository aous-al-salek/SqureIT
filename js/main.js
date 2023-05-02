let scrollBtn = document.getElementById("scrollBtn");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollBtn.style.marginBottom = "0";
    } else {
        scrollBtn.style.marginBottom = "-12em";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

const sun = "/img/sun.svg";
const moon = "/img/moon.svg"

var url = window.location.href;
var lastPart = url.substr(url.lastIndexOf('/') + 1);

function lightMode() {
    var spi = document.images['spi']
    var themeIcon = document.images['theme-icon'];
    var cssElement = document.getElementById('styleMode');
    if (themeIcon.src.endsWith(moon)) {
        window.localStorage.setItem('lightMode', 'disabled');
        cssElement.setAttribute('href', '/css/main.css');
        themeIcon.src = themeIcon.src.substring(0,themeIcon.src.lastIndexOf("/img/moon.svg"))+"/img/sun.svg";
        spi.src = spi.src.substring(0,spi.src.lastIndexOf("/img/search_white_bg.png"))+"/img/search_black_bg.png";
        if (lastPart === "wordsearch") {
            document.getElementById('wspuzzle').src = "/games-tools/wspuzzle";
        }
    } else {
        window.localStorage.setItem('lightMode', 'enabled');
        cssElement.setAttribute('href', '/css/light-mode.css');
        themeIcon.src = themeIcon.src.substring(0,themeIcon.src.lastIndexOf("/img/sun.svg"))+"/img/moon.svg";
        spi.src = spi.src.substring(0,spi.src.lastIndexOf("/img/search_black_bg.png"))+"/img/search_white_bg.png";
        if (lastPart === "wordsearch") {
            document.getElementById('wspuzzle').src = "/games-tools/wspuzzlel";
        }
    }
}

if(localStorage.getItem('lightMode') == 'enabled'){
    lightMode();
}

function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 100;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("activate");
        } else {
            reveals[i].classList.remove("activate");
        }
    }
}

window.addEventListener("scroll", reveal);
reveal();

var headerLogo = document.querySelector('#header-logo');
headerLogo.addEventListener('contextmenu', (v) => v.preventDefault());
function logoClick(event) {
    if (event.button == 0) {
        window.open('/', '_self');
    }
    if (event.button == 1) {
        window.open('/', '_blank');
    }
}

document.getElementById("fcy").innerHTML = `Copyright &copy; ${new Date().getFullYear()} <img src="/img/logo.png" style="width: 150px; margin-bottom: -20px;">`;
