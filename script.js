let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
sections.forEach(sec =>{
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');
    if(top>= offset && top<=offset +height){
        navLinks.forEach(links =>{
            links.classList.remove('active');
            document.querySelector('header nav a [href*'+ id +']').classList.add('active')
        })
    }
})
}
menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx.x');
    navbar.classList.toggle('active');
}

// Model
// Get modal elements
const modal = document.getElementById('myModal');
const openModal = document.getElementById('openModal');
const closeModal = document.querySelector('.close');

// Open modal
openModal.addEventListener('click', () => {
  modal.style.display = 'flex';
  document.body.classList.add('modal-open'); // Prevent scrolling on the body
});

// Close modal when clicking the close button
closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
  document.body.classList.remove('modal-open'); // Allow scrolling on the body
});

// Close modal when clicking outside the modal content
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
    document.body.classList.remove('modal-open'); // Allow scrolling on the body
  }
});


// Get all buttons that open modals
var buttons = document.querySelectorAll(".read");

// Loop through buttons to attach click events
buttons.forEach(function (button) {
  button.onclick = function () {
    var modalId = button.getAttribute("data-modal"); // Get the modal ID from the button
    var modal = document.getElementById(modalId); // Find the corresponding modal
    if (modal) {
      modal.style.display = "block";
    }

    // Close modal when clicking on the close button
    var span = modal.querySelector(".close");
    span.onclick = function () {
      modal.style.display = "none";
    };

    // Close modal when clicking outside of the modal
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
  };
});


// Select all modal buttons
var modalButtons = document.querySelectorAll("button[id='openModal']");

// Loop through each button and attach event listeners
modalButtons.forEach(function (btn) {
  btn.addEventListener("click", function () {
    // Find the corresponding modal
    var modal = btn.nextElementSibling;
    if (modal && modal.classList.contains("modal")) {
      modal.style.display = "block";

      // Close the modal when 'X' is clicked
      var closeBtn = modal.querySelector(".close");
      closeBtn.onclick = function () {
        modal.style.display = "none";
      };

      // Close the modal when clicking outside of it
      window.onclick = function (event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      };
    }
  });
});


// Select all counter elements
const counters = document.querySelectorAll(".counter");

// Function to animate counters
counters.forEach((counter) => {
  const target = +counter.innerText; // Get the target value from the current text content
  counter.innerText = "0"; // Reset the displayed number to 0

  const updateCounter = () => {
    const current = +counter.innerText; // Get the current value
    const increment = Math.ceil(target / 200); // Calculate the increment step

    if (current < target) {
      // Increase the current value
      counter.innerText = current + increment > target ? target : current + increment;
      setTimeout(updateCounter, 10); // Repeat the function every 10ms
    } else {
      counter.innerText = target; // Ensure the exact target value is displayed
    }
  };

  // Start the animation
  updateCounter();
});


document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const filterItems = document.querySelectorAll(".filter-item");

  filterButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      const filter = button.getAttribute("data-filter");

      // Remove active class from all buttons
      filterButtons.forEach((btn) => btn.classList.remove("active-btn"));
      button.classList.add("active-btn");

      // Filter items based on data-filter
      filterItems.forEach((item) => {
        if (filter === "all" || item.classList.contains(filter)) {
          item.style.display = "block"; // Show the item
        } else {
          item.style.display = "none"; // Hide the item
        }
      });
    });
  });
});




document.addEventListener("DOMContentLoaded", () => {
  // Modal and button elements ko select karo
  const modal = document.getElementById("myModal2");
  const openModalButton = document.getElementById("openModal2");
  const closeModalButton = document.querySelector(".close2");

  // Modal open karne ka function
  openModalButton.addEventListener("click", () => {
    modal.style.display = "block";
  });

  // Modal close karne ka function
  closeModalButton.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Modal ke bahar click karne par close karna
  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});


document.querySelectorAll('.gallery-image').forEach((image, index) => {
  image.addEventListener('click', function () {
    const carousel = document.querySelector('#carouselImages');
    const bsCarousel = bootstrap.Carousel.getInstance(carousel) || new bootstrap.Carousel(carousel);
    bsCarousel.to(index); // Navigate to the clicked image index
  });
});