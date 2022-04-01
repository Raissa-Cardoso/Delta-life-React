import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useParams,
  useMatch
} from "react-router-dom";

/*export default function NestMainFuncao() {
    return (
        let { url } = useMatch();
        let { id } = useParams();
        let person = find(parseInt(id));
      
        return (
          <div>
            <h3>{person.name}’s Friends</h3>
      
            <ul>
              {person.friends.map(id => (
                <li key={id}>
                  <Link to={`${url}/${id}`}>{find(id).name}</Link>
                </li>
              ))}
            </ul>
      
            <Switch>
              <Route path={`${url}/:id`}>
                <Person />
              </Route>
            </Switch>
          </div>
    )
    }*/

    //FUNÇÃO PARA PEGAR ID DO NESTMENU E ENVIAR PARA SER ABERTO NO NESTMAIN