import NavBar from "../NavBar/navBar";
import "../NavBar/navBar.css";
import FoodBankLocations from "../FoodBankLocations/foodBankLocations";
import GoogleMap from "../GoogleMap/googleMap";
import HeaderComps from "../HeaderComps/HeaderComps";
import Button from "react-bootstrap/Button";
import CitySearch from "../CitySearch/CitySearch";
//import Aside from '../Aside/aside';

function MainDiv() {
  return (
    <div className="m-4 mainDiv mx-auto">
      <NavBar />
      <HeaderComps />
      <CitySearch placeholder="City Name" />
      <CitySearch placeholder="Zipcode" />
      <Button>Search Location</Button>
      <FoodBankLocations />
      <GoogleMap />
    </div>
  );
}

export default MainDiv;
