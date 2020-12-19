import React,  {Component}  from 'react';
// import { Redirect } from 'react-router-dom';
// import { Route, Link } from 'react-router-dom';
import axios from 'axios';
import "./NavBar.css";
import SavedLocations from '../SavedLocations/SavedLocations';
import Button from "react-bootstrap/Button";
import MainDiv from "../MainDiv/MainDiv";

class NavBar extends Component {
  constructor(props) {
      super(props)
      this.state={name:[], link:[],address:[],city:[],hours:[]}
      this.logout = this.logout.bind(this)
  }

  logout(event) {
      event.preventDefault()
      console.log('logging out')
      axios.post('/user/logout').then(response => {
        console.log(response.data)
        window.location.replace("/");
        if (response.status === 200) {
          this.props.updateUser({
            loggedIn: false,
            email: null
          })
        }
      })
      .catch(error => {
          console.log('Logout error')
      })
    }

  render(props) {
      const loggedIn = this.props.loggedIn;
      console.log('navbar render, props: ')
      console.log(this.props);

  return (
 
    <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="/members">Foodbank Finder</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="/about">About <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#/" onClick={this.logout} >Sign Out</a>
      </li>
    </ul>
  </div>
</nav>

    </div> 

  );
}
}

export default NavBar;
