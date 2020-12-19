import React from "react";
import ReactDOM from "react-dom";
import mapboxgl from "mapbox-gl";
import "./Map.css";
// import CardContainer from "../Card/CardContainer";

mapboxgl.accessToken =
  "pk.eyJ1IjoiaGFsb3dlOTQiLCJhIjoiY2tpc2hxaXBnMGQ2bDJyb2FvNDRhOG5ndiJ9.5xJMmq79AlCbz-1B_vwHhQ";

export default class Map extends React.Component {
  // Code from the next few steps will go here
  constructor(props) {
    super(props);
    this.state = {
      lng: -121.749997,
      lat: 38.537331184,
      zoom: 4,
    };
  }

  componentDidMount() {
    const map = new mapboxgl.Map({
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
  }

  render() {
    return (
      <div>
        <div>
          <div id="mapText">
            Longitude: {this.state.lng} | Latitude: {this.state.lat} | Zoom:
            {this.state.zoom}
          </div>
        </div>
        <div ref={(el) => (this.mapContainer = el)} className="mapContainer" />
      </div>
    );
  }
}
