// Create a GSAP timeline with onStart, onUpdate, and repeat options
const tl = gsap.timeline({
    onStart: () => {
      console.log("Timeline started!");
      // Code to run when the timeline starts
    },
    onUpdate: () => {
      console.log("Timeline updated!");
      // Code to run on each update of the timeline
    },
    repeat: 2, // Number of times to repeat the timeline (0 = no repeat)
    yoyo: true // Causes the timeline to reverse on every repeat
  });
  
  // Add animations to the timeline
  tl.from("#element", { duration: 1, opacity: 0, x: -50 });
  tl.to("#element", { duration: 1, y: 50 });
  tl.to("#element", { duration: 1, rotation: 180 });
  tl.to("#element", { duration: 1, scale: 1.5 });
  tl.to("#element", { duration: 1, backgroundColor: "blue" });
  
  // Play the timeline
  tl.play();
  