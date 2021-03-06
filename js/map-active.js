var map, latlng = new google.maps.LatLng(33.7879, 117.8531),
    stylez = [{
        featureType: "all",
        elementType: "all",
        stylers: [{
            saturation: -60
        }]
    }],
    mapOptions = {
        zoom: 15,
        center: latlng,
        scrollwheel: !1,
        scaleControl: !1,
        disableDefaultUI: !0,
        mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, "gMap"]
        }
    };
map = new google.maps.Map(document.getElementById("googleMap"), mapOptions);
var geocoder_map = new google.maps.Geocoder,
    address = "Orange";
geocoder_map.geocode({
    address: address
}, function (e, a) {
    if (a == google.maps.GeocoderStatus.OK) {
        map.setCenter(e[0].geometry.location);
        new google.maps.Marker({
            map: map,
            icon: "img/core-img/map.png",
            position: map.getCenter()
        })
    } else alert("Geocode was not successful for the following reason: " + a)
});
var mapType = new google.maps.StyledMapType(stylez, {
    name: "Grayscale"
});
map.mapTypes.set("gMap", mapType), map.setMapTypeId("gMap");