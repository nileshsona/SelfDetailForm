import React from "react";

const TextArea = props => ( 

  <div className="form-group">
    <label className="form-label">{props.title}</label>
    <textarea
      className="form-control"
      name={props.name}
      rows={props.rows}
      value={props.value}
      onChange={props.handleChange}
      placeholder={props.placeholder}
      style={{  
        height: 100
    }}
    />
  </div>
);

export default TextArea;
