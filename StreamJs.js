let homeBtn = document.querySelector(".home-btn");
let abtBtn = document.querySelector(".about-btn");
let dldBtn_outer = document.querySelector(".downloadBtn");
let file_name = document.querySelector(".file-name");
let about_nav = document.querySelector(".about-nav");
let bot_btn = document.querySelector('.bot-btn');
let contact_btn = document.querySelector('.contact-btn');
let links = document.querySelectorAll('.links a');
let bot_links = document.querySelectorAll('.bot-link a');
let chnl_link = document.querySelectorAll('.chnl-link a');
let abt_chnl = document.querySelector('.abt-chnl');
let contact = document.querySelectorAll('.contact a');
let footer = document.querySelector('footer');

let timer = 0;

if (document.getElementById("heading").classList.contains("title")) {
    document.querySelector(".title").textContent = 'BISAL FILES';
}

// Adding 'active' class to homeBtn at first
homeBtn.classList.add('active');

// When clicking about
abtBtn.addEventListener("click", () => {
    hideElements();
    about_nav.style.display = "block";
    about_nav.style.animation = "strtLoad 1s ease 0s forwards";
});

// When clicking home
homeBtn.addEventListener("click", () => {
    showElements();
    about_nav.style.animation = "strtLoad 1s ease 0s forwards";
    about_nav.style.display = "none";
});

abt_chnl.addEventListener("click", () => {
    animateLinks(chnl_link);
});

function bot_btn_clicked() {
    animateLinks(bot_links);
    hideElements();
    showAboutNav();
    setActiveClass(abtBtn);
    setActiveClass(bot_btn);
}

footer_bisal_btn_clicked = () => {
    animateLinks(contact);
    animateLinks(bot_links);
    hideElements();
    showAboutNav();
    setActiveClass(abtBtn);
    setActiveClass(contact_btn);
};

contact_btn.addEventListener("click", () => {
    animateLinks(contact);
});

// Button animations
animateButtons(document.querySelectorAll('.downloadBtn button'));
animateLinks(links);

function hideElements() {
    dldBtn_outer.style.display = "none";
    file_name.style.display = "none";
    footer.style.display = "none";
}

function showElements() {
    dldBtn_outer.style.display = "flex";
    file_name.style.display = "block";
    footer.style.display = "block";
}

function showAboutNav() {
    about_nav.style.display = "block";
}

function animateLinks(links) {
    timer = 1;
    links.forEach((link) => {
        link.style.animation = `linksBtnAn 2s ease ${timer}s infinite ,strtLoad 1s ease ${timer}s forwards`;
        timer += 0.3;
    });
    timer = 0;
}

function animateButtons(buttons) {
    timer = 0;
    buttons.forEach((button) => {
        button.style.animation = `strtLoad 1s ease ${timer}s forwards, linksBtnAn 2s ease ${timer}s infinite`;
        button.style.setProperty("--beforestyl", `button_shine ${2 + Math.random() * 7}s ease  ${Math.random() * 10}s infinite`);
        timer += 0.3;
    });
}

function setActiveClass(element) {
    let allLinks = document.querySelectorAll('.about-nav a');
    allLinks.forEach((link) => {
        link.classList.remove('active');
    });
    element.classList.add('active');
}

// Disabling right click
document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
});
document.addEventListener('keydown', function (e) {
    if (
        e.key === 'F12' ||
        (e.ctrlKey && e.shiftKey && e.key === 'I') ||
        (e.ctrlKey && e.key === 'u') ||
        e.ctrlKey ||
        e.shiftKey ||
        e.altKey
    ) {
        e.preventDefault();
    }
});

// Video player setup
const controls = [
    'play-large',
    'rewind', 'play',
    'fast-forward',
    'progress',
    'current-time',
    'duration',
    'captions',
    'settings',
    'pip',
    'airplay',
    'download',
    'fullscreen'
];
document.addEventListener('DOMContentLoaded', () => {
    const player = Plyr.setup('.player', { controls });
});

// Redirect functions
const videolink = window.location.href;
const bisallink = videolink.replace("/page/", "/watch/");

function xPlayer() {
    redirectToApp(bisallink);
}

function linkDownload() {
    redirectToApp(bisallink);
}

function linkInApp() {
    const openLinkinlink = `https://play.google.com/store/apps/details?id=com.daljeet.xplayer`;
    window.location.href = openLinkinlink;
}

function redirectToApp(link) {
    const openLinkinlink = `intent:${link}#Intent;package=com.daljeet.xplayer;end`;
    window.location.href = openLinkinlink;
            }
