import React from "react";

import "./styles.css";

const OutputArea = (props) => {
  return (
    <div className="output-div">
      <input type="text" readOnly="readonly" value={props.value} />
    </div>
  );
};

export default OutputArea;
