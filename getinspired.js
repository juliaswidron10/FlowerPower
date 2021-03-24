let tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.bg-position',
        start: "center bottom"
    }
});

tl.from(".leaf1", {x: 200, opacity: 0, duration: 0.6})
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