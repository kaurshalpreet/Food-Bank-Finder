import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
//import logo from './logo.svg';
import "./App.css";
import MainDiv from "./components/MainDiv/MainDiv";
import About from "./components/About/About";
import NavBar from "./components/NavBar/NavBar";

// Below code added by Shalpreet
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import SavedLocations from "./components/SavedLocations/SavedLocations"

// ----------------------------------------

// import NavBar from "./components/NavBar/navBar";
// import './components/NavBar/navBar.css'
// import FoodBankLocations from "./components/FoodBankLocations/foodBankLocations";
// import GoogleMap from './components/GoogleMap/googleMap';
// import Aside from './components/Aside/aside';

// Below code was commented out by shalpreet
// function App() {
//   return (
//     <div className="App">
//       <MainDiv />
//     </div>
//   );
// }
// --------------------------------------------------------

// Below code was added by shalpreet
function App() {
  return (
    <Router>
      <div>
        {/* <NavBar /> */}
        <Route exact path="/" component={SignIn} />
        <Route exact path="/SignUp" component={SignUp} />
        <Route path="/members" component={MainDiv} />
        <Route path="/about" component={About} />
        {/* <Route path ="/SavedLocations" component={SavedLocations} /> */}
      </div>
    </Router>
  );
}

export default App;
