import React from "react";
import img from "../images/gif/loading-arrow.gif";

function Loading() {
  return (
    <div>
      <h4>data is Loading....</h4>
      <img src={img} alt="" />
    </div>
  );
}

export default Loading;
