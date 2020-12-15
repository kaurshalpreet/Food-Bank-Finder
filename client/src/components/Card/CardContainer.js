import React from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./CardContainer.css";
import FoodBankLocations from "../FoodBankLocations/FoodBankLocations";
import GoogleMap from "../GoogleMap/googleMap";

export default class CardContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zipcode: "95628",
      nameOne: "",
      nameTwo: "",
      nameThree: "",
      addressOne: "",
      addressTwo: "",
      addressThree: "",
      cityOne: "",
      cityTwo: "",
      cityThree: "",
      hoursOne: "",
      hoursTwo: "",
      hoursThree: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //const url = "https://controllerdata.lacity.org/resource/v2mg-qsxf.json?zip_code=";
  handleChange = (event) => {
    this.setState({ zipcode: event.target.value });
    console.log(event.target.value);
  };
  handleSubmit = (event) => {
    event.preventDefault();

    axios
      .get(
        `https://controllerdata.lacity.org/resource/v2mg-qsxf.json?zip_code=${this.state.zipcode}`
      )
      .then((res) => {
        console.log(res.data);
        if (res.data.length === 0) {
          alert("No Food Bank found");
        } else if (res.data.length === 1) {
          this.setState({ nameOne: res.data[0].name });
          this.setState({ linkOne: res.data[0].web_link.url });
          this.setState({ addressOne: res.data[0].street_address });
          this.setState({ cityOne: res.data[0].city });
          this.setState({ hoursOne: res.data[0].description });
          this.setState({ nameTwo: "" });
          this.setState({ linkTwo: "" });
          this.setState({ addressTwo: "" });
          this.setState({ cityTwo: "" });
          this.setState({ hoursTwo: "" });
          this.setState({ nameThree: "" });
          this.setState({ linkThree: "" });
          this.setState({ addressThree: "" });
          this.setState({ cityThree: "" });
          this.setState({ hoursThree: "" });
        } else if (res.data.length === 2) {
          this.setState({ nameOne: res.data[0].name });
          this.setState({ linkOne: res.data[0].web_link.url });
          this.setState({ addressOne: res.data[0].street_address });
          this.setState({ cityOne: res.data[0].city });
          this.setState({ hoursOne: res.data[0].description });
          this.setState({ nameTwo: res.data[1].name });
          this.setState({ linkTwo: res.data[1].web_link.url });
          this.setState({ addressTwo: res.data[1].street_address });
          this.setState({ cityTwo: res.data[1].city });
          this.setState({ hoursTwo: res.data[1].description });
          this.setState({ nameThree: "" });
          this.setState({ linkThree: "" });
          this.setState({ addressThree: "" });
          this.setState({ cityThree: "" });
          this.setState({ hoursThree: "" });
        } else if (res.data.length > 3) {
          this.setState({ nameOne: res.data[0].name });
          this.setState({ linkOne: res.data[0].web_link.url });
          this.setState({ addressOne: res.data[0].street_address });
          this.setState({ cityOne: res.data[0].city });
          this.setState({ hoursOne: res.data[0].description });
          this.setState({ nameTwo: res.data[1].name });
          this.setState({ linkTwo: res.data[1].web_link.url });
          this.setState({ addressTwo: res.data[1].street_address });
          this.setState({ cityTwo: res.data[1].city });
          this.setState({ hoursTwo: res.data[1].description });
          this.setState({ nameThree: res.data[2].name });
          this.setState({ linkThree: res.data[2].web_link.url });
          this.setState({ addressThree: res.data[2].street_address });
          this.setState({ cityThree: res.data[2].city });
          this.setState({ hoursThree: res.data[2].description });
          console.log(`${this.state.nameOne}`);
        }
      });
  };

  render() {
    return (
      <div className="col-12 mx-auto" id="contentDiv">
        <Card
          style={{ width: "16rem", marginBottom: "25px" }}
          // className="col-4"
          id="cardContainer"
        >
          <Card.Body>
            <Card.Title className="mb-2 text-muted">
              Search Local Foodbanks
            </Card.Title>
            <form onSubmit={this.handleSubmit}>
              <label>
                <input
                  type="text"
                  name="zipcode"
                  placeholder="Enter Zipcode"
                  onChange={this.handleChange}
                />
              </label>
              <button id="searchButton" className="col-6 mx-auto" type="submit">
                Search
              </button>
            </form>
          </Card.Body>
        </Card>
        <div id="centerDiv">
          <FoodBankLocations
            nameLocationOne={this.state.nameOne}
            linkLocationOne={this.state.linkOne}
            addressLocationOne={this.state.addressOne}
            cityLocationOne={this.state.cityOne}
            hoursLocationOne={this.state.hoursOne}
            nameLocationTwo={this.state.nameTwo}
            linkLocationTwo={this.state.linkTwo}
            addressLocationTwo={this.state.addressTwo}
            cityLocationTwo={this.state.cityTwo}
            hoursLocationTwo={this.state.hoursTwo}
            nameLocationThree={this.state.nameThree}
            linkLocationThree={this.state.linkThree}
            addressLocationThree={this.state.addressThree}
            cityLocationThree={this.state.cityThree}
            hoursLocationThree={this.state.hoursThree}
          />

          <GoogleMap />
        </div>
      </div>
    );
  }
}
