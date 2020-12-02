import React from "react";
import NavBar from "../NavBar/NavBar";
import "../NavBar/NavBar.css";
import FoodBankLocations from "../FoodBankLocations/foodBankLocations";
import GoogleMap from "../GoogleMap/googleMap";
import HeaderComps from "../HeaderComps/HeaderComps";
// import Button from "react-bootstrap/Button";
// import CitySearch from "../CitySearch/CitySearch";
import CardContainer from "../Card/CardContainer";
//import Aside from '../Aside/aside';

function MainDiv() {
  return (
    <div className="m-4 mainDiv mx-auto">
      <NavBar />
      <HeaderComps />
      {/* <div>
          <CitySearch />
          <Button>Search Location</Button>
        </div> */}
      <CardContainer />
      <FoodBankLocations />
      <GoogleMap />
    </div>
  );
}

export default MainDiv;
