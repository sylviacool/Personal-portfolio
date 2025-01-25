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
