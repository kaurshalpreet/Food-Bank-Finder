import React from "react";
import "./googleMap.css";

function GoogleMap(props) {
  return (
    <div style={{display:props.showgooglemap}}>
      <iframe
        title="Google Map"
        className="table-dark googleMap my-2 mx-auto"
        src="https:www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6502594.546087102!2d-119.306607!3d37.26917445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1605674273086!5m2!1sen!2sus"
        id="googleMap"
      ></iframe>
    </div>
  );
}

export default GoogleMap;
