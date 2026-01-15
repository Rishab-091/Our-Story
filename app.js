// TYPEWRITER INTRO
const line1=document.getElementById('line1');
const line2=document.getElementById('line2');
const beginBtn=document.getElementById('beginBtn');
const text1="17 January.";
const text2="Two imperfect people. Still choosing each other.";
let i=0;
function typeLine1(){if(i<text1.length){line1.innerHTML+=text1.charAt(i);i++;setTimeout(typeLine1,120);}else{i=0;setTimeout(typeLine2,500);}}
function typeLine2(){if(i<text2.length){line2.innerHTML+=text2.charAt(i);i++;setTimeout(typeLine2,50);}else{beginBtn.style.display='inline-block';}}
typeLine1();
beginBtn.addEventListener('click',()=>{document.getElementById('story').scrollIntoView({behavior:'smooth'});});

// SCROLL REVEAL
const hiddenSections=document.querySelectorAll('.hidden-section');
window.addEventListener('scroll',()=>{hiddenSections.forEach(sec=>{const top=sec.getBoundingClientRect().top;if(top<window.innerHeight-100){sec.classList.add('show');}});});

// MUSIC
function playMusic(){document.getElementById('song').play();}

// HEART PARTICLES
const canvas=document.getElementById('hearts');
const ctx=canvas.getContext('2d');
canvas.width=window.innerWidth;canvas.height=window.innerHeight;
class Heart{constructor(){this.x=Math.random()*canvas.width;this.y=canvas.height+Math.random()*100;this.size=5+Math.random()*5;this.speed=1+Math.random()*2;this.opacity=0.5+Math.random()*0.5;}draw(){ctx.fillStyle=`rgba(255,143,179,${this.opacity})`;ctx.beginPath();ctx.arc(this.x,this.y,this.size,0,Math.PI*2);ctx.fill();}update(){this.y-=this.speed;if(this.y<-10){this.y=canvas.height+10;this.x=Math.random()*canvas.width;}this.draw();}}
const hearts=[];for(let i=0;i<100;i++)hearts.push(new Heart());
function animateHearts(){ctx.clearRect(0,0,canvas.width,canvas.height);hearts.forEach(h=>h.update());requestAnimationFrame(animateHearts);}
animateHearts();
window.addEventListener('resize',()=>{canvas.width=window.innerWidth;canvas.height=window.innerHeight;});

// STARS IN MEMORIES
const stars=document.getElementById('stars');const sctx=stars.getContext('2d');stars.width=window.innerWidth;stars.height=window.innerHeight;
const starArr=[];for(let i=0;i<150;i++){starArr.push({x:Math.random()*stars.width,y:Math.random()*stars.height,size:Math.random()*2+1,dx:Math.random()*0.3-0.15,dy:Math.random()*0.3-0.15});}
function animateStars(){sctx.clearRect(0,0,stars.width,stars.height);starArr.forEach(st=>{sctx.fillStyle="#fff";sctx.beginPath();sctx.arc(st.x,st.y,st.size,0,Math.PI*2);sctx.fill();st.x+=st.dx;st.y+=st.dy;if(st.x>stars.width)st.x=0;if(st.x<0)st.x=stars.width;if(st.y>stars.height)st.y=0;if(st.y<0)st.y=stars.height;});requestAnimationFrame(animateStars);}
animateStars();

// COUNTDOWN TO FIRST MEET
const daysEl=document.getElementById('days');
const hoursEl=document.getElementById('hours');
const minutesEl=document.getElementById('minutes');
const meetDate=new Date("March 1, 2026 00:00:00").getTime();
function updateCountdown(){const now=new Date().getTime();const distance=meetDate-now;
const days=Math.floor(distance/(1000*60*60*24));
const hours=Math.floor((distance%(1000*60*60*24))/(1000*60*60));
const minutes=Math.floor((distance%(1000*60*60))/(1000*60));
daysEl.innerText=days;hoursEl.innerText=hours;minutesEl.innerText=minutes;}
setInterval(updateCountdown,1000);
updateCountdown();

// PLANE CURVED PATH (distance)
const plane=document.getElementById('plane');
const curveCanvas=document.getElementById('distance-curve');
const ctxC=curveCanvas.getContext('2d');
curveCanvas.width=curveCanvas.offsetWidth;
curveCanvas.height=curveCanvas.offsetHeight;
const start={x:0,y:curveCanvas.height-10};
const control={x:curveCanvas.width/2,y:-100};
const end={x:curveCanvas.width-50,y:curveCanvas.height-10};
let t=0;function animatePlane(){t+=0.002;if(t>1)t=0;
const x=(1-t)*(1-t)*start.x+2*(1-t)*t*control.x+t*t*end.x;
const y=(1-t)*(1-t)*start.y+2*(1-t)*t*control.y+t*t*end.y;
plane.style.left=x+'px';plane.style.top=y+'px';
requestAnimationFrame(animatePlane);}
animatePlane();

// CLICKABLE HEARTS
document.body.addEventListener('click',e=>{
  const heart=document.createElement('div');heart.innerText='💖';heart.style.position='absolute';
  heart.style.left=e.clientX+'px';heart.style.top=e.clientY+'px';heart.style.fontSize='20px';
  heart.style.opacity='1';document.body.appendChild(heart);
  setTimeout(()=>heart.remove(),1000);
});
