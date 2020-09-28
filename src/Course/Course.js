import React from 'react';
import "./Course.css";
const Course = (props) => {
  console.log(props);
  const {img, title, details,price} = props.data;
  return (
    
    <div className="container">
      
    <div className="col">
      <div className="card">
        <img src={img} className="card-img-top" alt="img" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            {
                details
            }
          </p>
          <p>Price:${price}</p>
          <button onClick={()=>props.handelAddCourse(props.data)}>Add Course</button>
        </div>
      </div>
    </div>
  </div>
   
  );
};

export default Course;