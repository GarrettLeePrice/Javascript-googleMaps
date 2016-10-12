var googleMap = require('./../js/map.js').googleMapModule;

function initializeMap(){
  var userLatLng = new google.maps.LatLng(-34.397, 150.644);

  var myOptions = {
    zoom : 16,
    center : userLatLng,
    mapTypeId : google.maps.MapTypeId.ROADMAP
  };
  
  var mapObject = new google.maps.Map(document.getElementById("map"), myOptions);
}
$(document).ready(function() {

  initializeMap();
  console.log("map interface loaded");
});
