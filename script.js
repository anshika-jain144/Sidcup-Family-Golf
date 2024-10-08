var crsr = document.querySelector("#cursor")
var blur = document.querySelector("#cursor-blur")


document.addEventListener("mousemove", function(dets){
    // crsr.style.left = dets.x-34+"px"
    // crsr.style.top = dets.y-34+"px"
    crsr.style.left = dets.x+"px"
    crsr.style.top = dets.y+"px"
    blur.style.left = dets.x-240 +"px"
    blur.style.top = dets.y-240+"px"
})

// document.addEventListener('mousemove', function(dets) {
//     var cursor = document.getElementById('cursor');
//     cursor.style.top = dets.y + 'px';
//     cursor.style.left = dets.x + 'px';
//  });
 
// var crsr = document.querySelector("#cursor")
// document.addEventListener("mousemove", function (dets) {
//     gsap.to(crsr, {
//         x: dets.x,
//         y: dets.y
//     })
// })

var h4all = document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale = 2
        crsr.style.border = "1px solid #fff"
        crsr.style.backgroundColor = "transparent"
    })
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale = 1
        crsr.style.border = "#96c11e7e"
        crsr.style.backgroundColor = " #96c11e7e"
    })
})



gsap.to("#nav",{
    backgroundColor:"#000",
    duration:"1",
    heigth: "100px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        start:"top -5%",
        end:"top -15%",
        scrub:1
    }
})

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true,
        start:"top -25%",
        end:"top -72%",
        scrub:2

    }
})

gsap.from("#about-us img, #about-us-in",{
    y:50,
    opacity:0,
    duration:1,
    // stagger:0.2,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        start:"top 70%",
        end:"top 65%",
        scub:3
    }
})
// gsap.from(".card",{
//     scale:0.8,
//     opacity:0,
//     duration:1,
//     scrollTrigger:{
//         trigger:".card",
//         scroller:"body",
//         start:"top 70%",
//         end:"top 65%",
//         scub:3
//     }
// })

gsap.from("#colon1",{
    y:-80,
    x:-50,
    duration:2,

    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 55%",
        end:"top 45%",
        // scrub:"4"
    }
})
gsap.from("#colon2",{
    y:80,
    x:50,
    duration:2,

    scrollTrigger:{
        trigger:"#colon2",
        scroller:"body",
        start:"top 55%",
        end:"top 45%",
        // scrub:"4"
    }
})

gsap.from("#page4 h1",{
    y:50,
    duration:2,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        start:"top 75%",
        end:"top 80%",
        // scrub:"3"
    }
})