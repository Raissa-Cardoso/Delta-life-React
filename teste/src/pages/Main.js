import './Main.css'
import React from "react";
import {Routes, Route, Router, Navigate} from 'react-router-dom';

import Home from "./Home";
import Nest from "./Nest";
import NestMain from './NestMain';
import Nest2 from './Nest2';
import Nest3 from './Nest3';

const Main = () => {
    return(
      <main className='Main' id="main">
        <Routes>
          <Route path="/" element={<Home />}> 
            
          </Route>       
          <Route path="/nest" element={<Nest />}> 
            
           </Route>  
          <Route path="/nest/nest2" element={<Nest2 />}/>           
          <Route path="/nest/nest3" element={<Nest3 />}/>      
         {/* <Route path="/nestMain" element={<NestMain />}/> 
          <Route path="/nest2" element={<Nest2 />}/>*/}             
      </Routes>
        
      </main>
    );
  };
  
  export default Main;


