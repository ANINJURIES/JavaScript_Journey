
gsap.from(                                // gsap.from mens come to default inital position from this given properties  
    ".box",
    {
        x: 500,
        y: 200,
        repeat: 2,                       // repeat means once it is done how much time more you want i.e repeat 2 means 2+1 = 3 time repeatation.
        duration: 1,                     // seconds  
        yoyo: true                       //  means yoyo motion.
    }
)


gsap.to(                                // gsap.to means form initial postion (before script applied) go "to" props which is specified here
    ".box2",
    {
        x: 900,
        repeat: -1,                     // means infinte time repeat. 
        duration: 1,
        delay: 1,                       // delay says after this much time do manipulation with css props using javascript 
        yoyo: true,
        backgroundColor: "red"          // changes background color 
    }
)

gsap.to([".a",".b"],{                  // you can make array like so to select multiple object 
    x:100,
    repeat:-1,
    duration:1,
    yoyo:true
})