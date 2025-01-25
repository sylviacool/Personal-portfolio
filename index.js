const navToggleElement = document.querySelector(".nav-toggle");
console.log(navToggleElement); 

navToggleElement.addEventListener("click", function () {
  const linksElement = document.querySelector(".links");
  const mediaElement = document.querySelector('.social-media-icons');
   //console.log(linksElement);
  linksElement.classList.toggle("display-links");
  mediaElement.classList.toggle('display-links');
  //console.log("Toggle triggered!");
});



document.addEventListener('DOMContentLoaded', function() {
const TypewriterElement = document.getElementById("h1-text");

  if (TypewriterElement) {
    new Typewriter(TypewriterElement, {
      strings: ["Hi, I'm Ogechi<span class='highlight'> Uzoma</span>"],
      autoStart: true,
      cursor: null,
      delay: 120,
      loop:false,
    });
  } else {
        console.error('Element with id "h1-text" not found!');

  }
});