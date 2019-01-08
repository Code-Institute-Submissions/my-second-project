   var mycountry;
        var map;
        var infowindow;
        var geocoder;
        var service;
        var markers =[];
        var request;
        var iso;
        
        
        
        function initMap() {
                geocoder = new google.maps.Geocoder();
                var center = new google.maps.LatLng(54.2361, -4.5481)
                map = new google.maps.Map(document.getElementById('map'), {
                center: center,
                zoom: 6
                });
                iso="IE";
                autocomplete();
            
         }
         
         function autocomplete() {
           
              var input = document.getElementById('autocomplete');
              var autocomplete = new google.maps.places.Autocomplete(input,{types: ['(cities)']});
              
             autocomplete.setComponentRestrictions( {'country': [iso]});
             google.maps.event.addListener(autocomplete, 'place_changed', function(){
                var place = autocomplete.getPlace();
         })
             
         }
         
         function codeAddress() {
             clearResults(markers);
             var countryISO;
             var address = document.getElementById("autocomplete").value;
             var locType = document.querySelector('input[name="tourist"]:checked').value; 
             var iso = ISOcounty();
              geocoder.geocode( {'address': address, componentRestrictions: {country: iso} }, function(results, status) {
              if (status == 'OK') {
                map.setCenter(results[0].geometry.location);
                map.setZoom(15);
                var marker = new google.maps.Marker({
                    map: map,
                    position: results[0].geometry.location,
                    title: "center"
                });
                var pos = results[0].geometry.location;
                request = {
                     location: (pos),
                     radius:1000,
                     types: [locType]
                     };
                service = new google.maps.places.PlacesService(map);
                service.nearbySearch(request, callback);
                infowindow = new google.maps.InfoWindow();
              } else {
                alert('Geocode was not successful for the following reason: ' + status);
              }
            });
            
         }
          function ISOcounty(){
              var countryISO;
              var mycountry = document.getElementById("country").value;
             if(mycountry == "ireland") {
                 countryISO = "IE" ;
             } else {
                 countryISO ="GB" ;
             }
              return countryISO;
          }
         
          function clearResults (markers){
              for (i= 0; i < markers.length; i++){
                  markers[i].setMap(null);
              }
              markers = [];
             
          }
          function callback(results, status) {
             if(status == google.maps.places.PlacesServiceStatus.OK){
                 for(var i =0; i < results.length; i++){
                     markers.push(createMarker(results[i]));
                 }
             } else {
                  alert("Could not find any venue of that type");
             }
             
         }
         
         function createMarker(place) {
             var placeLoc = place.geometry.location;
             var locType = document.querySelector('input[name="tourist"]:checked').value; 
             var iconType ;
             if (locType =="bar"){
                  iconType="bar.png"
                  
             } else if (locType=="restaurant"){
                 iconType ="restaurant.png";
                 
             } else if (locType=="hotel"){
                 iconType="lodging.png";
                 
             }else if (locType=="museum"){
                 iconType="info.png";
                 
             }
             
             
                 var marker = new google.maps.Marker({
                 map: map,
                 position: place.geometry.location,
                 icon: {url : "http://maps.google.com/mapfiles/ms/icons/"+iconType},
                 animation: google.maps.Animation.DROP
             });
             google.maps.event.addListener(marker, 'click', function() {
                infowindow.setContent('<div><strong>' + place.name + '</strong><br>' +
                'Place ID: ' + place.place_id + '<br>' +
                place.formatted_address + '</div>');
                infowindow.open(map, this);
             });
             
             return marker;
         }
         
        function moveCenterToCapital() {
            mycountry = document.getElementById("country").value;
            if(mycountry === "ireland"){
                map.setCenter({lat: 53.4230832, lng: -7.942705});
                map.setZoom(7);
            } else if (mycountry === "wales") {
                map.setCenter({lat: 52.2928116, lng: -3.73893});
                map.setZoom(7);
            } else if (mycountry === "england") {
                map.setCenter({lat: 52.7954791, lng: -0.5402402866174321});
                map.setZoom(7);
            } else if (mycountry === "scotland") {
                map.setCenter({lat: 56.7861112, lng: -4.1140518});
                map.setZoom(7);
            } else if (mycountry === "nireland") {
                map.setCenter({lat: 54.5947991 , lng: -6.0667142});
                map.setZoom(7);
            } else{
                map.setCenter({lat: 53, lng: 7})
                map.setZoom(7);
            }
            iso = ISOcounty();
            autocomplete();
        }