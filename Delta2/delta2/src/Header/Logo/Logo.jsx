import React from "react";
import './Logo.css';

const logo=require('../../assets/logo.jpg');

export default function Logo(props){
    return (
        <div className="logo">
            <img  src={logo}  alt="logo Delta Life"/>
            <p>Delta Life</p>            
        </div>
    )
}