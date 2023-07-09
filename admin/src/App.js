import React from "react";

import Nameupdate from "./Nameupdate";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'


import './App.css'
import Adminprofile from "./Adminprofile/Adminprofile";
import Adminlogin from "./Adminlogin/Adminlogin";



function App() {
  return(
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Adminlogin />}></Route>
      
      <Route path='/nameupdate/:Accountno' element={<Nameupdate />}></Route>
      
      
      <Route path='/admin/:activepage' element={<Adminprofile/>} />
    </Routes>
    

    </BrowserRouter>
    </div>
  );
  
}

export default App
