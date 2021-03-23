let tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.bg-position',
        start: "center bottom"
    }
});

//tl.from(".leaf-position", {x: 200, opacity: 0, duration: 2})
//  .from(".flower-position", {y: 300, opacity: 0, duration:1.5}, "-=1")

tl.from(".leaf1", {x: 200, opacity: 0, duration: 1.2})
  .from(".flower1", {y: 300, opacity: 0, duration: 1})
  .from(".text1", {x: -200, opacity: 0, duration: 0.8})
  .from(".date1", {y: -300, opacity: 0, duration: 0.8})
  .from(".shapes1", {y: 300, opacity: 0, duration: 0.6})

  .from(".leaf2", {x: 200, opacity: 0, duration: 1.2})
  .from(".flower2", {y: 300, opacity: 0, duration: 1})
  .from(".text2", {x: -200, opacity: 0, duration: 0.8})
  .from(".date2", {y: -300, opacity: 0, duration: 0.8})
  .from(".shapes2", {y: 300, opacity: 0, duration: 0.6})

  .from(".leaf3", {x: 200, opacity: 0, duration: 1.2})
  .from(".flower3", {y: 300, opacity: 0, duration: 1})
  .from(".text3", {x: -200, opacity: 0, duration: 0.8})
  .from(".date3", {y: -300, opacity: 0, duration: 0.8})
  .from(".shapes3", {y: 300, opacity: 0, duration: 0.6})

  .from(".leaf4", {x: 200, opacity: 0, duration: 1.2})
  .from(".flower4", {y: 300, opacity: 0, duration: 1})
  .from(".text4", {x: -200, opacity: 0, duration: 0.8})
  .from(".date4", {y: -300, opacity: 0, duration: 0.8})
  .from(".shapes4", {y: 300, opacity: 0, duration: 0.6})

  .from(".leaf5", {x: 200, opacity: 0, duration: 1.2})
  .from(".flower5", {y: 300, opacity: 0, duration: 1})
  .from(".text5", {x: -200, opacity: 0, duration: 0.8})
  .from(".date5", {y: -300, opacity: 0, duration: 0.8})
  .from(".shapes5", {y: 300, opacity: 0, duration: 0.6})


//add easing
//maybe foreach to save some code?