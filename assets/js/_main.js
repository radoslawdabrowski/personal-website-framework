(function ($) {
    "use strict";
    jQuery(document).ready(function () {
        $('.toggle-normal').on('click', function () {
            $('.top-bar').toggleClass('top-transform');
            $('.middle-bar').toggleClass('middle-transform');
            $('.bottom-bar').toggleClass('bottom-transform');
        });
        $('.section,div#menu-options a').on('click', function () {
            $('nav#theMenu').removeClass('menu-open');
            $('.top-bar').removeClass('top-transform');
            $('.middle-bar').removeClass('middle-transform');
            $('.bottom-bar').removeClass('bottom-transform');
        });
        $('div#menuToggle').on('click', function () {
            $('div#menuToggle').toggleClass('active');
            $('body').toggleClass('body-push-toright');
            $('nav#theMenu').toggleClass('menu-open');
        });
        $(function () {
            $('div#menu-options,div#about-btn').find('a[href*=#]:not([href=#])').click(function () {
                if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
                    let target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                    if (target.length) {
                        $('html,body').animate({
                            scrollTop: target.offset().top
                        }, 900, "swing");
                        return false;
                    }
                }
            });
        });
        $(window).scroll(function () {
            if ($(this).scrollTop() >= 50) {
                $('div#scrollup').addClass('animated flipInY').fadeIn(200);
            } else {
                $('div#scrollup').fadeOut(200);
            }
        });
        $('div#scrollup').on('click', function () {
            $("html,body").animate({
                scrollTop: 0
            }, 600);

            return false;
        });
        let all = '#a,#b,#c';
        let afterFirst = '#b,#c';
        $(afterFirst).addClass('hide');
        $('a#all-sample').on('click', function () {
            $('#add-more').removeClass('hide');
            $(all).removeClass('tab-pane');
            $(afterFirst).addClass('hide');
        });
        $('a.cate').on('click', function () {
            $('#add-more').addClass('hide');
            $(afterFirst).removeClass('hide');
            $(all).addClass('tab-pane');

        });
        $('#add-more').on('click', function () {
            if ($(all).hasClass('')) {
                $(all).removeClass('tab-pane hide').addClass('x');
                $('#port-add-icon').removeClass('fa-plus').addClass('fa-arrow-up');
            } else {
                $(afterFirst).addClass('hide');
                $(all).removeClass('x');
                $('#port-add-icon').addClass('fa-plus').removeClass('fa-arrow-up');
            }
        });
        $('li.list-shuffle,#add-more').on('click', function () {
            $(".inLeft")
                .removeClass('InLeft')
                .hide()
                .addClass('InLeft')
                .show();
            $(".inRight")
                .removeClass('InRight')
                .hide()
                .addClass('InRight')
                .show();
        });
        $('div.skillbar').each(function () {
            $(this).find('div.skillbar-bar').css({
                width: $(this).attr('data-percent')
            });
        });
        function clint() {
            let $clientcarousel = $('ul#clients-list');
            let clients = $clientcarousel.children().length;
            let clientwidth = (clients * 140);
            $clientcarousel.css('width', clientwidth);

            let rotating = true;
            let clientspeed = 1800;
            setInterval(rotateClients, clientspeed);

            $(document).on({
                mouseenter: function () {
                    rotating = false;
                },
                mouseleave: function () {
                    rotating = true;
                }
            }, '#clients');

            function rotateClients() {
                if (rotating !== false) {
                    let $first = $('ul#clients-list').find('li:first');
                    $first.animate({'margin-left': '-140px'}, 2000, function () {
                        $first.remove().css({'margin-left': '0px'});
                        $('ul#clients-list').find('li:last').after($first);
                    });
                }
            }
        }
        clint();
        $(".carousel-inner").swipe({
            swipeLeft: function () {
                $(this).parent().carousel('next');
            },
            swipeRight: function () {
                $(this).parent().carousel('prev');
            },
            threshold: 0
        });
    });
    jQuery(window).load(function () {
        $('div#loading').fadeOut(500);
        window.sr = ScrollReveal({reset: false});
        let commonCards = '#port-add-icon,#map-card,.interest-icon-even,.interest-icon,' +
            '.timeline-dot, .timeline-content,#add-more,#skills-card,#testimonials-card,' +
            '#portfolios-card,#interest-card,#p-one,#p-two,#p-three,#blog-card,#contact-card,#clients';
        // Customizing a reveal set
        sr.reveal(commonCards, {duration: 1100});
        sr.reveal('#about-card,.map-label', {duration: 1400, delay: 500});
        sr.reveal('#v-card-holder', {duration: 1400, distance: '150px'});c
        sr.reveal('.skillbar-bar', {duration: 1800, delay: 300, distance: '0'});
    });
})(jQuery);