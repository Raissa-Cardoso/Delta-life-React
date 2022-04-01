import './App.css'
import React from "react";
import {BrowserRouter as Router} from 'react-router-dom';

import Menu from "./pages/Menu";
import Main from "./pages/Main";
import Nest from './pages/Nest';
import Nest2 from './pages/Nest2';
import NestMenu from './pages/NestMenu';
import NestMain from './pages/NestMain';

export default function App() {
  return (
    <div className="App">
        <Router>
          <Menu/> 
          <Main>              
          </Main>                  
        </Router>                 
      
    </div>
  );
}



