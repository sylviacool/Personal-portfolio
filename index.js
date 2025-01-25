const navToggleElement = document.querySelector(".nav-toggle");
console.log(navToggleElement); 

navToggleElement.addEventListener("click", function () {
  const linksElement = document.querySelector(".links");
   console.log(linksElement);
  linksElement.classList.toggle("display-links");
  console.log("Toggle triggered!");
});
