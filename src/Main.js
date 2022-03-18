import React from 'react';
import './index.css';

const linha700 = require('./assets/vet6.png');
const linha900 = require('./assets/vet7.png');
const linha4000 = require('./assets/vet8.png');
const linha1000 = require('./assets/vet9.png');
const linha400 = require('./assets/vet10.png');
const linha600 = require('./assets/vet11.png');

function Main() {
  return (
    <section class="home">
        <main class="principal">            
              <div class="produto">
                  <img src={linha700}  alt="linha 700"/>
              </div> 
              <div class="produto">
                <img src={linha900}  alt="linha 900"/>
              </div>
              <div class="produto">
                <img src={linha4000}  alt="linha 4000"/>
              </div>
              <div class="produto">
                <img src={linha1000}  alt="linha 1000"/></div> 
              <div class="produto">
                <img src={linha400}  alt="linha 400"/>
              </div>
              <div class="produto">
                <img src={linha600}  alt="linha 600"/>
              </div>               
        </main>
    </section>
        );
    }

export default Main;