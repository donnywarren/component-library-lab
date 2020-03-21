import React from 'react';
import "./thumbnail.css"

// This is a functional component - just sent up a little differently as an arrow function!
const Thumbnail = (props) => (
  <button className={props.type}>{props.label}</button>


)

export default Thumbnail; 