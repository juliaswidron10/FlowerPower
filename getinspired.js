//HEADER ANIMATIONS

let tl1 = gsap.timeline({
  defaults: {
      duration: 1
  }
});

tl1 .from('.text-inspired', {
      opacity: 0,
      duration: 0.75,
      y: 300,
      ease: 'Power1.easein',
      delay: 0.2
  }, "-=.4")
 .from('.mockup-inspired', {
    opacity: 0,
    duration: 0.75,
    x: 300,
    ease: 'Power1.easein',
    //delay: 0.2
}, "-=.4");


//POSTER ELEMENTS ANIMATIONS
let tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: '.bg-position',
        start: "center bottom"
    }
});

tl2.from(".leaf1", {x: 200, opacity: 0, duration: 0.6})
  .from(".flower1", {y: 300, opacity: 0, duration: 0.6})
  .from(".text1", {x: -200, opacity: 0, duration: 0.6})
  .from(".date1", {y: -300, opacity: 0, duration: 0.6})
  .from(".shapes1", {y: 300, opacity: 0, duration: 0.4})
  .from(".frame1", {x: 200, opacity: 0, duration: 0.8})

  .from(".leaf2", {x: 200, opacity: 0, duration: 0.6})
  .from(".flower2", {y: 300, opacity: 0, duration: 0.6})
  .from(".text2", {x: -200, opacity: 0, duration: 0.6})
  .from(".date2", {y: -300, opacity: 0, duration: 0.6})
  .from(".shapes2", {y: 300, opacity: 0, duration: 0.4})
  .from(".frame2", {x: -200, opacity: 0, duration: 0.8})

  .from(".leaf3", {x: 200, opacity: 0, duration: 0.6})
  .from(".flower3", {y: 300, opacity: 0, duration: 0.6})
  .from(".text3", {x: -200, opacity: 0, duration: 0.6})
  .from(".date3", {y: -300, opacity: 0, duration: 0.6})
  .from(".shapes3", {y: 300, opacity: 0, duration: 0.4})
  .from(".frame3", {x: 200, opacity: 0, duration: 0.8})

  .from(".leaf4", {x: 200, opacity: 0, duration: 0.6})
  .from(".flower4", {y: 300, opacity: 0, duration: 0.6})
  .from(".text4", {x: -200, opacity: 0, duration: 0.6})
  .from(".date4", {y: -300, opacity: 0, duration: 0.6})
  .from(".shapes4", {y: 300, opacity: 0, duration: 0.4})
  .from(".frame4", {x: -200, opacity: 0, duration: 0.8})

  .from(".leaf5", {x: 200, opacity: 0, duration: 0.6})
  .from(".flower5", {y: 300, opacity: 0, duration: 0.6})
  .from(".text5", {x: -200, opacity: 0, duration: 0.6})
  .from(".date5", {y: -300, opacity: 0, duration: 0.6})
  .from(".shapes5", {y: 300, opacity: 0, duration: 0.4})
  .from(".frame5", {x: 200, opacity: 0, duration: 0.8})


//add easing
//maybe foreach to save some code?