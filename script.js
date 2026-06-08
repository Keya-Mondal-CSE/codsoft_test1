/* =========================
   DARK MODE TOGGLE
========================= */
alert("JavaScript Loaded");
const toggle = document.getElementById("theme-toggle");

if(toggle){
  toggle.onclick = () => {
    const toggle = document.getElementById("theme-toggle");

if(toggle){
  toggle.onclick = () => {

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
      toggle.innerHTML = "☀️";
    } else {
      toggle.innerHTML = "🌙";
    }

  };
}
  };
}
  document.body.classList.toggle("dark");

  // Change icon
  if(document.body.classList.contains("dark")){
    toggle.innerHTML = "☀️";
  } else {
    toggle.innerHTML = "🌙";
  };


/* =========================
   TYPING EFFECT
========================= */

const textArray = [
  "Developer 🌸",
  "Creative Coder 💻",
  "UI Designer ✨",
  "Problem Solver 💖"
];

let typingText = document.getElementById("typing");

let arrayIndex = 0;
let charIndex = 0;

function typeEffect(){

  if(charIndex < textArray[arrayIndex].length){

    typingText.innerHTML +=
      textArray[arrayIndex].charAt(charIndex);

    charIndex++;

    setTimeout(typeEffect, 100);

  } else {

    setTimeout(eraseEffect, 1500);
  }
}

function eraseEffect(){

  if(charIndex > 0){

    typingText.innerHTML =
      textArray[arrayIndex].substring(0, charIndex - 1);

    charIndex--;

    setTimeout(eraseEffect, 50);

  } else {

    arrayIndex++;

    if(arrayIndex >= textArray.length){
      arrayIndex = 0;
    }

    setTimeout(typeEffect, 500);
  }
}

window.onload = () => {
  typeEffect();
};


/* =========================
   SCROLL REVEAL ANIMATION
========================= */

const hiddenElements =
document.querySelectorAll(".hidden");

const observer =
new IntersectionObserver((entries) => {

  entries.forEach((entry) => {

    if(entry.isIntersecting){

      entry.target.classList.add("show");

    }

  });

});

hiddenElements.forEach((el) =>
observer.observe(el));


/* =========================
   ACTIVE NAVBAR LINK
========================= */

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach((section) => {

    const sectionTop =
      section.offsetTop;

    if(pageYOffset >= sectionTop - 200){

      current = section.getAttribute("id");
    }

  });

  navLinks.forEach((link) => {

    link.classList.remove("active");

    if(link.getAttribute("href")
      === `#${current}`){

      link.classList.add("active");
    }

  });

});


/* =========================
   FLOATING FLOWER EFFECT
========================= */

window.addEventListener("scroll", () => {

  const flowers =
  document.querySelectorAll(".flower");

  flowers.forEach((flower, index) => {

    let speed = (index + 1) * 0.3;

    flower.style.transform =
      `translateY(${
        window.scrollY * speed
      }px) rotate(${
        window.scrollY * 0.1
      }deg)`;

  });

});


/* =========================
   BUTTON RIPPLE EFFECT
========================= */

const buttons =
document.querySelectorAll(".btn");

buttons.forEach((button) => {

  button.addEventListener("click", function(e){

    let x =
      e.clientX - e.target.offsetLeft;

    let y =
      e.clientY - e.target.offsetTop;

    let ripple =
      document.createElement("span");

    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    ripple.classList.add("ripple");

    this.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);

  });

});


/* =========================
   IMAGE HOVER ZOOM EFFECT
========================= */

const images =
document.querySelectorAll(".project-card img");

images.forEach((img) => {

  img.addEventListener("mouseover", () => {

    img.style.transform = "scale(1.08)";
    img.style.transition = "0.5s";

  });

  img.addEventListener("mouseout", () => {

    img.style.transform = "scale(1)";
  });

});


/* =========================
   SMOOTH PAGE LOADER
========================= */

window.addEventListener("load", () => {

  const loader =
  document.getElementById("loader");

  if(loader){

    loader.style.opacity = "0";

    setTimeout(() => {

      loader.style.display = "none";

    }, 800);

  }

});


/* =========================
   CURSOR GLOW EFFECT
========================= */

const cursorGlow =
document.createElement("div");

cursorGlow.classList.add("cursor-glow");

document.body.appendChild(cursorGlow);

document.addEventListener("mousemove", (e) => {

  cursorGlow.style.left =
    e.pageX + "px";

  cursorGlow.style.top =
    e.pageY + "px";

});


/* =========================
   AUTO YEAR IN FOOTER
========================= */

const footer =
document.querySelector("footer");

if(footer){

  const year =
  new Date().getFullYear();

  footer.innerHTML =
  `© ${year} Keya Mondal | Made with 💖 and flowers ✿`;
}