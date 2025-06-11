'use strict';

const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const header = document.querySelector("[data-header]");

navToggleBtn.addEventListener("click", function () {
  this.classList.toggle("active");
  header.classList.toggle("active");
});

const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
  window.scrollY >= 500 ? goTopBtn.classList.add("active")
    : goTopBtn.classList.remove("active");
});

function validateAndRedirect(event) {
  // Prevent the default form submission
  event.preventDefault();

  var name = document.querySelector('[name="name"]').value;
  var email = document.querySelector('[name="email"]').value;
  var message = document.querySelector('[name="message"]').value;

  // Basic validation
  if (!name || !email || !message) {
      alert('Vă rugăm să completați toate câmpurile.');
      return false;
  }

  // Redirect to validare.html if validation passes
  window.location.href = 'validare.html';
  return false; // Return false to prevent any further form submission
}

document.addEventListener('DOMContentLoaded', function() {
  // Toggle pentru meniu
  const navToggle = document.querySelector('.header');
  navToggle.addEventListener('click', function() {
    this.classList.toggle('active');
  });

  // Efect de scroll pentru butonul 'Înapoi sus'
  const topButton = document.querySelector('.go-top');
  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 100) {
      topButton.classList.add('show');
    } else {
      topButton.classList.remove('show');
    }
  });

  // Smooth scrolling pentru linkuri
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    }); 
  });

  // Animatii la scroll pentru elementele .fade-in
  const faders = document.querySelectorAll('.fade-in');
  const appearOptions = {
    threshold: 0.5,
    rootMargin: "0px 0px -100px 0px"
  };
  const appearOnScroll = new IntersectionObserver(function(
    entries,
    appearOnScroll
  ) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add('appear');
        appearOnScroll.unobserve(entry.target);
      }
    });
  }, appearOptions);

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });
  
  // Efect hover pentru linkuri din navbar
  const navLinks


