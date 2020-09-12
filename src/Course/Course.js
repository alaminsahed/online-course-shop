import React from 'react';
import "./Course.css";
const Course = (props) => {
  return (
    
    <div className="container">
      
    <div className="col">
      <div className="card">
        <img src={props.img} className="card-img-top" alt="img" />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">
            {
                props.des
            }
          </p>
          <a href="/" class="btn btn-primary">View Details</a>
        </div>
      </div>
    </div>
  </div>
   
  );
};

export default Course;