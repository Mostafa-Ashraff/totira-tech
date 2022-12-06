
// var bg = document.body.style.backgroundImage;

// gsap.to(document.body.style.backgroundImage,{rotation:360 , duration:2})

gsap.timeline()
  .from(".logo", {opacity:0, scale:0, ease:"back" ,duration:3})

gsap.to('.loading-bg', {
  rotate: 360, 
  duration: 60,
  ease: 'linear',
  repeat:-1
})
  // var loader =document.getElementById("preloader");
   window.addEventListener("load" ,function(){
    document.querySelector('.preloader').style.display = 'none';
    //$(".preloader").fadeToggle();
    $(".hero").removeClass("d-none").addClass("d-block");
    $(".contact").removeClass("d-none").addClass("d-block");
})
/*
  setTimeout(function(){
    document.querySelector('.preloader').style.display = 'none';
    //$(".preloader").fadeToggle();
    $(".hero").removeClass("d-none").addClass("d-block");
    $(".contact").removeClass("d-none").addClass("d-block");
},3500);*/



gsap.from('.hero-icon-lg',{
  opacity: 0,
  scale: 0, 
  stagger: 0.2,
  ease: 'back.out',
  transformOrigin: 'center center'
})

gsap.from('.hero-info > *',{
  opacity: 0,
  scale: 0,
  xPercent: -100, 
  stagger: 0.3,
  ease: 'power1.Out',
  transformOrigin: 'center center'
})