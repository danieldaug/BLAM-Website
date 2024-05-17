
function loadnav(b){
    $(b).load("nav.html");
  };

var bar = document.getElementById("navbar")
loadnav(bar);

//function to randomize sizes of gallery images
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll('.artpiece');

  elements.forEach(element => {
      // Generate random width and height between 300px and 550px
      const randomWidth = Math.floor(Math.random() * 250) + 300;

      // Apply random sizes to the element
      element.style.width = randomWidth + 'px';
  });
});

window.onload = function() {
  // Get the current filename from the URL
  var path = window.location.pathname;
  var page = path.split("/").pop();

  // Define the mapping of filenames to new URLs
  var urlMapping = {
      "index.html": "/home",
      "gallery.html": "/gallery",
      "store.html": "/storenotice",
      "contact.html": "/contact"
  };

  // Change the URL based on the current page
  if (urlMapping[page]) {
      history.pushState(null, "", urlMapping[page]);
  }
};