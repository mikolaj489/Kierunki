const title = document.querySelector('.animation-header-container');
const logo = document.querySelector('.logo');
const cover = document.querySelector('.cover');
const subText = document.querySelector('.sub-animation > p');
const body = document.querySelector('body');
const arrows = document.querySelector('.arrow-container');
const initialAnimPanel = document.querySelector('.initial-animation');
const checkbox = document.querySelector('.anim-button');
const initialPanelButton = document.querySelector('.initial-panel-button');

// COOKIES
function getCookie(name) {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.startsWith(name + '=')) {
            return decodeURIComponent(cookie.split('=')[1]);
        }
    }
    return null;
}
function setCookie(name, value, days) {
    const expires = new Date();
    expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
    const expiresString = "expires=" + expires.toUTCString();
    // Ustawienie ciasteczka z atrybutem SameSite=None oraz Secure
    document.cookie = `${name}=${encodeURIComponent(value)}; ${expiresString}; path=/; SameSite=None; Secure`;
}
function removeCookie(name) {
    document.cookie = `${encodeURIComponent(name)}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; SameSite=None; Secure`;
}
// COOKIES
const trueOrFalse = document.querySelectorAll('.initial-panel-button svg');
console.log(trueOrFalse);
window.addEventListener('DOMContentLoaded', () => {

    if (!checkbox || !initialPanelButton) {
        console.warn('Nie znaleziono elementów checkbox lub initialPanelButton.');
        return;
    }
    if (getCookie("On") === "true") {
        checkbox.checked = true;
        trueOrFalse[0].style.display = 'none'; 
        trueOrFalse[1].style.display = 'block'; 
        initialPanelButton.style.setProperty('border', '2px solid hsl(0, 73%, 34%)', 'important');
        initialPanelButton.style.setProperty('background-color', 'hsla(0, 46%, 23%, 0.7)', 'important');
    }

    checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
             trueOrFalse[0].style.display = 'none'; 
            trueOrFalse[1].style.display = 'block'; 
            initialPanelButton.style.setProperty('border', '2px solid hsl(0, 73%, 34%)', 'important');
            initialPanelButton.style.setProperty('background-color', 'hsla(0, 46%, 23%, 0.7)', 'important');
            console.log('Checkbox jest zaznaczony');
            setCookie("On", "true", 1);
        } else {
             trueOrFalse[1].style.display = 'none'; 
            trueOrFalse[0].style.display = 'block'; 
            initialPanelButton.style.removeProperty('border');
            initialPanelButton.style.removeProperty('background-color');
            console.log('Checkbox NIE jest zaznaczony');
            removeCookie("On");
        }
    });
});
if (getCookie('On')) {
   trueOrFalse[0].style.display = 'none'; 
   trueOrFalse[1].style.display = 'block'; 
   initialAnimPanel.style.display = 'none';
   body.style.overflowY = "scroll";
}
if (!getCookie('On')) {
    body.style.overflow = "hidden";
}
function hideElements() {
    title.style.visibility = 'hidden';
    if (checkbox && initialPanelButton) {
        if (checkbox.checked) {
            initialPanelButton.style.setProperty('border', '2px solid hsl(0, 73%, 34%)', 'important');
            initialPanelButton.style.setProperty('background-color', 'hsla(0, 46%, 23%, 0.7)', 'important');
        } else {
            initialPanelButton.style.removeProperty('border');
            initialPanelButton.style.removeProperty('background-color');
        }
    }
    subText.style.visibility = 'hidden';
}

function showElements() {
    title.style.visibility = 'visible';
    subText.style.visibility = 'visible';
}

function animationOnLoad() {
    logo.style.animation = 'onLoad 2s ease .2s 1 forwards';
    setTimeout(() => {
        logo.style.animation = 'showText 2s ease 0s 1 forwards';
        cover.style.animation = 'showText 2s ease 0s 1 forwards';
    }, 2200);
    setTimeout(() => {
        showElements();
    }, 3000);
    setTimeout(() => {
        subText.style.animation = 'showSubText 1.5s ease-out 0s 1 forwards';
        arrows.style.animation = 'arrowAnimate 3s ease-out 2s infinite forwards';
    }, 3100);
}

hideElements();
setTimeout(animationOnLoad, 200);

let initialPanelHidden = false;

setTimeout(() => {
    // Dodaj sztuczny scroll
    const fakeScroll = document.createElement('div');
    fakeScroll.style.height = '150vh';
    fakeScroll.style.pointerEvents = 'none';
    fakeScroll.id = 'fake-scroll';
    document.body.appendChild(fakeScroll);
    window.addEventListener('scroll', hideInitialPanelOnScroll);
    window.addEventListener('wheel', hideInitialPanelOnScroll);
    window.addEventListener('touchmove', hideInitialPanelOnScroll);
}, 5500);

function hideInitialPanelOnScroll() {
    if (!initialPanelHidden) {
        initialAnimPanel.style.animation = 'scrollAnimation 1s ease-in 0s 1 forwards';
        initialPanelHidden = true;
        window.removeEventListener('scroll', hideInitialPanelOnScroll);
        window.removeEventListener('wheel', hideInitialPanelOnScroll);
        window.removeEventListener('touchmove', hideInitialPanelOnScroll);
        window.scrollTo({ top: 0, behavior: 'smooth' });

        setTimeout(() => {
            initialAnimPanel.style.display = 'none';
            // Usuń sztuczny scroll
            const fakeScroll = document.getElementById('fake-scroll');
            if (fakeScroll) fakeScroll.remove();
            body.style.overflowY = "scroll";
        }, 1000);
    }
}

const links = document.querySelectorAll('.projects-content > div');


const projectUrls = [
    "https://mikolaj489.github.io/SalonGier.github.io/",
    "https://mikolaj489.github.io/Gra-Mikolajkowa.github.io/",
    "https://mikolaj489.github.io/GraDydaktyczna.github.io/",
    "https://mikolaj489.github.io/platforma.github.com/",
    "https://mikolaj489.github.io/Obliczenia-Geometryczne.github.io/"
];

links.forEach((div, i) => {
    div.style.cursor = "pointer";
    div.addEventListener('click', () => {
        if (projectUrls[i]) {
            window.open(projectUrls[i], '_blank');
        }
    });
});
document.querySelectorAll('.rating').forEach(rating => {
    rating.addEventListener('click', e => {
        e.stopPropagation();
    });
});

const animateText = document.querySelectorAll('.text');


setTimeout(() => {
    animateText[0].style.display = 'block';
    animateText[1].style.display = 'none';
    animateText[2].style.display = 'none';
}, 0);
setTimeout(() => {
    animateText[0].style.display = 'none';
    animateText[1].style.display = 'block';
    animateText[2].style.display = 'none';
}, 13000);
setTimeout(() => {
    animateText[0].style.display = 'none';
    animateText[1].style.display = 'none';
    animateText[2].style.display = 'block';
}, 130000);