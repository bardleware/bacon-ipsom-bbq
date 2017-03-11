import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';

import NavBar from './Components/NavBar';
import Body from './Components/Body';
import Splash from './Components/Pages/Splash';
import Designer from './Components/Pages/Designer';
import Dashboard from './Components/Pages/Dashboard';
import Director from './Components/Pages/Director';
import Quality from './Components/Pages/Quality';
import Supervisor from './Components/Pages/Supervisor';




import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
          <Router history={browserHistory}>
              <Route component={Body}>
                  <Route path="/" component={Splash} />
                  <Route path="employee" component={Designer} />
                  <Route path="dashboard" component={Dashboard} />
                  <Route path="supervisor" component={Supervisor} />
                  <Route path="quality" component={Quality} />
                  <Route path="director" component={Director} />
              </Route>
          </Router>
      </div>
    );
  }
}

export default App;
