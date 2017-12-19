import React, {Component} from 'react';
import Popular from './Popular.js';
import Battle from './Battle.js';
import Nav from './Nav.js';
import Home from './Home.js';
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;

class App extends Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <Nav />
          <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/popular' component={Popular}/>
          <Route exact path='/battle' component={Battle}/>
          <Route render={function(){return<p>404 Not Found</p>}}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
