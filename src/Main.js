import React from 'react';
import './index.css';

const linha700 = require('./assets/vet8.jpeg');
const hosp1000 = require('./assets/hosp1.jpeg');
const linha1000 = require('./assets/vet1.jpeg');
const linha4000 = require('./assets/vet2.jpeg');

function Main() {
  return (
    <section class="home">
        <h1 id="maisVendidos">Mais Vendidos</h1>
        <main class="principal">            
              <div class="produto">
                  <img src={linha1000}  alt="DL1000-Monitor Multiparametros Vet"/>
              </div> 
              <div class="produto">
                <img src={linha700}  alt="DL740-Monitor Multiparametros Vet"/>
              </div>
              <div class="produto">
                <img src={hosp1000}  alt="Life 1000-Monitor Multiparametros médico-hospitalar humano"/>
              </div>                   
        </main>
    </section>
        );
    }

export default Main;