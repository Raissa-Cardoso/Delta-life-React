import React from "react";
import {Routes, Route } from 'react-router-dom';

import Nest2 from "./Nest2"

const NestMain = () => {
    return(
      <main className='Main'>
        <Routes>
          <Route path="/" element={<Nest2 />}/>         
      </Routes>
        
      </main>
    );
  };
  
  export default NestMain;