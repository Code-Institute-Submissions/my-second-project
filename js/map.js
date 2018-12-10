var geocoder;
var map;


function initMap() {
        geocoder = new google.maps.Geocoder();
        map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 53.142, lng: 7.6921 },
        zoom: 4
        });
        
   
         document.getElementById('submit').addEventListener('click', function() {
         geocodeAddress(geocoder, map);
             });
       
} 


/*function geocodeAddress(geocoder, resultsMap) {
  var address = document.getElementById('city').value;
  geocoder.geocode({'address': address}, function(results, status) {
    if (status === 'OK') {
      resultsMap.setCenter(results[0].geometry.location);
      var marker = new google.maps.Marker({
        map: resultsMap,
        position: results[0].geometry.location
      });
    } else {
        alert('Geocode was not successful for the following reason: ' + status);
    }
  });
}*/



function codeAddress() {
  
    var address = document.getElementById('city').value;
    geocoder.geocode( { 'address': address}, function(results, status) {
        if (status === 'OK') {
            
            alert(results[0].geometry.location)
            setCenter(results[0].geometry.location);
            var marker = new google.maps.Marker({
                map: map,
                position: results[0].geometry.location
                });
                map = new google.maps.Map(document.getElementById('map'), {
                center: {test},
                zoom: 4
        });
                
        
        } else {
            alert('Geocode was not successful for the following reason: ' + status);
             } 
    }); 
}