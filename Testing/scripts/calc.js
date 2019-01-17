function ISOcounty(country) {
var countryISO;
if (country == "Ireland") {
        countryISO = "IE";
    }
    else {
        countryISO = "GB";
    }
    return countryISO;
}


var lat = 0;
var lin = 0;

function moveCenterToCapital(country) {
    if(country=="Ireland") {
        lat = 53.42;
        lin = -7.94;
        return [lat,lin];
    } else if(country=="Ireland") {
        lat = 53.42;
        lin = -7.94;
        return [lat,lin];
    } else if(country=="NIreland") {
        lat = 54.59;
        lin = -6.06;
        return [lat,lin];
    } else if(country=="England") {
        lat = 52.79;
        lin = -0.54;
        return [lat,lin];
    } else if(country=="Wales") {
        lat = 52.29;
        lin = -3.73;
        return [lat,lin];
    } else if(country=="Scotland") {
        lat = 56.78;
        lin = -4.11;
        return [lat,lin];
    }
    else{
        lat = 53;
        lin = 7;
        return [lat,lin];
    }
}