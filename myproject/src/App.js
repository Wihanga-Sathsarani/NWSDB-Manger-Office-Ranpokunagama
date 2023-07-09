import React from "react";
import './App.css'


import Navbar from "./Components/Navbar/Navbar";
import Mainhome from './Mainhome';
import About from "./About";
import Footer from "./Components/Footer/Footer";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



import {BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Userprofile from "./Pages/Userprofile/Userprofile";
import Complaints from "./Components/Userslidebar/Complaints";

import Namechange from "./Components/Userslidebar/Namechange";
import Calmybill from "./Components/Userslidebar/Calmybill";
import Requests from "./Pages/Requests/Requests";











function App() {
  return(
    
    <Router>
      <div className="App">
        <Navbar/>
        <br/>
        <br/>
        <br/>
        <br/>
        
        
        
        <Routes>
          <Route path="/" element={<Mainhome/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/calmybill" element={<Calmybill/>} />
          <Route path="/complaints" element={<Complaints/>} />
          <Route path="/namechange" element={<Namechange/>} />
          <Route path="/consumerrequests" element={<Requests/>} />
          <Route path="/consumer/:activepage" element={<Userprofile/>} />
        </Routes>
        <br/>
        <br/>
        <Footer/>
      </div>

      
    </Router>
  );
  
}
export default App
