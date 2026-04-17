document.addEventListener('DOMContentLoaded', () => {
  // Intersection Observer for scroll animations
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Select all elements with the class 'reveal'
  const revealElements = document.querySelectorAll('.reveal');
  revealElements.forEach(el => observer.observe(el));

  // Navbar sticky / shrink effect
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.style.padding = '10px 0';
      navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.5)';
    } else {
      navbar.style.padding = '15px 0';
      navbar.style.boxShadow = 'none';
    }
  });

  // Mobile menu toggle (simple version)
  const hamburger = document.querySelector('.hamburger');
  hamburger.addEventListener('click', () => {
    alert('Mobile menu drawer would open here.');
  });

  // Initialize Swiper Carousels
  if (typeof Swiper !== 'undefined') {
    // Certification Swiper (Left Side)
    new Swiper('.certification-swiper', {
      loop: true,
      effect: 'cards',
      grabCursor: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.certification-pagination',
        clickable: true,
      },
    });

    // Awards/Gems Swiper (Right Side)
    new Swiper('.awards-swiper', {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 20,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.awards-pagination',
        clickable: true,
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
      }
    });
  }
});
