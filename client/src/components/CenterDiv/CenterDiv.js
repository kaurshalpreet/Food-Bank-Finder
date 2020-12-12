import React from "react";
import FoodBankLocations from "../FoodBankLocations/foodBankLocations";
import GoogleMap from "../GoogleMap/googleMap";
import "./CenterDiv.css";

function CenterDiv() {
  return (
    <div id="centerDiv">
      <FoodBankLocations />
      <GoogleMap />
    </div>
  );
}

export default CenterDiv;
