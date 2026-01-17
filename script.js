/* ===============================
   GLOBAL VARIABLES
================================ */
const music = document.getElementById("bgMusic");
const startBtn = document.getElementById("startBtn");

const playlist = [
  "music/photograph.mp3",
  "music/if-we-have-each-other.mp3",
  "music/until-i-found-you.mp3"
];

let currentSong = 0;
let musicStarted = false;

/* ===============================
   MUSIC CONTROLS
================================ */
function playMusic() {
  if (!musicStarted) {
    music.src = playlist[currentSong];
    music.volume = 0;
    music.play();
    fadeInMusic();
    musicStarted = true;
    startBtn.innerText = "Music Playing ❤️";
  }
}

function fadeInMusic() {
  let vol = 0;
  const fade = setInterval(() => {
    if (vol < 0.4) {
      vol += 0.02;
      music.volume = vol;
    } else {
      clearInterval(fade);
    }
  }, 150);
}

music.addEventListener("ended", () => {
  currentSong = (currentSong + 1) % playlist.length;
  music.src = playlist[currentSong];
  music.play();
});

/* ===============================
   BUTTON CLICK
================================ */
startBtn.addEventListener("click", playMusic);

/* ===============================
   SCROLL REVEAL ANIMATION
================================ */
const sections = document.querySelectorAll(".section");

const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;

  sections.forEach(section => {
    const boxTop = section.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      section.classList.add("show");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);

/* ===============================
   HEARTS FLOATING EFFECT
================================ */
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "❤️";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 3 + Math.random() * 3 + "s";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6000);
}

setInterval(createHeart, 700);

/* ===============================
   SMOOTH PAGE LOAD
================================ */
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});
