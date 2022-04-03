import './App.css'
import React from "react";
import {BrowserRouter as Router} from 'react-router-dom';

import Menu from "./pages/Menu";
import Main from "./pages/Main";
import Nest from './pages/Nest';
import Nest2 from './pages/Nest2';
import Nest3 from './pages/Nest3';
import NestMenu from './pages/NestMenu';
import NestMain from './pages/NestMain';

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
/*import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


    
const routes = [
  {
    path: "/sandwiches",
    component: Sandwiches
  },
  {
    path: "/tacos",
    component: Tacos,
    routes: [
      {
        path: "/tacos/bus",
        component: Bus
      },
      {
        path: "/tacos/cart",
        component: Cart
      }
    ]
  }
];

export default function RouteConfigExample() {
  return (
    <>
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/tacos">Tacos</Link>
          </li>
          <li>
            <Link to="/sandwiches">Sandwiches</Link>
          </li>
        </ul>

        <Routes>
          
          <Route path="/sandwiches" element={<Sandwiches />}/> 
          <Route path="/tacos" element={<Tacos />}/> 
          
         
          </Routes>
      </div>
    </Router>
    </>
  );
}



function Sandwiches() {
  return <h2>Sandwiches</h2>;
}

function Tacos({ routes }) {
  return (
    <div>
      <h2>Tacos</h2>
      <ul>
        <li>
          <Link to="/tacos/bus">Bus</Link>
        </li>
        <li>
          <Link to="/tacos/cart">Cart</Link>
        </li>
      </ul>

      <Routes>
        <Route path="/tacos/bus" element={<Bus />}/> 
        <Route path="/tacos/cart" element={<Cart />}/> 
      </Routes>
    </div>
  );
}

function Bus() {
  return <h3>Bus</h3>;
}

function Cart() {
  return <h3>Cart</h3>;
}
*/




