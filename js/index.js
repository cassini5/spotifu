const btnLayoutHome = document.querySelector("#btnLayoutHome");
const btnLayoutForyou = document.querySelector("#btnLayoutForyou");
const btnLayoutRecentlyHeard = document.querySelector("#btnLayoutRecentlyHeard");
const btnLayoutYourlikes = document.querySelector("#btnLayoutYourlikes");

const layoutHome = document.querySelector("#layoutHome");
const layoutForyou = document.querySelector("#layoutForyou");
const layoutRecentlyHeard = document.querySelector("#layoutRecentlyHeard");
const layoutYourlikes = document.querySelector("#layoutYourlikes");


btnLayoutHome.addEventListener('click', e => {
    layoutHome.hidden = false;
    layoutForyou.hidden = true;
    layoutRecentlyHeard.hidden = true;
    layoutYourlikes.hidden = true;
});

btnLayoutForyou.addEventListener('click', e => {
    layoutHome.hidden = true;
    layoutForyou.hidden = false;
    layoutRecentlyHeard.hidden = true;
    layoutYourlikes.hidden = true;
});

btnLayoutRecentlyHeard.addEventListener('click', e => {
    layoutHome.hidden = true;
    layoutForyou.hidden = true;
    layoutRecentlyHeard.hidden = false;
    layoutYourlikes.hidden = true;
});

btnLayoutYourlikes.addEventListener('click', e => {
    layoutHome.hidden = true;
    layoutForyou.hidden = true;
    layoutRecentlyHeard.hidden = true;
    layoutYourlikes.hidden = false;
});