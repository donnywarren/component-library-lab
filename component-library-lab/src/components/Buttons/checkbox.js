import React from 'react';

// This is a functional component - just sent up a little differently as an arrow function!
const Checkbox = (props) => (
  <>
    <label>
      <input className={props.type} type="checkbox" />{props.label}
      <span class="checkmark"></span>
    </label>
  </>

);

export default Checkbox;



// import React from "react";
// const Checkbox = props => (
//   <>
//     <label>
//       <input className={props.type} type="checkbox" />{props.label}
//       <span class="checkmark"></span>
//     </label>
//   </>
// );
// export default Checkbox;

