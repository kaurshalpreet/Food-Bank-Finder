import React from "react";
import Card from "react-bootstrap/Card";
import CitySearch from "../CitySearch/CitySearch";
import Button from "react-bootstrap/Button";

function CardContainer() {
  return (
    <Card style={{ width: "16rem" }} id="cardContainer">
      <Card.Body>
        <Card.Title className="mb-2 text-muted">
          Search Local Foodbanks
        </Card.Title>
        <CitySearch />
        <Button>Search Locations</Button>
      </Card.Body>
    </Card>
  );
}

export default CardContainer;
