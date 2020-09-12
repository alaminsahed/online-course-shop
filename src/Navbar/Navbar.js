import React from "react";
import '../Navbar/Navbar.css';
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
         <h1 className="brandName ml-2">Academy</h1>
          <form className="d-flex">
            <input
              className="form-control mr-2"
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
