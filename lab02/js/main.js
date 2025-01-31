// Get the element with the class "icon"
let icon = document.getElementsByClassName("icon")[0];

// Add an event listener for the 'click' event on the icon element if it exists
if (icon) {
    icon.addEventListener('click', responsive_control);
}

// Function to control the responsiveness of the navigation bar
function responsive_control() {
  // Get the element with the id "myTopnav"
  let x = document.getElementById("myTopnav");

  // Check if the class name of the element is "topnav"
  if (x.className === "topnav") {
    // If it is, add the "responsive" class to the element
    x.className += " responsive";
  } else {
    // If it's not, remove the "responsive" class from the element
    x.className = "topnav";
  }
}

// Slideshow Functionality (for section1.html)
// --------------------
let slideIndex = 1;
showSlides(slideIndex);

// Function to move slides forward or backward
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Function to go to a specific slide
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Main function to handle slide visibility
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    if (slides.length === 0) {
        return; // Prevent errors if slideshow is not present
    }

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    if (dots.length > 0) {
        dots[slideIndex - 1].className += " active";
    }
}
function filterCharacters(category) {
    let cards = document.querySelectorAll('.column');
    if (category === "all") {
        cards.forEach(card => card.style.display = "block");
    } else {
        cards.forEach(card => {
            if (card.classList.contains(category)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    }
}
