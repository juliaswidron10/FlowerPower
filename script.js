var timeLine = gsap.timeline({
    defaults: {
        duration: 1
    }
});

timeLine.from('#top > img.topflower', {
        opacity: 0,
        duration: 1.5,
        transform: "rotate(34deg)",
        y: -50,
        x: -100,
        ease: 'Power1.easein'
    })
    .from('#top > img.topleaf', {
        opacity: 0,
        duration: 1.5,
        transform: "rotate(-34deg)",
        y: -50,
        x: 50,
        ease: 'Power1.easein'
    }, "-=1.5")
    .from('.texttop', {
        opacity: 0,
        duration: 0.75,
        y: 30,
        ease: 'Power1.easein',
        delay: 0.2
    }, "-=.4");


var timeLineMax2 = new TimelineMax({
    onUpdate: updatePercentage2
});
const controller2 = new ScrollMagic.Controller();

timeLineMax2.from('.icon', 0.9, {
        opacity: 0,
        y: -50,
        ease: 'Power1.easein'
    }, "-=.4")
    .from('.iconsconf > h1', 0.9, {
        opacity: 0,
        y: -50,
        ease: 'Power1.easein'
    }, "-=.4")
    .from('body', 2.8,{
        backgroundColor:"#FFCCCE",
    }, "-=3.3")
    .from('.arrow', 0.5, {
        opacity: 0,
        y: 40,
        ease: 'Power1.easein',
        delay: 0,
    }, "-=.8");


const scene2 = new ScrollMagic.Scene({
        triggerElement: ".headerlower",
        // triggerHook: "onLeave",
        // duration: "50%"
    })
    // .setPin("#conversation")
    .setTween(timeLineMax2)
    .addTo(controller2);


function updatePercentage2() {
    timeLineMax2.progress();
    // console.log(timeLineMax2.progress());
}


// //creating timeline for why us section
// var timeLineMax3 = new TimelineMax({
//     onUpdate: updatePercentage3
// });
// const controller3 = new ScrollMagic.Controller();

// timeLineMax3.from('.whyusreason', 0.5, {
//     opacity: 0,
//     y: -50,
//     ease: 'Power1.easein'
// }, )

// const scene3 = new ScrollMagic.Scene({
//         triggerElement: "#whyus",
//     })
//     .setTween(timeLineMax3)
//     .addTo(controller3);


// function updatePercentage3() {
//     timeLineMax3.progress();
//     console.log(timeLineMax3.progress());
// }


// // creating timeline for animation to the form section 
// var timeLineMax4 = new TimelineMax({
//     onUpdate: updatePercentage4
// });
// const controller4 = new ScrollMagic.Controller();

// timeLineMax4.from('#contact', 0.5, {
//         opacity: 0,
//         y: -50,
//         ease: 'Power1.easein'
//     }, )
//     .from('#contact_form', 0.5, {
//         opacity: 0,
//         y: -50,
//         ease: 'Power1.easein'
//     }, )
//     .from('#instagram', 0.5, {
//         opacity: 0,
//         x: -50,
//         ease: 'Power1.easein'
//     }, );

// const scene4 = new ScrollMagic.Scene({
//         triggerElement: "#decoration",
//     })
//     .setTween(timeLineMax4)
//     .addTo(controller4);


// function updatePercentage4() {
//     timeLineMax4.progress();
//     console.log(timeLineMax3.progress());
// }