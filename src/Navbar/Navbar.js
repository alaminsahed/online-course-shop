import React, { useState } from "react";
import Home from "../Home/Home";
import '../Navbar/Navbar.css';
import fakedata from "../FakedData/FakeData";


const Navbar = () => {
  // const [searchData, setSearchData] = useState([]);

  // const searchName = (e) =>{
  //     const nameData = e.target.value;
  //     setSearchData(nameData);
  //     return searchData;
  // }
 
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
         <h1 className="brandName ml-2">Academy</h1>
          <form className="d-flex">
            <input
              className="form-control mr-2"
              name = "search"
              type="text"
              placeholder="Search"
              aria-label="Search"
            />  
          </form>
        </div>
      </nav>
     
    </div>
  );
};

export default Navbar;
