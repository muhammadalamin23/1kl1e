
;(function($){
	$(function(){

        // Phone nav click function 
        
        
        /*$(window).scroll(function(){
            lastScrollTopPos = $(window).scrollTop();
            console.log(lastScrollTopPos)
        })*/
        
        //var initialScrollPos = 0;
        
        $('#menu-icon-inner').click(function(){
            //$(window).scrollTop(initialScrollPos);
            $("body").toggleClass("navExpanded")
            
        })
        
        var initialScrollPos;
        
        $('#sticky-menu-icon-inner').click(function(){
            if(!$('body').hasClass('stickynavExpanded')){
                initialScrollPos = $(window).scrollTop()
                storinginitialScrollPos = initialScrollPos
                $('body').addClass('stickynavExpanded')
            }
            
            else{
                $('body').removeClass('stickynavExpanded')
                 $(window).scrollTop(storinginitialScrollPos);
            }
            
           
            
        });
        
        
        
        
        
        
        
        
        
     if($(window).width() > 767){
            if($('#media-slider').length){
                $('#media-slider').slick({
                    dots: true,
                    arrows:false,
                    autoplay:false,
                    autoplaySpeed:1000,
                    infinite: true,
                    navigation:false,
                    speed: 3000,
                    slidesToShow:1,
                    slidesToScroll: 1
                })
            }
     }
        
        
        
        
        
        if($("#portfolio-slider-wrap").length){          
            var storySlider = $("#portfolio-slider-wrap");
          
            storySlider.slick({
                dots: true,
                autoplay: true,
                autoplaySpeed: 2000,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 1000,
                arrows: false,
                fade: true,
                waitForAnimate: true,
                asNavFor: '#portfolio-figure-slide',
                infinite: false
            });


            var storyFigure =  $("#portfolio-figure-slide");

            var totalSlide = storyFigure.find(".portfolio-figure-item").length;
            var lastItemIndex = totalSlide -1;

            storyFigure.on("init", function (event, slick, currentSlide, nextSlide){
                var lastSlideActiveFigure = $("#portfolio-figure-slide .slick-slide").eq(lastItemIndex).hasClass("slick-current");
                var firstSlideActiveFigure = $("#portfolio-figure-slide .slick-slide").eq(0).hasClass("slick-current");
               
            });

            storyFigure.slick({
                dots: false,
                autoPlay: true,
                autoplaySpeed: 2000,
                vertical: false,
                asNavFor: '#portfolio-slider-wrap',
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 1000,
                arrows: false,
                infinite: false
            })

        }
       
         //Media
        
            // Header function on ready state
//            var scroll = $(window).scrollTop()
//            var objectSelect = $(".content-wrap");
//
//            var secPosition = objectSelect.offset().top - 83;
//        
//            if (scroll > secPosition) {
//                $("body").addClass("change-Nav");
//            } else {
//                $("body").removeClass("change-Nav");
//            }
        
//             Header interaction on scroll
//        if ($(window).width() < 767) {
//            $(window).on("scroll", function() {
//                var scroll = $(window).scrollTop();
//                var objectSelect = $(".content-wrap");
//                var secPosition = objectSelect.offset().top - 83;
//                if (scroll > secPosition) {
//                    $("body").addClass("change-Nav");
//                } else {
//                    $("body").removeClass("change-Nav");
//                }
//            });
//        }
        
        
        
         var $animation_elements = $('.animate');
        var $window = $(window);

        function check_if_in_view() {
            var window_height = $window.height();
            var window_top_position = $window.scrollTop();
            var window_bottom_position = (window_top_position + window_height);

            $.each($animation_elements, function () {
                var $element = $(this);
                var element_height = $element.outerHeight();
                var element_top_position = $element.offset().top;
                var element_bottom_position = (element_top_position + element_height);

                //check to see if this current container is within viewport
                if (element_top_position <= window_bottom_position) {
                    $element.addClass('in-view');
                } else {
                    $element.removeClass('in-view');
                }
            });
        }

        $window.on('scroll resize', check_if_in_view);
//        $window.trigger('scroll');
        
            $(window).on("scroll", function(){
                    var elemntPosition = $(window).outerHeight() + 1
                    var windowScrollAmount = $(window).scrollTop()

                    if ( windowScrollAmount >= elemntPosition) {
                        $('#sticky-header').addClass('sticky');
                    }

                    else {
                        $('#sticky-header').removeClass('sticky');
                    }

                });
        
        if ($(".courses-detail").length) {
            $('body').addClass('pos-sticky')
        };
        
        
        if ($(".portfolio-content").length) {
            $('body').addClass('portfolio-content-page')
        };
        if ($(".portfolio-single-content").length) {
            $('body').addClass('portfolio-single-page')
        };
        
        
	})// End ready function.
   
    $(window).on('load', function () {
        $("body").addClass("loaded");
    })
    
   
    
    
})(jQuery)

