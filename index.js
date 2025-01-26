//NAVHEADER SECTION

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



//HERO SECTION; TYPEWRITER EFFECT
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


//ABOUT SECTION
  // 1. Hide all content sections
   // 2. Remove 'active-title' class from all titles
   // 3. Show the content for the clicked title
    // 4. Add underline to the clicked title

    
   function titleToggle(sectionId) {
     const contents = document.querySelectorAll(".contents");
     contents.forEach(function (content) {
       content.classList.remove("active");
       content.style.display = "none";
     });

  
     const titles = document.querySelectorAll(".titles");
     titles.forEach(function (title) {
       title.classList.remove("active-title");
     });

     
     const activeContent = document.getElementById(sectionId);
     activeContent.classList.add("active");
     activeContent.style.display = "block";


     document.querySelector(`.title[onclick="titleToggle('${sectionId}')"]`)
       .classList.add("active-title");
   }


        /*
         const titles = document.querySelectorAll(".titles");
         const contents = document.querySelectorAll(".contents");

         function titleToggle(sectionId) {
          for (title of titles) {
            title.classList.remove('active-title')

          }
         }*/

         

