let sideNav = document.querySelector('.side-nav');
let  toggler = document.querySelector('.toggler');
let closeBtn = document.querySelector('.close-btn');

toggler.addEventListener('click', ()=>{
    sideNav.style.left = '0';
})


closeBtn.addEventListener('click', ()=> sideNav.style.left = '-100%');

// Testimonials opent details  
$(document).ready(function(){
    $(".reviews").on("click" , function(){
        $(this).find(".comment").toggleClass("active"); 
    });
});
    // Place any jQuery/helper plugins in here.
    $('.owl-carousel').owlCarousel({
      loop:true,
      margin:20,
      nav:false,
      dots : false,
      responsive:{
        0:{
          items:2
        },
        600:{
          items:3
        },
        1000:{
          items:4
        }
      }
    });

  $('.slider-cline').owlCarousel({
    loop:true,
    margin:20,
    nav:false,
    dots : false,
    responsive:{
      0:{
        items:1
      },
      600:{
        items:1
      },
      1000:{
        items:1
      }
    }
  }) 