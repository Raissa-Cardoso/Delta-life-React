import './Main.css'
import React from "react";
import {Routes, Route, Router, Navigate} from 'react-router-dom';

import Home from "./Home";
import Nest from "./Nest";
import NestMain from './NestMain';

const Main = () => {
    return(
      <main className='Main' id="main">
        <Routes>
          <Route path="/" element={<Home />}> 
            
          </Route>       
          <Route path="/nest" element={<Nest />}> 
             
           </Route>        
           <Route path="/nestMain" element={<NestMain />}/> 
             
      </Routes>
        
      </main>
    );
  };
  
  export default Main;


