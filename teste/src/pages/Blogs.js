import React from "react";
import {Link,  useMatch, Route, Routes, useParams} from 'react-router-dom'



const Blogs = () => {
  let { path, url } = useMatch();

  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${url}/`}>Rendering with React</Link>
        </li>        
      </ul>

      <Routes>
        <Route exact path={path}>
          <h3>Please select a topic.</h3>
        </Route>
        <Route path={`${path}/:topicId`}>
          <Topic />
        </Route>
      </Routes>
    </div>
    
  );
}

  
  export default Blogs;

  function Topic() {
    // The <Route> that rendered this component has a
    // path of `/topics/:topicId`. The `:topicId` portion
    // of the URL indicates a placeholder that we can
    // get from `useParams()`.
    let { topicId } = useParams();
  
    return (
      <div>
        <h3>{topicId}</h3>
      </div>
    );
  }