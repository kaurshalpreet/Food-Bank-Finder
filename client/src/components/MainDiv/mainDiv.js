import NavBar from "../NavBar/navBar";
import '../NavBar/navBar.css'
import FoodBankLocations from "../FoodBankLocations/foodBankLocations";
import GoogleMap from '../GoogleMap/googleMap';
//import Aside from '../Aside/aside';

function MainDiv() {
    return (
      <div className="m-4 mainDiv">
         <NavBar />
         <FoodBankLocations />
         <GoogleMap />
      </div>
    );
  }
  
  export default MainDiv;