import React from "react";
import MyParagraph from "./MyParagraph";

const DemoOutput = (props) => {
  return <MyParagraph>{props.show ? 'This is New!' : ''}</MyParagraph> // Instead of conditionally rendering the whole html element, 
                                                  //I condtition the Text inside checking if props.show is truethy
}
export default React.memo(DemoOutput); // Memo tells react to check if the proips of this component have changed since the last state
                                      //this way will not be rerender if it was not changed
                                      