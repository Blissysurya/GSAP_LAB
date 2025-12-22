
let box = document.querySelector('#box');

let initial_d = "M 10 200 Q 450 200 1400 200";
let final_d = "M 100 200 Q 800 200 1400 200";

box.addEventListener('mousemove', (e) => {
    let x = e.clientX;
    let y = e.clientY;
    
    initial_d = `M 100 200 Q ${x} ${y} 1400 200`;

    gsap.to('svg path', {
        attr:{d:initial_d},
        duration: 0.5,
        ease: "power2.out"
    })
   
});

box.addEventListener('mouseleave', (e) => {
    gsap.to('svg path', {
        attr:{d:final_d},
        duration:1.5,
        ease: "elastic.out(1,0.2)",
    })
});