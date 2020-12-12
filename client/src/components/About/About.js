import React from "react";
import NavBar from "../NavBar/NavBar";

function About() {
  return (
    <div id="about">
      <NavBar />
      <div id="container">
        <h2>About</h2>
        <p>
          Food Bank Finder was created as a tool to encourage generosity and
          support those in need, not just during the holiday season. Food Bank
          Finder connects Californians to food banks near them that are
          consistently serving our neighbors. Together we can make the world a
          little better and help no one go hungry.
        </p>
      </div>
    </div>
  );
}

export default About;
