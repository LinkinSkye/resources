let homeBtn = document.querySelector(".home-btn")
let abtBtn = document.querySelector(".about-btn")
let dldBtn_outer = document.querySelector(".downloadBtn")
let storeBtn_outer = document.querySelector(".StoreBtn")

let file_name = document.querySelector(".file-name")
let about_nav = document.querySelector(".about-nav")
let bot_btn = document.querySelector('.bot-btn')
let contact_btn = document.querySelector('.contact-btn')
let links = document.querySelectorAll('.links a')
let bot_links = document.querySelectorAll('.bot-link a')
let chnl_link = document.querySelectorAll('.chnl-link a')
let abt_chnl = document.querySelector('.abt-chnl')
let contact = document.querySelectorAll('.contact a')
let footer = document.querySelector('footer')


let timer = 0

if (document.getElementById("heading").classList.contains("title")) {
    document.querySelector(".title").textContent = 'BISAL FILES'
}


// adding under in home btn at first
homeBtn.classList.add('active');

// when clicking about
abtBtn.addEventListener("click", () => {
    dldBtn_outer.style.display = "none";
    storeBtn_outer.style.display = "none";
    file_name.style.display = "none";
    footer.style.display = "none";
    about_nav.style.display = "block"
    about_nav.style.display = "block"
    about_nav.style.animation = "strtLoad 1s ease 0s forwards"



})
// when clicking home
homeBtn.addEventListener("click", () => {
    dldBtn_outer.style.display = "flex";
    storeBtn_outer.style.display = "flex";
    file_name.style.display = "block";
    footer.style.display = "block";
    window.location.href = "#main";
    about_nav.style.animation = "strtLoad 1s ease 0s forwards"
    about_nav.style.display = "none"

})


abt_chnl.addEventListener("click", () => {
    timer = 1
    chnl_link.forEach((i) => {
        i.style.animation = `strtLoad 1s ease ${timer}s forwards, linksBtnAn 2s ease ${timer}s infinite `
        timer += 0.3;
    });
    timer = 0
});
function bot_btn_clicked() {
    var about_btn = document.querySelector(".about-btn")
    timer = 1;
    bot_links.forEach((i) => {
        i.style.animation = `linksBtnAn 2s ease ${timer}s infinite ,strtLoad 1s ease ${timer}s forwards`;
        timer += 0.3;
    });
    timer = 0;
    dldBtn_outer.style.display = "none";
    storeBtn_outer.style.display = "none";

    file_name.style.display = "none";
    footer.style.display = "none";
    about_nav.style.display = "block"
    about_nav.style.display = "block"
    about_nav.style.animation = "strtLoad 1s ease 0s forwards"
    var links = document.querySelectorAll('.nryt a');
    links.forEach(function (link) {
        link.classList.remove('active');
    });
    about_btn.classList.add('active');
    var links = document.querySelectorAll('.about-nav a');
    links.forEach(function (link) {
        link.classList.remove('active');
    });
    let wlcm = document.querySelector(".wlcm")
    wlcm.classList.add('active');
    var links = document.querySelectorAll('.about-nav a');
    links.forEach(function (link) {
        link.classList.remove('active');
    });
    bot_btn.classList.add('active');
};
footer_bisal_btn_clicked = () => {
    timer = 1;
    contact.forEach((i) => {
        i.style.animation = `linksBtnAn 2s ease ${timer}s infinite ,strtLoad 1s ease ${timer}s forwards`;
        timer += 0.3;
    });

    timer = 0;
    var about_btn = document.querySelector(".about-btn")
    timer = 1;
    bot_links.forEach((i) => {
        i.style.animation = `linksBtnAn 2s ease ${timer}s infinite ,strtLoad 1s ease ${timer}s forwards`;
        timer += 0.3;
    });
    timer = 0;
    dldBtn_outer.style.display = "none";
    storeBtn_outer.style.display = "none";
    file_name.style.display = "none";
    footer.style.display = "none";
    about_nav.style.display = "block"
    about_nav.style.display = "block"
    about_nav.style.animation = "strtLoad 1s ease 0s forwards"
    var links = document.querySelectorAll('.nryt a');
    links.forEach(function (link) {
        link.classList.remove('active');
    });
    about_btn.classList.add('active');
    var links = document.querySelectorAll('.about-nav a');
    links.forEach(function (link) {
        link.classList.remove('active');
    });
    let wlcm = document.querySelector(".wlcm")
    wlcm.classList.add('active');
    var links = document.querySelectorAll('.about-nav a');
    links.forEach(function (link) {
        link.classList.remove('active');
    });
    contact_btn.classList.add('active');
}

contact_btn.addEventListener("click", () => {
    timer = 1;
    contact.forEach((i) => {
        i.style.animation = `linksBtnAn 2s ease ${timer}s infinite ,strtLoad 1s ease ${timer}s forwards`;
        timer += 0.3;
    });

    timer = 0;
})

// btn animations
let dldBtn = document.querySelectorAll('.downloadBtn button')
dldBtn.forEach((i) => {
    i.style.animation = `strtLoad 1s ease ${timer}s forwards, linksBtnAn 2s ease ${timer}s infinite`
    timer += 0.3;
    i.style.setProperty("--beforestyl", `button_shine ${2 + Math.random() * 7}s ease  ${Math.random() * 10}s infinite`);

})

timer = 0
links.forEach((i) => {
    i.style.animation = `linksBtnAn 2s ease ${timer}s infinite`
    timer += 0.3
    i.style.setProperty("--beforestyl", `button_shine ${2 + Math.random() * 7}s ease ${Math.random() * 10}s infinite`);

})
timer = 0
timer = 0

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
    let wlcm = document.querySelector(".wlcm")
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
    const player = Plyr.setup('.player', {
        controls
    });
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
const Linkinlink = videolink.replace("/page/", "/watch/");

function vlc_player() {
    const openLinkinlink = Linkinlink;
    const openVlc = `vlc://${openLinkinlink}`;
    window.location.href = openVlc;
}

function mx_player() {
    const openLinkinlink = Linkinlink;
    const openMx = `intent:${openLinkinlink}#Intent;package=com.mxtech.videoplayer.ad;end`;
    window.location.href = openMx;
}

function x_player() {
    const openLinkinlink = Linkinlink;
    const openX = `intent:${openLinkinlink}#Intent;package=com.daljeet.xplayer;end`;
    window.location.href = openX;
}

function playit_player() {
    const openLinkinlink = Linkinlink;
    const openPlayit = `playit://playerv2/video?url=${openLinkinlink}`;
    window.location.href = openPlayit;
}

function s_player() {
    const openLinkinlink = Linkinlink;
    const openSplayer = `intent:${openLinkinlink}#Intent;action=com.young.simple.player.playback_online;package=com.young.simple.player;end`;
    window.location.href = openSplayer;
}

function km_player() {
    const openLinkinlink = Linkinlink;
    const openKmplayer = `intent:${openLinkinlink}#Intent;package=com.kmplayer;end`;
    window.location.href = openKmplayer;
}

function hd_player() {
    const openLinkinlink = Linkinlink;
    const openHDplayer = `intent:${openLinkinlink}#Intent;package=uplayer.video.player;end`;
    window.location.href = openHDplayer;
}

function LinkinDownload() {
    const openLinkinlink = Linkinlink;
    window.location.href = openLinkinlink;
      }


function LinkinApp() {
    const openLinkinlink = `https://play.google.com/store/apps/details?id=com.daljeet.xplayer`;
    window.location.href = openLinkinlink;
      }
