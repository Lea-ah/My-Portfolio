
// < =============== NAVBAR =============== >

// Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li')

  // Toggle Nav ===>
  burger.addEventListener('click',() =>{
    nav.classList.toggle('nav-active');

    // Animate links ===>
    navLinks.forEach((link, index) => {
      if(link.style.animation) {
        link.style.animation = ''
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`
      }
    });

      // Burger Animation ===>
      burger.classList.toggle('toggle');
  });
}

navSlide();

    // < =============== RESUME =============== >

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

// < =============== CONTACT =============== >
