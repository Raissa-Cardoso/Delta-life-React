import "./MinhaDelta.css";
import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom';

import MenuMinhaDelta from "./MenuMinhaDelta"
import MainMinhaDelta from "./MainMinhaDelta"

export default function AppMinhaDelta() {
    return (
      <div className="AppMinhaDelta">
        <Router>
            <MenuMinhaDelta/>           
            <MainMinhaDelta/>
        </Router>        
       
    </div>
)
}