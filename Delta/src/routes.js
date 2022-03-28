import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from './Main/Main';
import Assinaturas from './Assinaturas/Assinaturas'

const Routes = () => {
   return(
       <>
           <Route component = { Home }  path="/" exact />
           <Route component = { Assinaturas }  path="/assinaturas" />           
       </>
   )
}

export default Routes;