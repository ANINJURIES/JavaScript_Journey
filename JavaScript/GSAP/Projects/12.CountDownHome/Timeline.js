const element = document.getElementById('t4');

// Create a GSAP timeline for the rollIn effect
const tl = gsap.timeline();

// Set initial properties (hidden)
tl.set(element, { opacity: 0, x: -100 });

// Add rollIn animation
tl.to(element, { duration: 1, opacity: 1, x: 0, ease: 'power2.out' });

// Play the timeline
tl.play();
