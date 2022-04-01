import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
  useParams,
  useRouteMatch
} from "react-router-dom";

import Pessoa from "./Pessoa"

export default function RecursiveExample() {
    return (
      <Router>
        <Routes>
          <Route path="/:id">
            <Pessoa />
          </Route>
          <Route path="/">
            <Navigate to="/0" />
          </Route>
        </Routes>
      </Router>
    );
  }