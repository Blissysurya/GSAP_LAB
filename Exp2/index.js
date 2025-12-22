gsap.registerPlugin(ScrollTrigger);
gsap.defaults({ease:"none", duration:1});

gsap.to("#page2 h1", {
    transform:"translateX(-350%)",
  scrollTrigger: {
    trigger: "#page2",
    scroller:"body",
    start: "top 0%",      // when #page2 hits top of viewport
    end:() => "+=" + document.querySelector("#page2").offsetWidth,         // scroll 100% of viewport height while pinned
    markers: true,
    scrub: 5,
    pin: true
  }
});
