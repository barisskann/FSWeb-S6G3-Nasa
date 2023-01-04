import React from "react";
import "../css/nasa.css";
function Nasa(props) {
  return (
    <div>
      <img className="image" src={props.data.url}></img>
    </div>
  );
}
export default Nasa;
