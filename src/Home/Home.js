import React, { useState } from "react";
import fakeData from "../FakedData/FakeData";
import Course from "../Course/Course";
import "./Home.css";
import Cart from "../Cart/Cart";


const Home = () => {
  const [cart, setCart] = useState([]);
  // const filterData = fakeData.map((data)=>{
  //     if(props.searchName === " "){
  //       return fakeData;
  //     } else{
  //       return props.searchName === data.title;
            
  //     }
  // })

  const handelAddCourse = (data) =>{
      const newCart = [...cart,data];
      setCart(newCart);
  }

  return (
    <div>
      <div className="home-header">
        <h1>Chose Your Course</h1>
      </div>
      <div className="container-fluid">
        <div className="row  row-cols-3 gy-4 mt-5">
          
          {fakeData.map((data) => {
            return (
              <Course
                key={data.id}
                data = {data}
                handelAddCourse={handelAddCourse}
              />
            );
          })}
         
          
        </div>
      
      <div className="cart-container">
     
          <Cart
           cart = {cart}
          
          ></Cart>
          </div>
      </div>
    </div>
  );
};

export default Home;
