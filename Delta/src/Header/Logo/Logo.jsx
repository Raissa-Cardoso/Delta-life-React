import React from "react";
import './Logo.css';
import {Link} from 'react-router-dom';

const logo=require('../../assets/logo.jpg');

export default function Logo(props){
    return (
        <div className="logo">
            <Link to="/">
                <img  src={logo}  alt="logo Delta Life"/>
            </Link>
            <Link to="/">
                <p>Delta Life</p>
            </Link>                       
        </div>
    )
}