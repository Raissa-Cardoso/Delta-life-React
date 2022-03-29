import './App.css'
import React from "react";
import {BrowserRouter as Router} from 'react-router-dom';

import Layout from "./pages/Layout";
import Teste from "./pages/Teste"



export default function App() {
  return (
    <div className="App">
        <Router>
          <Layout/> 
          <Teste/> 
        </Router>                 
      
    </div>
  );
}



