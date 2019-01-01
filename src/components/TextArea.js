import React from 'react'
import Radio from './radio'

const TextArea = (props) => (  
  <div className="form-group">
      <label className="form-label">{props.title}</label>
      <textarea
        className="form-control"
        name={props.name}
        rows={props.rows}
        cols = {props.cols}
        value={props.value}
        onChange={props.handleChange}
        placeholder={props.placeholder} />
      <Radio />
  </div>
);

export default TextArea;

<Radio />
        {/* <Button
          title={"submit"}
          style={"btn btn-primary"}
          action={this.handleSubmit} 
        /> */}