const music = document.getElementById("bgMusic");
const btn = document.getElementById("startBtn");

const playlist = [
  "music/photograph.mp3",
  "music/if-we-have-each-other.mp3",
  "music/until-i-found-you.mp3"
];

let songIndex = 0;
let started = false;

btn.addEventListener("click", () => {
  if (!started) {
    music.src = playlist[songIndex];
    music.volume = 0;
    music.play();
    fadeIn();
    btn.innerText = "Music Playing ❤️";
    started = true;
  }
});

music.addEventListener("ended", () => {
  songIndex = (songIndex + 1) % playlist.length;
  music.src = playlist[songIndex];
  music.play();
});

function fadeIn() {
  let v = 0;
  const fade = setInterval(() => {
    if (v < 0.4) {
      v += 0.02;
      music.volume = v;
    } else {
      clearInterval(fade);
    }
  }, 150);
}

/* Scroll reveal */
const sections = document.querySelectorAll(".section");
window.addEventListener("scroll", () => {
  sections.forEach(sec => {
    if (sec.getBoundingClientRect().top < window.innerHeight * 0.8) {
      sec.classList.add("show");
    }
  });
});

/* Floating hearts */
setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerText = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 3 + Math.random() * 3 + "s";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 6000);
}, 700);

window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});
