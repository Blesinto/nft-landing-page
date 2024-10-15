// Function to handle the intersection
const handleIntersection = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Add the 'visible' class to trigger animation
      entry.target.classList.add('visible');
    } else {
      // Remove the 'visible' class when out of view to allow reanimation
      entry.target.classList.remove('visible');
    }
  });
};

// Options for the Intersection Observer
const options = {
  root: null, // Use the viewport as the root
  rootMargin: '100px', // No margin
  threshold: 0.1, // Trigger when 10% of the element is visible
};

// Create an Intersection Observer instance
const observer = new IntersectionObserver(handleIntersection, options);

const elementsToObserve = document.querySelectorAll(
  '.trend-box,.trend_card, .top_box, .dis_nft_box, .cat_box, .works_box,.hero_title,.hero_para,.get_btn'
);
elementsToObserve.forEach(element => {
  observer.observe(element); // Start observing each element
});

function toggleMenu() {
  const nav = document.querySelector('.nav_link');
  nav.classList.toggle('show');
}
