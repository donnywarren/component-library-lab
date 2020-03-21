import React from "react";
const Thumbnail = props => (
  <>
    <img id='mainImage' src={props.mainPicture} />
    <img id='hoverImage' src={props.hoverPicture} />
  </>
);
export default Thumbnail;