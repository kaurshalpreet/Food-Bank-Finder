import React from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import CitySearch from "../CitySearch/CitySearch";
import Button from "react-bootstrap/Button";

export default class CardContainer extends React.Component {
  state = {
    zipcode: "95628",
  };
 

  //const url = "https://controllerdata.lacity.org/resource/v2mg-qsxf.json?zip_code=";
  handleChange = (event) => {
    this.setState({ zipcode: event.target.value });
    console.log(event.target.value);
  };
  handleSubmit = (event) => {
    event.preventDefault();

    // const zip = {
    //   zipcode: this.state.zipcode,
    // };

    axios
      .get(
        `https://controllerdata.lacity.org/resource/v2mg-qsxf.json?zip_code=${this.state.zipcode}`
      )
      .then((res) => {
        console.log(res);
      });
  };

  // search.click(function () {
  //       axios
  //         .get(url,{
  //           url: url + input.val(),
  //          data: {
  //            $limit: 3,
  // $$app_token: "hsOYCdlUPwwQcEJAKfxONgoU0",
  //         },
  //       })
  //       .done(function (data) {
  //         alert("Retrieved " + data.length + " records from the dataset!");
  //         console.log(data);
  //       });
  //   });

  //   router.route("/zip").post((req, res) => {
  //     console.log(res);
  //   });
  // }
  render() {
    return (
      <Card style={{ width: "16rem" }} id="cardContainer">
        <Card.Body>
          <Card.Title className="mb-2 text-muted">
            Search Local Foodbanks
          </Card.Title>
          <CitySearch />
          <form onSubmit={this.handleSubmit}>
            <label>
              Person Name:
              <input type="text" name="zipcode" onChange={this.handleChange} />
            </label>
            <button type="submit">Add</button>
          </form>
          <Button id="searchButton">Search Locations</Button>
        </Card.Body>
      </Card>
    );
  }
}
