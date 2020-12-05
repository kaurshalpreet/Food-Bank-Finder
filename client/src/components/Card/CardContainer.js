import React from "react";
import Card from "react-bootstrap/Card";
import CitySearch from "../CitySearch/CitySearch";
import Button from "react-bootstrap/Button";

//require express and express router
const express = require("express");
const router = require("express").Router();

function CardContainer() {
  function searchFunc() {
    console.log("i've been clicked");
    //this /zip route is going to be the call to the api eventually...i think
    router.route("/zip").post((req, res) => {
      console.log(res);
    });
  }

  return (
    <Card style={{ width: "16rem" }} id="cardContainer">
      <Card.Body>
        <Card.Title className="mb-2 text-muted">
          Search Local Foodbanks
        </Card.Title>
        <CitySearch />
        <Button id="searchButton" onClick={searchFunc}>
          Search Locations
        </Button>
      </Card.Body>
    </Card>
  );
}

export default CardContainer;
