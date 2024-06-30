
// $(`.inputCnt`).click(function(){
//     $(this).addClass("active");
//     $(`input`).toggleClass("active")
// })



$(function(){
  
  $('.counter').counterUp({
      delay: 10,
       time: 1500,
       offset:70,
       beginAt:100,
    });



    //* SLICK SLIDER *//
    $('.bannerSlider').slick({
        arrows :false,
        dots : true,
        dotsClass :`bannerDots container`,
        autoplay: true,
        autoplaySpeed: 2500,
    });

    $(".bannerSliderSm").slick({
      arrows: false,
      autoplay: true,
      autoplaySpeed: 2000,
  });

    //* BOOTSTRAP TOOLIP *//

    const tooltipTriggerList = document.querySelectorAll
    ('[data-bs-toggle="tooltip"]')
   const tooltipList = [...tooltipTriggerList].map(
    tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl)
);


//* NEW PRODUCT SLIDER *//
$('.ProductsSlider').slick({
  slidesToShow: 4,
  slidesToScroll: 2,
  autoplay: true,
  autoplaySpeed: 2000,
  prevArrow: "#productLeftArrow",
  nextArrow: "#productRightArrow",

    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
       
      },
    },

    {
        breakpoint:660,
        settings:{
          slidesToShow: 2,
          slidesToScroll: 2,
         
        },
      },

      {
        breakpoint:480,
        settings:{
          slidesToShow: 1,
          slidesToScroll:1,
         
        },
      }
     
   
  ]
  
});


//* Deals Of The Days
$('.Timer').countdown('2026/09/01', function(event) {
  // event.strftime('%w weeks %d days %H:%M:%S')
  $(`.days`).html(event.strftime(' %d '));

  $(`.Hour`).html(event.strftime(' %H '));

  $(`.Minute`).html(event.strftime(' %M '));

  $(`.Sec`).html(event.strftime(' %S '));

  
});

// $('.FairnessCream').slick({
//   slidesToShow: 4,
//   autoplay: true,
//   autoplaySpeed: 2000,
//   prevArrow: "#productLeftArrow",
//   nextArrow: "#productRightArrow",

// });



$('.creamSlider').slick({
  slidesToShow: 2,
  arrows :false,
  autoplay: true,
  dots : true,
  dotsClass :`creamDots `,
  autoplaySpeed: 2000,


  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
       
      },
    },

      
    ]


});
  /*Latest News */
  $('.LatestNewssLides').slick({
    slidesToShow: 4,
    arrows :false,
    autoplay: true,
    dots : true,
    dotsClass :`creamDots `,
    autoplaySpeed: 2000,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
         
        },
      },

      {
          breakpoint: 750,
          settings: {
            slidesToShow: 2,
           
          },
        },

        {
          breakpoint: 400,
          settings: {
            slidesToShow: 1,
           
          },
        },
      
    ]

});

let box = document.querySelector('.box');
let searchIconOne = document.querySelector('.searchIcon');

    searchIconOne.addEventListener('click', ()=>{
        box.classList.add("open");
    })

