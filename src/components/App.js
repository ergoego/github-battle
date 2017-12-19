import React, {Component} from 'react';
import Popular from './Popular.js';
import Battle from './Battle.js';
import Nav from './Nav.js';
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;

class App extends Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <Route path='/' component={Nav}/>
          <Route path='/popular' component={Popular}/>
        </div>
      </Router>
    );
  }
}

export default App;
