import React from "react";
import mapboxgl from "mapbox-gl";
import Directions from "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions";
import "./Map.css";
// import CardContainer from "../Card/CardContainer";

mapboxgl.accessToken =
  "pk.eyJ1IjoiaGFsb3dlOTQiLCJhIjoiY2tpc2hxaXBnMGQ2bDJyb2FvNDRhOG5ndiJ9.5xJMmq79AlCbz-1B_vwHhQ";

export default class Application extends React.Component {
  // Code from the next few steps will go here
  constructor(props) {
    super(props);

    this.state = {
      lng: -121.749997,
      lat: 38.537331184,
      zoom: 4,
    };
    console.log("props: " + JSON.stringify(props));
  }

  componentDidMount() {
    const map = new mapboxgl.Map({
      hash: true,
      container: this.mapContainer,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom,
    });

    map.on("move", () => {
      this.setState({
        lng: map.getCenter().lng.toFixed(4),
        lat: map.getCenter().lat.toFixed(4),
        zoom: map.getZoom().toFixed(2),
      });
    });

    map.addControl(
      new Directions({
        accessToken: mapboxgl.accessToken,
      }),
      "top-left"
    );
  }

  render() {
    return (
      <div>
        <div>
          <div id="mapText">ENTER ADDRESS TO MAP YOUR NEAREST FOOD BANK</div>
        </div>
        <div ref={(el) => (this.mapContainer = el)} className="mapContainer" />
      </div>
    );
  }
}
