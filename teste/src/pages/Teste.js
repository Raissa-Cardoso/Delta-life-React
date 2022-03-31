import './Teste.css'
import React from "react";
import {Routes, Route, Router} from 'react-router-dom';

import Home from "../pages/Home";
import Blogs from "../pages/Blogs"
import Nest from "../pages/Nest"
import Nest2 from './Nest2';
import NestMain from './NestMain';
import NestMenu from './NestMenu';
import indexNest from './indexNest';


const Teste = () => {
    return(
      <main className='Main'>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/blogs" element={<Blogs />}/>
          <Route path="/nest" element={<Nest />}/>                      
          
      </Routes>
        
      </main>
    );
  };
  
  export default Teste;