import React from "react";
import './Logo.css';
import {Link} from 'react-router-dom';

import clicou from'../../Actions/menu'
const logo=require('../../assets/logo.jpg');

export default function Logo(props){
    return (
        <div className="logo">
            <Link to="/" onClick={()=>clicou("/")}>
                <img  src={logo}  alt="logo Delta Life"/>
            </Link>
            <Link to="/" onClick={()=>clicou("/")}>
                <p>Delta Life</p>
            </Link>                       
        </div>
    )
}