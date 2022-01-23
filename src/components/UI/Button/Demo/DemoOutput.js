import React from "react";

const DemoOutput = (props) => {
  return <p>{props.show ? 'This is New!' : ''}</p> // Instead of conditionally rendering the whole html element, I condtition the Text inside checking if props.show is truethy
}
export default DemoOutput;