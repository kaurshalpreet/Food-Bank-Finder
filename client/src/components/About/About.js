import React from "react";
import NavBar from "../NavBar/NavBar";
import "./About.css";

function About() {
  return (
    <div>
      <div id="about" className="col-12 mx-auto">
        <NavBar />
      </div>

      <div id="text">
        <p style={{ color: "white" }}>
          Food Bank Finder was created as a tool to encourage generosity and
          support those in need--not just during the holiday season, but year
          round. Food Bank Finder connects Californians to food banks near them
          that are consistently serving our neighbors. Together we can make the
          world a little better and help no one go hungry.
        </p>
      </div>
    </div>
  );
}

export default About;
