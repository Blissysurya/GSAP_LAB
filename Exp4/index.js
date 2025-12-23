
let box = document.querySelector('#box');
let circle = document.querySelector('#circle');
let block = document.querySelector('#block');
let overlay = document.querySelector('#overlay');

box.addEventListener('mousemove', (e)=>{
    let x = e.clientX;
    let y = e.clientY;
    gsap.to(circle,{
        x:x,
        y:y,
        duration:1,
        ease:"power2.out"
    })
})


overlay.addEventListener('mouseenter', (e)=>{
    circle.innerText="View More"
    gsap.to(circle,{
        scale:4,
      
    })
})


overlay.addEventListener('mouseleave', (e)=>{
    circle.innerText=""
    gsap.to(circle,{
        scale:1
    })
})
