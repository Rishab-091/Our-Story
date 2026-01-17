/* LOADER */
window.onload = () => {
  document.getElementById("loader").style.display = "none";
};

/* AUTO MUSIC WITH FADE */
const tracks = [
  "music/if-we-have-each-other.mp3",
  "music/until-i-found-you.mp3",
  "music/photograph.mp3"
];

let index = 0;
let audio = new Audio(tracks[index]);
audio.volume = 0;

function fadeIn() {
  let v = 0;
  const i = setInterval(() => {
    if (v >= 0.6) clearInterval(i);
    audio.volume = v;
    v += 0.02;
  }, 100);
}

function fadeOut(next) {
  const i = setInterval(() => {
    if (audio.volume <= 0) {
      clearInterval(i);
      audio.src = tracks[next];
      audio.play();
      fadeIn();
    }
    audio.volume -= 0.02;
  }, 100);
}

audio.addEventListener("ended", () => {
  index = (index + 1) % tracks.length;
  fadeOut(index);
});

/* AUTO START ON FIRST CLICK */
document.body.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    fadeIn();
  }
}, { once: true });

document.getElementById("musicToggle").onclick = () => {
  audio.paused ? audio.play() : audio.pause();
};

/* TYPED TEXT */
const text = "Not just love. A universe.";
let i = 0;
setInterval(() => {
  if (i < text.length) {
    document.querySelector(".typed").innerHTML += text[i++];
  }
}, 120);

/* PARTICLES */
const canvas = document.getElementById("bg");
const ctx = canvas.getContext("2d");

function resize() {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
}
resize();
window.onresize = resize;

const particles = Array.from({ length: 100 }, () => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  r: Math.random() * 2,
  dx: Math.random() - 0.5,
  dy: Math.random() - 0.5
}));

function animate() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  particles.forEach(p => {
    p.x += p.dx;
    p.y += p.dy;
    if (p.x<0||p.x>canvas.width) p.dx*=-1;
    if (p.y<0||p.y>canvas.height) p.dy*=-1;
    ctx.fillStyle = "rgba(255,255,255,0.25)";
    ctx.beginPath();
    ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
    ctx.fill();
  });
  requestAnimationFrame(animate);
}
animate();
