 /**
   * Testimonials slider
   */
 new Swiper('.testimonials-slider', {
  speed: 600,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  slidesPerView: 'auto',
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  }
});
AOS.init();
document.addEventListener("DOMContentLoaded", function () {
  // Function to animate the counter
  function animateCounter(element, target) {
    let current = 0;
    const increment = Math.ceil(target / 100); // Adjust speed by changing the divisor
    const interval = setInterval(() => {
      current += increment;
      if (current >= target) {
        clearInterval(interval);
        current = target; // Ensure the final value is exact
      }
      element.textContent = current.toLocaleString(); // Format number with commas
    }, 20); // Adjust speed by changing the interval time
  }

  // Get all counter elements
  const counters = document.querySelectorAll(".counter-number");

  // Loop through each counter and start the animation
  counters.forEach((counter) => {
    const target = parseInt(counter.getAttribute("data-target"), 10);
    animateCounter(counter, target);
  });
});
document.addEventListener("DOMContentLoaded", function () {
  // Function to flip the last digit of a counter
  function flipLastDigit(counter) {
    const currentValue = counter.textContent.replace(/,/g, ""); // Remove commas
    const lastDigit = parseInt(currentValue.slice(-1), 10); // Get the last digit
    const newLastDigit = (lastDigit + 1) % 10; // Increment and wrap around to 0 if needed
    const newValue = currentValue.slice(0, -1) + newLastDigit; // Replace the last digit
    counter.textContent = formatNumberWithCommas(newValue); // Add commas back
  }

  // Function to format a number with commas
  function formatNumberWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  // Get the counters for Messages and Therapists
  const sessionCounter = document.getElementById("session_count");
  const therapistCounter = document.getElementById("therapist_count");

  // Flip the last digit every 2 seconds
  setInterval(() => {
    flipLastDigit(sessionCounter);
    flipLastDigit(therapistCounter);
  }, 2000); // 2000 milliseconds = 2 seconds
});