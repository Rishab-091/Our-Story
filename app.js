// TYPEWRITER INTRO
const line1 = document.getElementById('line1');
const line2 = document.getElementById('line2');
const beginBtn = document.getElementById('beginBtn');

const text1 = "17 January.";
const text2 = "Two imperfect people. Still choosing each other.";

let i=0;
function typeLine1(){
  if(i<text1.length){
    line1.innerHTML += text1.charAt(i);
    i++;
    setTimeout(typeLine1,120);
  }else{
    i=0;
    setTimeout(typeLine2,500);
  }
}
function typeLine2(){
  if(i<text2.length){
    line2.innerHTML += text2.charAt(i);
    i++;
    setTimeout(typeLine2,50);
  }else{
    beginBtn.style.display='inline-block';
  }
}
typeLine1();

// BEGIN BUTTON SCROLL TO STORY
beginBtn.addEventListener('click',()=>{
  document.getElementById('story').scrollIntoView({behavior:'smooth'});
});

// SCROLL APPEAR SECTIONS
const hiddenSections = document.querySelectorAll('.hidden-section');
window.addEventListener('scroll',()=>{
  hiddenSections.forEach(sec=>{
    const top = sec.getBoundingClientRect().top;
    if(top < window.innerHeight - 100){
      sec.classList.add('show');
    }
  });
});

// MUSIC PLAY
function playMusic(){
  const song = document.getElementById('song');
  song.play();
}
