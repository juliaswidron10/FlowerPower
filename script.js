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