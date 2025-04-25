; (function ($) {
    "use strict"

    /* Election Protection Modal */
    $(document).ready(function() {
        var electionProtectionModalShown = localStorage.getItem('electionProtectionModalShown');
        if (electionProtectionModalShown != '1') {
            $("#electionProtectionModal").modal('show');
            localStorage.setItem('electionProtectionModalShown', '1');
        }
    });

    var nav_offset_top = $('.header_area').height() + 50;
    /*-------------------------------------------------------------------------------
	  Navbar 
    -------------------------------------------------------------------------------*/

    //* Navbar Fixed  
    function navbarFixed() {
        if ($('.header_area').length) {
            $(window).scroll(function () {
                var scroll = $(window).scrollTop();
                if (scroll >= nav_offset_top) {
                    $(".header_area").addClass("navbar_fixed");
                } else {
                    $(".header_area").removeClass("navbar_fixed");
                }
            });
        };
    };
    navbarFixed();

    $('.navbar-nav > li > .dropdown-toggle').click(function () {
        window.location = $(this).attr('href');
    });

    var maxTries = 10;
    var tries = 0;
    let waitForSomeElement = () => {
        const container = $('input[name="FirstName"]');
        if (!container.length) {
            tries += 1;
            if (tries < (maxTries + 1)) {
                setTimeout(waitForSomeElement, 50); // give everything some time to render
            }
        } else {
            $('#NVSignupForm1284899-ContactInformation-FirstName').contents().filter(function() {
                return this.nodeType === 3; 
            }).remove();
            $('#NVSignupForm1284899-ContactInformation-LastName').contents().filter(function() {
                return this.nodeType === 3; 
            }).remove();
            $('#NVSignupForm1284899-ContactInformation-EmailAddress').contents().filter(function() {
                return this.nodeType === 3; 
            }).remove();
            $('#NVSignupForm1284899-ContactInformation-PostalCode').contents().filter(function() {
                return this.nodeType === 3; 
            }).remove();

            $('input[name="FirstName"]').attr("placeholder", "First Name");
            $('input[name="LastName"]').attr("placeholder", "Last Name");
            $('input[name="PostalCode"]').attr("placeholder", "Postal Code");
            $('input[name="EmailAddress"]').attr("placeholder", "Email");
        }
    };
    waitForSomeElement();



      function active_course() {
    if ($(".active_course").length) {
      $(".active_course").owlCarousel({
        loop: true,
        margin: 20,
        items: 3,
        nav: true,
        autoplay: 2500,
        smartSpeed: 1500,
        dots: false,
        responsiveClass: true,
        thumbs: true,
        thumbsPrerendered: true,
        navText: ["<img src='https://colorlib.com/preview/theme/edustage/img/prev.png'>", "<img src='https://colorlib.com/preview/theme/edustage/img/next.png'>"],
        responsive: {
          0: {
            items: 1,
            margin: 0
          },
          991: {
            items: 2,
            margin: 30
          },
          1200: {
            items: 3,
            margin: 30
          }
        }
      });
    }
  }
  active_course();


        //--------  Carousel --------// 
    if ($('#our-major-cause').length) {
        $('#our-major-cause').owlCarousel({
            loop: true,
            margin: 30,
            items: 3,
            nav: false,
            dots: true,
            responsiveClass: true,
            // autoplay: 2500,
            slideSpeed: 300,
            paginationSpeed: 500,
            responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: 2,
                },
                1224: {
                    items: 3
                }
            }
        })
    }

    if ($('.clients_slider').length) {
        $('.clients_slider').owlCarousel({
            loop: true,
            margin: 30,
            items: 5,
            nav: false,
            dots: false,
            responsiveClass: true,
            autoplay: 2500,
            slideSpeed: 300,
            paginationSpeed: 500,
            responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: 3,
                },
                1024: {
                    items: 4,
                },
                1224: {
                    items: 5
                }
            }
        })
    }

    //------- Mailchimp js --------//  

    function mailChimp() {
        $('#mc_embed_signup').find('form').ajaxChimp();
    }
    mailChimp();


    $('select').niceSelect();

    /*----------------------------------------------------*/


    /*-------------------
        Hero Slider
   
    $('.hero-slider').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
        centerMode: true,
        arrows: false,
        asNavFor: '.hero-text-slider',
        autoplay: true,
        pauseOnHover:false,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    
    var hero_slider = $('.hero-slider');

    hero_slider.on('wheel', (function(e) {
        e.preventDefault();
        if (e.originalEvent.deltaY < 0) {
            $(this).slick('slickPrev');
        } else {
            $(this).slick('slickNext');
        }
    }));

    hero_slider.on('click', '.slick-slide', function (e) {
        e.preventDefault();
        var index = $(this).data("slick-index");
        if ($('.slick-slider').slick('slickCurrentSlide') !== index) {
            $('.slick-slider').slick('slickGoTo', index);
        }
    });

    $('.hero-text-slider').slick({
        dots: false,
        infinite: false,
        speed: 300,
        arrows: false,
        asNavFor: '.hero-slider',
    }); -------------------*/
    
    /*  Google map js
    /*----------------------------------------------------*/
    // Partner Map
    if (document.getElementById('mapBox')) {
        var map = new google.maps.Map(document.getElementById('mapBox'), {
            zoom: 12,
            center: new google.maps.LatLng(23.81, 90.41),
            mapTypeId: google.maps.MapTypeId.ROADMAP
        });

        var marker;
        marker = new google.maps.Marker({
            map: map
        });
    }

})(jQuery)