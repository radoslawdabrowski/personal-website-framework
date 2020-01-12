$(document).ready(function () {
    "use strict";

    function getCookie(name) {
        let cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            let cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                let cookie = jQuery.trim(cookies[i]);
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }

    $('.sidenav').sidenav();
    $(".determinate").each(function () {
        let width = $(this).text();
        $(this).css("width", width)
            .empty()
            .append('<i class="fa fa-circle"></i>');
    });

    jQuery(window).on("load", function () {
        let $ = jQuery;
        $(".blog").masonry({
            itemSelector: ".blog-post",
            columnWidth: ".blog-post",
            percentPosition: true
        });
    });

    let height = $(".caption").height();
    if ($(window).width()) {
        $("#featured").css("height", height);
        $("#featured img").css("height", height);
    }

    $(".tooltipped").tooltip({delay: 50});

    const wow = new WOW({mobile: false});
    wow.init();

    function post(url, data = {}, success = () => {}, error = () => {}) {
        $.ajax({
            type: 'POST',
            url: url,
            data: data,
            dataType: 'json',
            headers: {
                "X-CSRFToken": getCookie("csrftoken")
            },
            success: success,
            error: error
        });
    }

    function handleError(item, errors) {
        $(item)
            .removeClass()
            .addClass("shake animated")
            .one(
                "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
                function () {
                    $(this).removeClass();
                }
            );
        if (errors !== undefined && errors !== null) {
            errors.responseJSON.forEach(error => {
                submitMessage(false, error[0])
            })
        }
    }

    function handleSuccess(item, message) {
        $(item)[0].reset();
        submitMessage(true, message)
    }

    function submitMessage(valid, message) {
        let msgClasses;
        if (valid) {
            msgClasses = "h3 text-center fadeInUp animated text-success";
        } else {
            msgClasses = "h3 text-center text-danger";
        }
        $("#msgSubmit").removeClass().addClass(msgClasses).text(message);
    }

    function validate(item,event) {
        if (event.isDefaultPrevented()) {
            handleError(item);
            submitMessage(false, "Did you fill in the form properly?");
            return false;
        }
        return true;
    }

    $("#commentForm").validator().on("submit", function (event) {
        if (validate("#commentForm", event)) {
            event.preventDefault();
            addComment();
        }
    });

    $("#contactForm").validator().on("submit", function (event) {
        if (validate("#contactForm", event)) {
            event.preventDefault();
            sendContactForm();
        }
    });

    function addComment() {
        let name = $("#name").val();
        let email = $("#email").val();
        let content = $("#content").val();
        let form = "#commentForm";

        post(
            "/blog/publish/",
            {
                "name": name,
                "email": email,
                "content": content
            },
            (data) => {
                handleSuccess(form, data)
            },
            (errors) => {
                handleError(form)

            }
        )
    }

    function sendContactForm() {
        let name = $("#name").val();
        let email = $("#email").val();
        let message = $("#message").val();
        let form = "#contactForm";

        post(
            "/contact/send/",
            {
                "name": name,
                "email": email,
                "message": message
            },
            (data) => {
                handleSuccess(form, data)
            },
            (errors) => {
                handleError(form)
            }
        );
    }

    // $("#portfolio-item").mixItUp();

    $(".sa-view-project-detail").on("click", function (event) {
        event.preventDefault();
        let href = $(this).attr("href") + " " + $(this).attr("data-action"),
            dataShow = $("#project-gallery-view"),
            dataShowMeta = $("#project-gallery-view meta"),
            dataHide = $("#portfolio-item"),
            preLoader = $("#loader"),
            backBtn = $("#back-button"),
            filterBtn = $("#filter-button");

        dataHide.animate({"marginLeft": "-120%"}, {duration: 400, queue: false});
        filterBtn.animate({"marginLeft": "-120%"}, {duration: 400, queue: false});
        dataHide.fadeOut(400);
        filterBtn.fadeOut(400);
        setTimeout(function () {
            preLoader.show();
        }, 400);
        setTimeout(function () {
            dataShow.load(href, function () {
                dataShowMeta.remove();
                preLoader.hide();
                dataShow.fadeIn(600);
                backBtn.fadeIn(600);
            });
        }, 800);
    });

    $("#back-button").on("click", function (event) {
        event.preventDefault();
        let dataShow = $("#portfolio-item"),
            dataHide = $("#project-gallery-view"),
            filterBtn = $("#filter-button");

        $("[data-animate]").each(function () {
            $(this).addClass($(this).attr("data-animate"));
        });

        dataHide.fadeOut(400);
        $(this).fadeOut(400);
        setTimeout(function () {
            dataShow.animate({"marginLeft": "0"}, {duration: 400, queue: false});
            filterBtn.animate({"marginLeft": "0"}, {duration: 400, queue: false});
            dataShow.fadeIn(400);
            filterBtn.fadeIn(400);
        }, 400);
        setTimeout(function () {
            dataShow.find(".fadeInRight, .fadeInLeft, .fadeInUp, .fadeInDown").removeClass("fadeInRight").removeClass("fadeInLeft").removeClass("fadeInUp").removeClass("fadeInDown");
        }, 1500);
    });

});

google.maps.event.addDomListener(window, "load", init);

function init() {
    const mapOptions = {
        zoom: 17,
        scrollwheel: false,
        navigationControl: false,
        center: new google.maps.LatLng(24.906308, 91.870413),
        styles: [{
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [{"color": "#e9e9e9"}, {"lightness": 17}]
        },
            {
                "featureType": "landscape",
                "elementType": "geometry",
                "stylers": [{"color": "#f5f5f5"}, {"lightness": 20}]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [{"color": "#ffffff"}, {"lightness": 17}]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [{"color": "#ffffff"}, {"lightness": 29}, {"weight": 0.2}]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [{"color": "#ffffff"}, {"lightness": 18}]
            },
            {
                "featureType": "road.local",
                "elementType": "geometry",
                "stylers": [{"color": "#ffffff"}, {"lightness": 16}]
            },
            {"featureType": "poi", "elementType": "geometry", "stylers": [{"color": "#f5f5f5"}, {"lightness": 21}]},
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [{"color": "#dedede"}, {"lightness": 21}]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [{"visibility": "on"}, {"color": "#ffffff"}, {"lightness": 16}]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [{"saturation": 36}, {"color": "#333333"}, {"lightness": 40}]
            },
            {"elementType": "labels.icon", "stylers": [{"visibility": "off"}]}, {
                "featureType": "transit", "elementType": "geometry", "stylers": [{"color": "#f2f2f2"},
                    {"lightness": 19}]
            }, {
                "featureType": "administrative",
                "elementType": "geometry.fill",
                "stylers": [{"color": "#fefefe"}, {"lightness": 20}]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.stroke",
                "stylers": [{"color": "#fefefe"}, {"lightness": 17}, {"weight": 1.2}]
            }]
    };
    // let mapElement = document.getElementById("map");
    // let map = new google.maps.Map(mapElement, mapOptions);
    // let marker = new google.maps.Marker({
    //     position: new google.maps.LatLng(24.906308, 91.870413),
    //     map: map,
    //     title: "24 Golden Tower (2nd floor), Amborkhana, Sylhet.!"
    // });


}
