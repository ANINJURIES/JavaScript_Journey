
gsap.to(
    ".box",{
        x:800,
        duration:1,
        repeat:-1,  
        yoyo:true,
        stagger:0.5             // even if you have single class you can set boxes to come one after one here these is 2second after another box moves
    }
)

gsap.to(            
    "#he1",{                            // you can target id by this 
        backgroundColor: "red",
        duration:2,
        repeat:-1,
        yoyo:true


    }
)