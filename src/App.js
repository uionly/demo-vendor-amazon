import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavHead from './Component/Navbar/NavHead';
import NavSubject from './Component/Navbar/NavSubject';
import NavEmpty from '../src/Component/Navbar/NavEmpty';
import Home from './Component/Pages/Home';
import Ambassador from './Component/Pages/Ambassador';
import VendorReturns from './Component/Pages/VendorReturns';
class App extends Component {
  render() {
    return (
      <Fragment>
        <Router>
          <NavHead/>
          <NavEmpty/>
          <NavSubject/>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/VendorReturns' component={VendorReturns} />
            <Route exact path='/Ambassador' component={Ambassador}/>
          </Switch>
        </Router>
      </Fragment>
    );
  }
}

export default App;