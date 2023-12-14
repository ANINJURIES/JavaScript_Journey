
var t1 = gsap.timeline();    // we have created timeline by so, once things will occur in sequntial manner once one done then to next as timeline

t1
    .from("#t4  ", {
        opacity: 0,
        color: "red",
        duration: 1
    })

    .from("#t3", {
        opacity: 0,
        color: "red",
        duration: 1
    })

    .from("#t2", {
        opacity: 0,
        color: "red",
        duration: 1
    })

    .from("#t1", {
        opacity: 0,
        color: "red",
        duration: 1
    })

/*

What if you wanted to make the first animation longer? You'd need to adjust every delay thereafter. And what if you want to pause() the whole sequence or restart() it or reverse() it on-the-fly or repeat it twice? This could become quite messy, but GSAP's Timelines make it incredibly simple:

Link for documentaion: https://greensock.com/docs/v3/GSAP/Timeline
*/