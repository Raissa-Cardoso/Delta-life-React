import './App.css'
import React from "react";
import {BrowserRouter as Router} from 'react-router-dom';

import Menu from "./pages/Menu";
import Main from "./pages/Main";





export default function App() {
  return (
    <div className="App">
        <Router>
          <Menu/> 
          <Main/>
                  
        </Router>                 
      
    </div>
  );
}



