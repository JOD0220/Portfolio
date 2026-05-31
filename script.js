const text = `root@shayaan:~$ whoami

Shayaan Khan

Cybersecurity Researcher
VAPT Enthusiast
Security Blogger

root@shayaan:~$`;

let i = 0;

function type(){

    if(i < text.length){

        document.getElementById("typing").textContent += text.charAt(i);

        i++;

        setTimeout(type,40);
    }
}

type();


const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove",(e)=>{

    glow.style.left = e.clientX - 200 + "px";
    glow.style.top = e.clientY - 200 + "px";

});
const cards = document.querySelectorAll(
'.skill-card,.stat-card,.timeline-box'
);

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0px)";
}

});

},{threshold:0.2});

cards.forEach(card=>{

card.style.opacity="0";

card.style.transform="translateY(80px)";

card.style.transition="1s";

observer.observe(card);

});

/* LOADER */

window.addEventListener("load",()=>{

setTimeout(()=>{

document.getElementById("loader").style.opacity="0";

document.getElementById("loader").style.pointerEvents="none";

setTimeout(()=>{

document.getElementById("loader").remove();

},1000);

},3000);

});


/* PROJECT ANIMATION */

const projectCards =
document.querySelectorAll(
'.project-card,.cert-card'
);

projectCards.forEach(card=>{

observer.observe(card);

});


/* GLITCH EFFECT */

const logo =
document.querySelector('.logo');

setInterval(()=>{

logo.style.textShadow =
`
0 0 10px red,
2px 0 red,
-2px 0 white
`;

setTimeout(()=>{

logo.style.textShadow="none";

},150);

},5000);

/* PARTICLES */

const particleContainer =
document.getElementById("particles");

for(let i=0;i<50;i++){

const particle =
document.createElement("div");

particle.classList.add("particle");

particle.style.left =
Math.random()*100 + "%";

particle.style.animationDelay =
Math.random()*15 + "s";

particle.style.animationDuration =
10 + Math.random()*10 + "s";

particleContainer.appendChild(
particle
);

}

/* MOBILE MENU */

const menuBtn =
document.querySelector(".menu-toggle");

const navLinks =
document.querySelector(".nav-links");

menuBtn.addEventListener("click",()=>{

navLinks.classList.toggle("active");

});