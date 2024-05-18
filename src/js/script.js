
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
      const randomWidth = Math.floor(Math.random() * 200) + 300;

      // Apply random sizes to the element
      element.style.width = randomWidth + 'px';
  });
});

//function to create url names for pages
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

//function to give head logo an animation
document.addEventListener('DOMContentLoaded', function() {
  const image = document.getElementById('headlogo');
    let angle = 0;
    let direction = 1;

    function rotateImage() {
        angle += direction * 0.25; //0.25 = rotation speed
        image.style.transform = `rotateZ(${angle}deg)`;

        if (angle >= 10 || angle <= -10) {
            direction *= -1; // Reverse the direction if hits max angle on certain direction
        }

        requestAnimationFrame(rotateImage);
    }

    rotateImage();
});