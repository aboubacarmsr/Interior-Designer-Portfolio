gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

let sections = gsap.utils.toArray(".screen");

function goToSection(i){
    gsap.to(window, {
        scrollTo: {
            y: i * innerHeight,
            autoKill: false,
            ease: "Power4.easeOut"
        },
        duration: 1
    });
}

sections.forEach((eachPanel, i) => {
    ScrollTrigger.create({
        trigger: eachPanel,
        onEnter: () => goToSection(i)
    });
    ScrollTrigger.create({
        trigger: eachPanel,
        start: "bottom bottom",
        onEnterBack: () => goToSection(i)
    });
});