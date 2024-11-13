import React from 'react'

export default function Textform(props) {
  return (
    <div>
        <h1>{props.heading}</h1>
      <div className="form-group">
    <textarea className="form-control" id="myform" rows="8"></textarea>
    <button className="btn btn-sm btn-primary mt-2">Click for Uppercase</button>
  </div>
    
    </div>
  )
}
