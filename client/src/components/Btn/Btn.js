import React from "react";
import './Btn.css'

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function Btn() {
  return (
    <button className="btn btn-primary btn-lg btn-link" tabIndex="0">
    </button>
  );
}

export default Btn;