import React from "react";
import './Logo.css';

const logo=require('../../assets/logo.jpg');

export default function Logo(props){
    return (
        <div className="logo">
            <a href="index.html">
                <img  src={logo}  alt="logo Delta Life"/>
            </a>
            <a href="index.html">
                <p>Delta Life</p>
            </a>
                       
        </div>
    )
}