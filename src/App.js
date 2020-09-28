import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import './App.css';
import Navbar from './Navbar/Navbar';

import Home from './Home/Home';
import Cart from './Cart/Cart';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Home></Home>
     
      
    </div>
  );
}

export default App;
