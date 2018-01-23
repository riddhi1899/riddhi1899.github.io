(function ($) {
    "use strict";
	
	/*==================================
	 Owlcarosel (Testimonial slider) 
	====================================*/

    $(document).ready(function () {

        $('.testimonial-active').owlCarousel({
            loop: true,
			nav: false,
            margin: 10,
            autoplay: true,
            autoplayTimeout: 5000,
            rewind: true,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    nav: true
                },
                600: {
                    items: 1,
                    nav: false
                },
                1000: {
                    items: 1,
                    nav: false,
                    loop: false
                }
            }
        })
    });

	
	/*==================================
	//Preloader    
	====================================*/

    $(window).load(function () {
        $('#loading').fadeOut('slow');
    });

    
	/*==================================
	//mobile-menu
	====================================*/
	 $('#mobile-menu').meanmenu({
	 meanMenuContainer: '.mobile-menu',
	 meanScreenWidth: "767"
	});
	
	
	
	/*==================================
	//Sticky Menu
	====================================*/
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll < 15) {
            $(".header-middle").removeClass("scroll-header");
        } else {
            $(".header-middle").addClass("scroll-header");
        }
    });


	/*==================================
	//Counter UP
	====================================*/
    $('.counter').counterUp({
        delay: .8,
        time: 150
    });

	
	/*==================================
    //WOW JS
	====================================*/
    new WOW().init();


    
    /*==================================
    //Portfolio Grid
	====================================*/
	$('.grid').imagesLoaded( function() {
		var $grid = $('.grid').isotope({
		  itemSelector: '.grid-item',
		  percentPosition: true,
		  masonry: {
			// use outer width of grid-sizer for columnWidth
			columnWidth: '.grid-item'
		  }
	});


	/*==================================
    //Filter items on button group
	====================================*/
	$('.filter-button-group').on( 'click', 'button', function() {
		  var filterValue = $(this).attr('data-filter');
		  $grid.isotope({ filter: filterValue });
		});
	});
	
	
    /*==================================
    //Go down
	====================================*/
	$(".go-down").on('click', function(event) {
		if (this.hash !== "") {
		  event.preventDefault();
		  var hash = this.hash;
		  $('html, body').animate({
			scrollTop: $(hash).offset().top
		  }, 800, function(){
			window.location.hash = hash;
		  });
		}
	});
	
   	/*==================================
    //One page nav
	====================================*/
    var top_offset = $('.scroll-nav').height() - 15
    $('.navigation').onePageNav({
        currentClass: 'active',
        scrollOffset: top_offset,
    });
    
	
	/*==================================
    //Scroll Up
	====================================*/
	$(function () {
	  $.scrollUp({
		scrollName: 'scrollUp', // Element ID
		topDistance: '300', // Distance from top before showing element (px)
		topSpeed: 300, // Speed back to top (ms)
		animation: 'fade', // Fade, slide, none
		animationInSpeed: 200, // Animation in speed (ms)
		animationOutSpeed: 200, // Animation out speed (ms)
		scrollText: '<i class="fa fa-angle-up" aria-hidden="true"></i>', // Text for element
		activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
	  });
	});
    
	/*==================================
    //Veno Box
	====================================*/
    $('.vbox-video,.vbox-portfolio').venobox({
    	numeratio: true,
        infinigall: true
    }); 
	
	
	
	
	
})(jQuery);