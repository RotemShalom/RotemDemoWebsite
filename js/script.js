/*===================================
            preloader
===================================*/
$(window).on('load' , function(){ //makes sure that whole site is loaded
    
   $('#status').fadeOut(); 
   $('#preloader').delay(350).fadeOut('slow'); 
    
});


/*===================================
                Team
===================================*/
$(function(){
    
    $('#team-members').owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause:true,
        nav: true,
        dots: false,
        navText:['<i class="fa fa-angle-left"></i>' , '<i class="fa fa-angle-right"></i>'],
        responsive:{
            0:{
                items:1    
            },
            480:{
                items:2
            }
        }
    });
});

/*===================================
   Progress bar & waypoints plugin
===================================*/
$(function(){
    
    $("#progress-elements").waypoint(function(){
        
        $(".progress-bar").each(function(){
      
      $(this).animate({
          width:$(this).attr("aria-valuenow") + "%"}, 2000);
       });
        
        this.destroy();
        
    },{offset: 'bottom-in-view'});
   
  /*$(".progress-bar").each(function(){
      
      $(this).animate({
          width:$(this).attr("aria-valuenow") + "%"}, 1000);
  }); */
    
    
    
});

/*===================================
        Responsive Tabs
===================================*/
$(function(){
   
    $('#services-tabs').responsiveTabs({
       animation:'slide' 
    });
    
});

/*===================================
        Testimonials Tabs
===================================*/

$(function(){
    
    $('#testimonial-slider').owlCarousel({
        items: 1,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause:true,
        nav: true,
        dots: false,
        navText:['<i class="fa fa-angle-left"></i>' , '<i class="fa fa-angle-right"></i>']
    });
});

/*===================================
            portfolio
===================================*/
$(window).on('load' , function(){ 
    
   $("#isotope-container").isotope({
       
   });
    
    //filter otems on button click
    $("#isotope-filters").on('click', 'button', function(){
        
        var filterValue = $(this).attr('data-filter');
        
        $("#isotope-container").isotope({
            filter: filterValue
        });
       
        // active button
         $("#isotope-filters").find('.active').removeClass('active');
        $(this).addClass('active');
        
    });
    
});

/*===================================
     portfolio- magnific popUp
===================================*/
$(function(){
   
    $('#portfolio-wrapper').magnificPopup({
        
        delegate:'a', // child items selector, by clicking on it, popUp will open
        type:'image',
        gallery:{
            enabled:true
        }
    });
    
});


/*===================================
                Stats
===================================*/
$(function(){
   
    $('.counter').counterUp({
        delay:10,
        time:2000
    });
    
});

/*===================================
                Clients
===================================*/
$(function(){
    
    $('#clients-list').owlCarousel({
        items: 6,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause:true,
        nav: true,
        dots: false,
        navText:['<i class="fa fa-angle-left"></i>' , '<i class="fa fa-angle-right"></i>'],
        responsive:{
            0:{
                items:2    
            },
            480:{
                items:3
            },
            768:{
                items:6
            }
        }
    });
});



/*===================================
            Google Map
===================================*/
//$(window).on('load',function(){ 
//    
//    var addressString = 'Aryeh Leib Yafe Street Herzeliya Israel';
//    var myLatlng = {lat:40.712685, lng: -74.005920};
//    
//    //1. render map
//    var map = new google.maps.Map(document.getElementById('map'), {
//        zoom:11,
//        center: myLatlng
//    });
//});

/*===================================
           Navigation Bar
===================================*/
$(function(){
    
    // on page load
    showHideNav();
    
    // on page scroll
    $(window).scroll(function(){
       
       showHideNav();
        
    });
    
    function showHideNav()
    {
       if($(window).scrollTop() > 50)
       {
          $('nav').addClass('white-nav-top');
          $('.navbar-brand img').attr('src', 'img/logo/logo-dark.png');
           
           $('#back-to-top').fadeIn();
       }
       else{
          $('nav').removeClass('white-nav-top');
          $('.navbar-brand img').attr('src', 'img/logo/logo.png');
            $('#back-to-top').fadeOut();
       }
    }
});

// Smooth Scrolling
$(function(){
    $('a.smooth-scroll').click(function(event){
        event.preventDefault();
        
        // get section id
        var section_id = $(this).attr('href');
        
        $('html, body').animate({
            scrollTop: $(section_id).offset().top -64
        }, 1250, 'easeInOutExpo');
    });
});


/*===================================
           Mobile Menu
===================================*/
$(function(){
    
    // Show mobile navigation
    $('#mobile-nav-open-btn').click(function(){
        $('#mobile-nav').css("height", "100%");
    });
    
    // Hide mobile navigation
    $('#mobile-nav-close-btn, #mobile-nav a').click(function(){
        $('#mobile-nav').css("height", "0%");
    });
    
});

/*===================================
           Animation
===================================*/

// animation on scroll
$(function(){
    
    new WOW().init();
    
});

$(window).on('load',function(){
   $('#home-heading-1').addClass('animated fadeInDown');
   $('#home-heading-2').addClass('animated fadeInLeft');
   $('#home-text').addClass('animated zoomIn');
   $('#home-btn').addClass('animated zoomIn');
   $('#arrow-down i').addClass('animated fadeInDown infinite');
});











