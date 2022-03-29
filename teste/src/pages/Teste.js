import './Teste.css'
import React from "react";
import {Routes, Route } from 'react-router-dom';

import Home from "../pages/Home";
import Blogs from "../pages/Blogs"


const Teste = () => {
    return(
      <main className='Main'>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/blogs" element={<Blogs />}/>
      </Routes>
        
      </main>
    );
  };
  
  export default Teste;