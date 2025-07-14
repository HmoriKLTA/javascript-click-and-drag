// Select the scrollable container
const slider = document.querySelector('.items');
// Variables to track dragging state
let isDown = false;
let startX;
let scrollLeft;

// When mouse button is pressed down on the slider
slider.addEventListener('mousedown', (e) => {
    isDown = true; // Start dragging
    slider.classList.add('active'); // Add active class for styling
    startX = e.pageX - slider.offsetLeft; // Store initial mouse X position
    scrollLeft = slider.scrollLeft; // Store initial scroll position
});

// When mouse leaves the slider area
slider.addEventListener('mouseleave', () => {
    isDown = false; // Stop dragging
    slider.classList.remove('active'); // Remove active class
});

// When mouse button is released
slider.addEventListener('mouseup', () => {
    isDown = false; // Stop dragging
    slider.classList.remove('active'); // Remove active class
});

// When mouse is moved over the slider
slider.addEventListener('mousemove', (e) => {
    if(!isDown) return; // Only run if mouse is down (dragging)
    e.preventDefault(); // Prevent unwanted selections
    const x = e.pageX - slider.offsetLeft; // Current mouse X position
    const walk = (x - startX) * 3; // Calculate distance moved (scroll speed factor)
    slider.scrollLeft = scrollLeft - walk; // Update scroll position
});
