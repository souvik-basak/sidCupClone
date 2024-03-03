var cursor = document.querySelector("#cursor")
var cursorBlur = document.querySelector("#cursorBlur")
document.addEventListener("mousemove",function(dets){
    cursor.style.left=dets.x +"px"
    cursor.style.top=dets.y+"px"
    cursorBlur.style.left=dets.x-200+"px"
    cursorBlur.style.top=dets.y-200+"px"
})



gsap.to("#nav",{
    backgroundColor:"#000",
    duration:0.5,
    height:"110px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1,
    }
})

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true,
        start:"top -25%",
        end:"top -70%",
        scrub:2,
    }
})
VanillaTilt.init(document.querySelectorAll(".card"), {
    reverse:                false,  
    max:                    35,    
    startX:                 0,      
    startY:                 0,      
    perspective:            1000,   
    scale:                  1,    
    speed:                  300,    
    transition:             true,   
    axis:                   null,   
    reset:                  true,   
    "reset-to-start":       true,   
    easing:                 "cubic-bezier(.03,.98,.52,.99)",
    glare:                  false,  
    "max-glare":            1,      
    "glare-prerender":      false,   
    "mouse-event-element":  null,   
    gyroscope:              true, 
    gyroscopeMinAngleX:     -45,   
    gyroscopeMaxAngleX:     45,    
    gyroscopeMinAngleY:     -45,   
    gyroscopeMaxAngleY:     45, 
});
var h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    cursor.style.scale = 3;
    cursor.style.border = "1px solid #fff";
    cursor.style.backgroundColor = "transparent";
  });
  elem.addEventListener("mouseleave", function () {
    cursor.style.scale = 1;
    cursor.style.border = "0px solid #95C11E";
    cursor.style.backgroundColor = "#95C11E";
  });
});
gsap.from("#aboutUs img, #aboutUsIn",{
    y:50,
    opacity:0,
    duration:1,
    // stagger:0.4,
    scrollTrigger:{
        trigger:"#aboutUs",
        scroller:"body",
        start:"top 70%",
        end:"top 65%",
        scrub:1
    }
})
gsap.from(".card",{
    scale:0.8,
    // opacity:0,
    duration:1,
    stagger:0.1,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        markers:false,
        start:"top 70%",
        end:"top 65%",
        scrub:1
    }
})
gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 55%",
        end:"top 45%",
        scrub:4
    }
})
gsap.from("#colon2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 55%",
        end:"top 45%",
        scrub:4
    }
})
gsap.from("#page4 h1",{
    y:50,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        start:"top 75%",
        end:"top 70%",
        scrub:3
    }
})