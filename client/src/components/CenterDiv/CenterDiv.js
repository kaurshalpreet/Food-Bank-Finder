import React from "react";
import FoodBankLocations from "../FoodBankLocations/foodBankLocations";
import GoogleMap from "../GoogleMap/googleMap";

function CenterDiv() {
  return (
    <div className="col-8 mx-auto" id="centerDiv">
      <FoodBankLocations />
      <GoogleMap />
    </div>
  );
}

export default CenterDiv;
