


gsap.to("#Imgsecond",{
    
    scrollTrigger: {
        trigger: '#Imgsecond',
        start: 'top 80%',                           // Start animation when the top of the trigger is 80% in the viewport
        end: 'bottom 10%',                          // End animation when the top of the trigger is 20% in the viewport
        // scrub: true,                             // Smoothly animate in-between scroll positions (value 1->5 on 5 smoothes anime on scroll)
        markers: true,                              // Show markers on the scrollbar for debugging
        repeat:-1
        
      },
    rotate:360,
    duration:2,
    
})