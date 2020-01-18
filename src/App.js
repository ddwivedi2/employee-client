import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";
import EmployeeList from "./components/EmployeeList/index";
import Employee from "./components/Employee/index";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/emp">
          <EmployeeList />
        </Route>
        <Route path="/emp/:id">
          <Employee />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
