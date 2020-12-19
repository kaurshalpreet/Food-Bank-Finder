import React from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import "./CardContainer.css";
import FoodBankLocations from "../FoodBankLocations/FoodBankLocations";
import GoogleMap from "../GoogleMap/googleMap";
import SavedLocations from "../SavedLocations/SavedLocations";

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
      buttonOne: "",
      buttonTwo: "",
      buttonThree: "",

      name:[],
      city:[],
      hours:[],
      address:[],
      link:[],
      showlocation: "none",
      showfoodbank: "none",
      showgooglemap: "inline"


    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.savedLocationsTwo = this.savedLocationsTwo.bind(this)
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
          this.setState({ nameOne: "" });
          this.setState({ linkOne: "" });
          this.setState({ addressOne: "" });
          this.setState({ cityOne: "" });
          this.setState({ hoursOne: "" });
          this.setState({ nameTwo: "" });
          this.setState({ linkTwo: "" });
          this.setState({ addressTwo: "" });
          this.setState({ cityTwo: "" });
          this.setState({ hoursTwo: "" });
          this.setState({ nameThree: "" });
          this.setState({ linkThree: "" });
          this.setState({ addressThree: "" });
          this.setState({ cityThree: "" });
          this.setState({ hoursThree: "" }, () => {
            alert("No Food Bank found");
          });

          this.setState({
            buttonOne: "none",
            buttonTwo: "none",
            buttonThree: "none",
          });
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
          this.setState({buttonOne: "table-cell", buttonTwo: "none", buttonThree: "none"})
          this.setState({showfoodbank:"table"});
          this.setState({showgooglemap:"inline"});
          this.setState({showlocation:"none"});

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
          this.setState({buttonOne: "table-cell", buttonTwo: "table-cell", buttonThree: "none"})
          this.setState({showfoodbank:"table"});
          this.setState({showgooglemap:"inline"});
          this.setState({showlocation:"none"});

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
          this.setState({buttonOne: "table-cell", buttonTwo: "table-cell", buttonThree: "table-cell"})
          this.setState({showfoodbank:"table"});
          this.setState({showgooglemap:"inline"});
          this.setState({showlocation:"none"});

        }
      });
  };


  savedLocationsTwo(event) {
    event.preventDefault()
    console.log('rendering data from Card Contianer')
    axios.post('/user/renderSavedLocations').then(response => {
      
      this.setState({name:response.data.name})
      this.setState({link:response.data.link})
      this.setState({city:response.data.city})
      this.setState({address:response.data.address})
      this.setState({hours:response.data.hours})
      this.setState({showfoodbank:"none"});
      this.setState({showgooglemap:"none"});
      this.setState({showlocation:"table"});


    })
    .catch(error => {
      console.log(error)
  })
  }




  render() {
    return (
      <div className="col-12 mx-auto">
        <Card
          style={{ width: "16rem", marginBottom: "25px" }}
          id="cardContainer"
        >
          <Card.Body>
            <Card.Title className="mb-2 text-muted" style={{marginLeft:"10px", marginRight:"auto"}}>
              Search Local Foodbanks
            </Card.Title>
            <form onSubmit={this.handleSubmit} >
              <label style={{marginLeft:"17px", marginRight:"auto"}}>
                <input 
                  type="text"
                  name="zipcode"
                  placeholder="Enter Zipcode"
                  onChange={this.handleChange}
                />
              </label>
              <button id="searchButton" className="col-6 mx-auto btn-md btn btn-info btn-block" type="submit">
                Search
              </button>

              <button id="savedButton" onClick={this.savedLocationsTwo} className="col-8 mx-auto btn-md btn btn-success btn-block" type="submit">
                Saved Locations
              </button>


            </form>
          </Card.Body>
        </Card>


        <div id="centerDiv">

          <FoodBankLocations
          showfoodbank= {this.state.showfoodbank}

            nameLocationOne={this.state.nameOne}
            linkLocationOne={this.state.linkOne}
            addressLocationOne={this.state.addressOne}
            cityLocationOne={this.state.cityOne}
            hoursLocationOne={this.state.hoursOne}
            buttonOne={this.state.buttonOne}
            nameLocationTwo={this.state.nameTwo}
            linkLocationTwo={this.state.linkTwo}
            addressLocationTwo={this.state.addressTwo}
            cityLocationTwo={this.state.cityTwo}
            hoursLocationTwo={this.state.hoursTwo}
            buttonTwo={this.state.buttonTwo}
            nameLocationThree={this.state.nameThree}
            linkLocationThree={this.state.linkThree}
            addressLocationThree={this.state.addressThree}
            cityLocationThree={this.state.cityThree}
            hoursLocationThree={this.state.hoursThree}
            buttonThree={this.state.buttonThree}
          />

          <GoogleMap 
          showgooglemap= {this.state.showgooglemap}
          />

          <SavedLocations
          showlocation={this.state.showlocation}  
          name={this.state.name}
          address = {this.state.address}
          city = {this.state.city}
          hours = {this.state.hours}
          link = {this.state.link}
          />


        </div>
      </div>
    );
  }
}
