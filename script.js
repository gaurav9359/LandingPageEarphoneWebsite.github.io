gsap.from(".hero-section-part1", {
    opacity: 0, 
    x: 300, 
    duration: 3,
    ease: "elastic.out(1, 0.3)"
  });

gsap.from(".hero-section-part2", {
    opacity: 0, 
    x: -300, 
    duration: 3,
    ease: "elastic.out(1, 0.3)"
  });

gsap.from(".namaiva", {
    opacity: 0, 
    x: -300, 
    duration: 3
  });

        AOS.init();
      
    // const value= document.getElementById('product-section')
    // value.addEventListener('mouseover',()=>{
        
        
    // })