jQuery(function ($) {

    'use strict';

    // --------------------------------------------------------------------
    // One Page Navigation
    // jQuery for page scrolling feature - requires jQuery Easing plugin
    // --------------------------------------------------------------------

    (function () {
        $('a.page-scroll').on('click', function (e) {
            e.preventDefault();
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop : $($anchor.attr('href')).offset().top
            }, 1500, 'easeInOutExpo');
        });
    }());

    // --------------------------------------------------------------------
    // Google Map
    // --------------------------------------------------------------------

    (function () {
        if ($('#googleMap').length > 0) {

            //set your google maps parameters
            var $latitude  = 48.869319, //If you unable to find latitude and longitude of your address. Please visit http://www.latlong.net/convert-address-to-lat-long.html you can easily generate.
                $longitude = 2.354261,
                $map_zoom  = 18;
            /* ZOOM SETTING */

            //google map custom marker icon
            var $marker_url = 'img/google-map-marker.png';

            //we define here the style of the map
            var style = [{
                "stylers" : [{
                    "hue" : "#000"
                }, {
                    "saturation" : 100
                }, {
                    "gamma" : 1.15
                }, {
                    "lightness" : 5
                }]
            }];

            //set google map options
            var map_options = {
                center            : new google.maps.LatLng($latitude, $longitude),
                zoom              : $map_zoom,
                panControl        : false,
                zoomControl       : false,
                mapTypeControl    : false,
                streetViewControl : false,
                mapTypeId         : google.maps.MapTypeId.ROADMAP,
                scrollwheel       : false,
                styles            : style,
            }
            //initialize the map
            var map = new google.maps.Map(document.getElementById('googleMap'), map_options);
            //add a custom marker to the map
            var marker = new google.maps.Marker({
                position : new google.maps.LatLng($latitude, $longitude),
                map      : map,
                visible  : true,
                icon     : $marker_url
            });
        }
    }());
});

jQuery(document).ready(function($){

    // --------------------------------------------------------------------
    // Timezones
    // --------------------------------------------------------------------

    var DateTime = luxon.DateTime;

    $("#section-agenda time").each(function() {
        var time_el = $(this).text();
        var local = DateTime.fromFormat(time_el + " Europe/Paris", "H:mm z");
        var london = local.setZone("Europe/London");
        var kolkata = local.setZone("Asia/Kolkata");

        
        $(this).parent().after('<div><time>' + kolkata.toFormat('H:mm') + '</time>&nbsp<timezone>Asia/Kolkata</timezone></div>');
        $(this).parent().before('<div><time>' + london.toFormat('H:mm') + '</time>&nbsp<timezone>Europe/London</timezone></div>');
    });
});