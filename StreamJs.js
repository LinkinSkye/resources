let homeBtn = document.querySelector(".home-btn");
let abtBtn = document.querySelector(".about-btn");
let dldBtnOuter = document.querySelector(".downloadBtn");
let fileName = document.querySelector(".file-name");
let aboutNav = document.querySelector(".about-nav");
let botBtn = document.querySelector('.bot-btn');
let contactBtn = document.querySelector('.contact-btn');
let links = document.querySelectorAll('.links a');
let botLinks = document.querySelectorAll('.bot-link a');
let chnlLink = document.querySelectorAll('.chnl-link a');
let abtChnl = document.querySelector('.abt-chnl');
let contact = document.querySelectorAll('.contact a');
let footer = document.querySelector('footer');

let timer = 0;

if (document.getElementById("heading").classList.contains("title")) {
    document.querySelector(".title").textContent = 'BISAL FILES';
}

// adding under in home btn at first 
homeBtn.classList.add('active');

// when clicking about
abtBtn.addEventListener("click", () => {
    dldBtnOuter.style.display = "none";
    fileName.style.display = "none";
    footer.style.display = "none";
    aboutNav.style.display = "block";
    aboutNav.style.animation = "strtLoad 1s ease 0s forwards";
});

// when clicking home
homeBtn.addEventListener("click", () => {
    dldBtnOuter.style.display = "flex";
    fileName.style.display = "block";
    footer.style.display = "block";
    window.location.href = "#main";
    aboutNav.style.animation = "strtLoad 1s ease 0s forwards";
    aboutNav.style.display = "none";
});

abtChnl.addEventListener("click", () => {
    timer = 1;
    chnlLink.forEach((i) => {
        i.style.animation = `strtLoad 1s ease ${timer}s forwards, linksBtnAn 2s ease ${timer}s infinite `;
        timer += 0.3;
    });
    timer = 0;
});

function botBtnClicked() {
    var aboutBtn = document.querySelector(".about-btn");
    timer = 1;
    botLinks.forEach((i) => {
        i.style.animation = `linksBtnAn 2s ease ${timer}s infinite ,strtLoad 1s ease ${timer}s forwards`;
        timer += 0.3;
    });
    timer = 0;
    dldBtnOuter.style.display = "none";
    fileName.style.display = "none";
    footer.style.display = "none";
    aboutNav.style.display = "block";
    aboutNav.style.animation = "strtLoad 1s ease 0s forwards";
    var links = document.querySelectorAll('.nryt a');
    links.forEach(function (link) {
        link.classList.remove('active');
    });
    aboutBtn.classList.add('active');
    var links = document.querySelectorAll('.about-nav a');
    links.forEach(function (link) {
        link.classList.remove('active');
    });
    let wlcm = document.querySelector(".wlcm");
    wlcm.classList.add('active');
    var links = document.querySelectorAll('.about-nav a');
    links.forEach(function (link) {
        link.classList.remove('active');
    });
    botBtn.classList.add('active');
}

footerBisalBtnClicked = () => {
    timer = 1;
    contact.forEach((i) => {
        i.style.animation = `linksBtnAn 2s ease ${timer}s infinite ,strtLoad 1s ease ${timer}s forwards`;
        timer += 0.3;
    });

    timer = 0;
    var aboutBtn = document.querySelector(".about-btn");
    timer = 1;
    botLinks.forEach((i) => {
        i.style.animation = `linksBtnAn 2s ease ${timer}s infinite ,strtLoad 1s ease ${timer}s forwards`;
        timer += 0.3;
    });
    timer = 0;
    dldBtnOuter.style.display = "none";
    fileName.style.display = "none";
    footer.style.display = "none";
    aboutNav.style.display = "block";
    aboutNav.style.animation = "strtLoad 1s ease 0s forwards";
    var links = document.querySelectorAll('.nryt a');
    links.forEach(function (link) {
        link.classList.remove('active');
    });
    aboutBtn.classList.add('active');
    var links = document.querySelectorAll('.about-nav a');
    links.forEach(function (link) {
        link.classList.remove('active');
    });
    let wlcm = document.querySelector(".wlcm");
    wlcm.classList.add('active');
    var links = document.querySelectorAll('.about-nav a');
    links.forEach(function (link) {
        link.classList.remove('active');
    });
    contactBtn.classList.add('active');
};

contactBtn.addEventListener("click", () => {
    timer = 1;
    contact.forEach((i) => {
        i.style.animation = `linksBtnAn 2s ease ${timer}s infinite ,strtLoad 1s ease ${timer}s forwards`;
        timer += 0.3;
    });

    timer = 0;
});

// btn animations 
let dldBtn = document.querySelectorAll('.downloadBtn button');
dldBtn.forEach((i) => {
    i.style.animation = `strtLoad 1s ease ${timer}s forwards, linksBtnAn 2s ease ${timer}s infinite`;
    timer += 0.3;
    i.style.setProperty("--beforestyl", `button_shine ${2 + Math.random() * 7}s ease  ${Math.random() * 10}s infinite`);
});

timer = 0;
links.forEach((i) => {
    i.style.animation = `linksBtnAn 2s ease ${timer}s infinite`;
    timer += 0.3;
    i.style.setProperty("--beforestyl", `button_shine ${2 + Math.random() * 7}s ease ${Math.random() * 10}s infinite`);
});

timer = 0;
timer = 0;

function toggleWidth(element) {
    var links = document.querySelectorAll('.about-nav a');
    links.forEach(function (link) {
        link.classList.remove('active');
    });

    element.classList.add('active');
}

function toggleWidthnav(element) {
    var links = document.querySelectorAll('.nryt a');
    links.forEach(function (link) {
        link.classList.remove('active');
    });

    element.classList.add('active');
    var links = document.querySelectorAll('.about-nav a');
    links.forEach(function (link) {
        link.classList.remove('active');
    });
    let wlcm = document.querySelector(".wlcm");
    wlcm.classList.add('active');
}

if (!(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))) {
    Shery.mouseFollower();
    Shery.makeMagnet(".magnet");
}

// file name showing 
var div = document.getElementById('myDiv');
var text = div.textContent;
if (text.length > 300) {
    div.textContent = text.slice(0, 300) + "....";
}

// video player 
const controls = [
    'play-large',
    'rewind', 'play',
    'fast-forward',
    'progress',
    'current-time',
    'duration',
    // 'mute',
    // 'volume',
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

// disabling right click
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

const videolink = window.location.href;
const bisallink = videolink.replace("/page/", "/watch/");

function mxPlayer() {
    const openBisalLink = bisallink;
    const openMx = `intent:${openBisalLink}#Intent;package=com.mxtech.videoplayer.ad;end`;
    window.location.href = openMx;
}

function xPlayer() {
    const openBisalLink = bisallink;
    const openXPlayer = `intent:${openBisalLink}#Intent;package=com.daljeet.xplayer;end`;
    window.location.href = openXPlayer;
}

function linkInApp() {
    const app = `https://play.google.com/store/apps/details?id=com.daljeet.xplayer`;
    window.location.href = app;
}
