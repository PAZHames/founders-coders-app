// //call functions

// window.onscroll = function() {
//     stickToTop();
// }

// // variables

// var navbar = document.getElementById("navbar");

// var sticky = navbar.offsetTop;

// //functions

// function stickToTop() {
//     if (window.pageYOffset <= sticky) {
//         navbar.classList.add("sticky")
//     }
//     else {
//         navbar.classList.remove("sticky")
//     }
// }

window.addEventListener("scroll", function () {
    stickyNavbar();
  });


  function stickyNavbar() {
    var navbar = document.getElementById("navbar");
    var threshold = 200; // Adjust this value as needed
  
    if (window.pageYOffset >= threshold) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  }

  stickyNavbar();