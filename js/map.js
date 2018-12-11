var geocoder;
var map;
var i = 0;

function initMap() {

    if(i === 0 ) {
        i++;
        alert("hello1")
        geocoder = new google.maps.Geocoder();
        map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 53.142, lng: 7.6921 },
        zoom: 4
        });
    }
       
} 

function codeAddress() {
    alert("helloo2");
    var address = document.getElementById('city').value;
    geocoder.geocode( { 'address': address}, function(results, status) {
        if (status === 'OK') {
         //   alert(results[0].geometry.location)
            map.setCenter(results[0].geometry.location);
            var marker = new google.maps.Marker({
                map: map,
                position: results[0].geometry.location
                });
        
        } else {
            alert('Geocode was not successful for the following reason: ' + status);
             } 
    }); 
}