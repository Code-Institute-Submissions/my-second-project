// Global variables
var mycountry;
var map;
var infowindow;
var geocoder;
var service;
var markers = [];
var request;
var iso;


// Initial Map set up. Called from google maps api key
function initMap() {
    geocoder = new google.maps.Geocoder();
    var center = new google.maps.LatLng(54.2361, -4.5481);
    map = new google.maps.Map(document.getElementById('map'), {
        center: center,
        zoom: 6
    });
    iso = 'IE'; //default country code
    autocomplete(); //call autocomplete to add suggesting in search inbox

}
// used in search input box to predict location based on initial letters typed and country
function autocomplete() {
    var input = document.getElementById('autocomplete');
    // uses Places library in the Maps JavaScript API. 
    var autocomplete = new google.maps.places.Autocomplete(input, { types: ['(cities)'] });
    //default iso country Ireland, can be changed to the GB if one of there other four countries is selected from the drop down box
    autocomplete.setComponentRestrictions({ 'country': [iso] }); 
    google.maps.event.addListener(autocomplete, "place_changed", function() {
    autocomplete.getPlace();
    });
}

function codeAddress() {
    clearResults(markers);
    var address = document.getElementById('autocomplete').value;
    var locType = document.querySelector('input[name="tourist"]:checked').value;
    var iso = ISOcounty();
    geocoder.geocode({ 'address': address, componentRestrictions: { country: iso } }, function(results, status) {
        if (status == 'OK') {
            map.setCenter(results[0].geometry.location);  //Pans map to location
            map.setZoom(15);    
            var marker = new google.maps.Marker({   //PLace maker at the center of the location
                map: map,
                position: results[0].geometry.location,
                title: "center"
            });
            var pos = results[0].geometry.location;
            request = {       //area and type to be search around the centre
                location: (pos),
                radius: 1000,
                types: [locType, 'establishment']
            };
            service = new google.maps.places.PlacesService(map); //contructor
            service.nearbySearch(request, callback);  //retrieves places around the location
            infowindow = new google.maps.InfoWindow();
        }
        else {
            alert('Geocode was not successful for the following reason: ' + status);
        }
    });

}

// selects country ireland or GB for England Scotland Wales and N.Ireland
function ISOcounty() {
    var countryISO;
    var mycountry = document.getElementById("country").value;
    if (mycountry == 'ireland') {
        countryISO = 'IE';
    }
    else {
        countryISO = 'GB';
    }
    return countryISO;
}


// clears marker from previous search
function clearResults(markers) {
    for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(null);
    }
    markers = [];

}

//adds markers for venues that match the type and area
function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
            markers.push(createMarker(results[i]));
        }
    }
    else {
        alert("Could not find any venue of that type");
    }

}

// add marker one at a time. called by function above
function createMarker(place) {
    place.geometry.location;

    var locType = document.querySelector('input[name="tourist"]:checked').value;
    var iconType;
    if (locType == 'bar') {
        iconType = 'bar.png';

    }
    else if (locType == 'restaurant') {
        iconType = 'restaurant.png';

    }
    else if (locType == 'lodging') {
        iconType = 'lodging.png';

    }
    else if (locType == 'museum') {
        iconType = 'info.png';

    }

    // adds marker to map
    var marker = new google.maps.Marker({
        map: map,
        position: place.geometry.location,
        icon: { url: 'http://maps.google.com/mapfiles/ms/icons/' + iconType }, //selecting marker type
        animation: google.maps.Animation.DROP
    });
    
      var placeID = place.place_id; //new
      
     // When icon clicked gathers information for the infor window i.e. icon, name, address, website and phone number
     google.maps.event.addListener(marker, 'click', function() {
       var service = new google.maps.places.PlacesService(map);
       service.getDetails({placeId: placeID}, function(place, status){
           if (status == 'OK') {
               // changing undefined results to N/A.
                var phone = place.international_phone_number;
                var rating = place.rating;
                var website = place.website;
                var websiteText = 'Click for Venues Website';
                if (phone ==undefined) {
                    phone = 'N/A';
                }
                if (rating ==undefined) {
                    rating = 'N/A';
                }
                if (website ==undefined) {
                    website = 'N/A';
                    websiteText ='No Website available'; //In case there is no web site
                }
                // creates popup box on marker when clicked
                 infowindow.setContent('<div><img src='+ place.icon +' width=' +20+ ' height='+20+'><strong>' +  place.name + '</strong><br>' + place.formatted_address +
                '<br><a target="_blank" href=' + website + '>'+ websiteText + '</a><br>Phone: ' + phone + 
                '<br>  Rating out of 5: ' + rating +'</div>');
             }
             else {
                alert('places was not successful for the following reason: ' + status);
             }
              
       });
       infowindow.open(map, this);  //displays info window
     });
     
    return marker;
}


//Based on choice on dropdown(country), pan map to that specific location
function moveCenterToCapital() {
    mycountry = document.getElementById("country").value;
    if (mycountry === 'ireland') {
        map.setCenter({ lat: 53.4230832, lng: -7.942705 });
        map.setZoom(7);
    }
    else if (mycountry === 'wales') {
        map.setCenter({ lat: 52.2928116, lng: -3.73893 });
        map.setZoom(7);
    }
    else if (mycountry === 'england') {
        map.setCenter({ lat: 52.7954791, lng: -0.5402402866174321 });
        map.setZoom(7);
    }
    else if (mycountry === 'scotland') {
        map.setCenter({ lat: 56.7861112, lng: -4.1140518 });
        map.setZoom(7);
    }
    else if (mycountry === 'nireland') {
        map.setCenter({ lat: 54.5947991, lng: -6.0667142 });
        map.setZoom(7);
    }
    else {
        map.setCenter({ lat: 53, lng: 7 });
        map.setZoom(7);
    }
    iso = ISOcounty(); //set country based on choice
    //resets inputbox
    document.getElementById("autocomplete").value = "";
    document.getElementById('autocomplete').placeholder ="city";
    
    autocomplete(); // calls autcomplete as to limit it to the country selected.
    
}

