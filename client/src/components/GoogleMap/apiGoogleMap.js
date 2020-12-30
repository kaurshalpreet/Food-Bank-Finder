import React from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import FoodBankLocations from "../../FoodBankLocations/FoodBankLocations";
import GoogleMap from "../../GoogleMap/googleMap";

const url = "https://controllerdata.lacity.org/resource/v2mg-qsxf.json?zip_code="

// Intialize our map with UC Davis lat and long coordinates
var center = new google.maps.LatLng(38.544907,-121.740517);
var mapOptions = {
  zoom: 8,
  center: center
}
var map = new google.maps.Map(document.getElementById("map"), mapOptions);

// Retrieve our data and plot it
axios.get(url, function(data, textstatus) {
    axios.each(data, function(i, entry) {
      // Deal with our locations
    });
});

var marker = new google.maps.Marker({
    position: new google.maps.LatLng(entry.location_1.latitude, 
                                     entry.location_1.longitude),
    map: map,
    title: location.name
});