let searchIconTwo = document.querySelector('.searchIcon2');
    searchIconTwo.addEventListener('click', ()=>{
        box.classList.remove("open")
    })

    
    let mobileBox = document.querySelector('.smallbox');
    let searchIconSm = document.querySelector('.searchIconSm');
        searchIconSm.addEventListener('click', ()=>{
            mobileBox.classList.add("smOpen");
        })
    
    let searchIconMobile = document.querySelector('.searchIconMobile');
        searchIconMobile.addEventListener('click', ()=>{
            mobileBox.classList.remove("smOpen");
        })

        // LeadershipSlide START
        $('.LeadershipSlider').slick({
          slidesToShow: 4,
          slidesToScroll: 2,
          autoplay: true,
          autoplaySpeed: 2000,
          prevArrow: "#LeadershipLeftArrow",
          nextArrow: "#LeadershipRightArrow",
        
            responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
               
              },
            },
        
            {
                breakpoint:660,
                settings:{
                  slidesToShow: 2,
                  slidesToScroll: 2,
                 
                },
              },
        
              {
                breakpoint:480,
                settings:{
                  slidesToShow: 1,
                  slidesToScroll:1,
                 
                },
              }
          
          ]

        });    
          
    // LeadershipSlide END

    // Aetor Instagram Start
    $('.AetorSlider').slick({
      slidesToShow: 6,
      slidesToScroll: 2,
      arrows :false,
      autoplay: true,
      dots : true,
      dotsClass :`creamDots `,
      autoplaySpeed: 2000,
  
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
           
          },
        },
  
        {
            breakpoint: 750,
            settings: {
              slidesToShow: 2,
             
            },
          },
  
          {
            breakpoint: 400,
            settings: {
              slidesToShow: 1,
             
            },
          },
        
      ]
  
  });
    // Aetor Instagram End

    $('.AlexzenderSlider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows :false,
      autoplay: true,
      dotsClass :`creamDots `,
      autoplaySpeed: 2000,
      dots: true,
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: 'linear'
  
  });

  $('.ProductGallerySlider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: "#LeadershipLeftArrow",
    nextArrow: "#LeadershipRightArrow",
    asNavFor: '.ProductGalleryThumbnailSlider'

  });

  $('.ProductGalleryThumbnailSlider').slick({
    slidesToShow: 5,
    centerMode: true,
    centerPadding: '0px',
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: "#LeadershipLeftArrow",
    nextArrow: "#LeadershipRightArrow",
    asNavFor: '.ProductGallerySlider'
   


  });

  //* Reletedc Products START *//
$('.ReletedSlider').slick({
  slidesToShow: 4,
  slidesToScroll: 2,
  autoplay: true,
  autoplaySpeed: 2000,
  prevArrow: "#productLeftArrow",
  nextArrow: "#productRightArrow",

    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
       
      },
    },

    {
        breakpoint:660,
        settings:{
          slidesToShow: 2,
          slidesToScroll: 2,
         
        },
      },

      {
        breakpoint:480,
        settings:{
          slidesToShow: 1,
          slidesToScroll:1,
         
        },
      }
     
   
  ]
  
});

$('.BlogSlider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  prevArrow: "#productLeftArrow",
  nextArrow: "#productRightArrow",

  //   responsive: [
  //   {
  //     breakpoint: 1024,
  //     settings: {
  //       slidesToShow: 1,
  //       slidesToScroll: 1,
       
  //     },

  //   }, 

  //  ]   

  });



  });

  
  /**Counter Start*/
let dec = document .querySelector(".dec")
let result = document .querySelector(".result")
let inc = document .querySelector(".inc")

inc.addEventListener(`click`,function(){
   
    if (result .value <=4){
        result .value = Number(result .value) +1;
    }
})

dec.addEventListener(`click`,function(){
    if (result .value >=1){
        result .value = Number(result .value) -1;z
    }
 })

 /**Counter End*/


 /**aror icon Start*/

let toTop = document .querySelector(".to-top")

window .addEventListener("scroll", function(){
    if(window.scrollY > 100){
      toTop.classList.add("active");
    }else{
      toTop.classList.remove("active");
    }
})

 /**aror icon End*/

 

/**aror icon End*/
// var lastscrollTop =0;
// navbar = document.getElementById("navbar");
// window.addEventListener("scroll", function(){
//   var scrollTop = this.window.pageYOffset  || document
//    .documentElement.scrollTop;
//    if(scrollTop > lastscrollTop){
//     navbar.style.top ="80px";
//    } else{
//     navbar.style.top ="0px";
//    }
//    lastscrollTop = scrollTop;

// });

// window.addEventListener("load", function(){
//   this.setTimeout{
//     function open(event){
//       document .querySelector(".popup").style.display = "block";
//     },
//     1000
//   }

// });

// document.querySelector(".close").addEventListener
// ("click", function (){
//   document.querySelector(".popup").style.display =
//   "none";
// })

// document.querySelector(".close").addEventListener("click", function (){
//   document.querySelector(".popup").style.display = ""
// });





 


