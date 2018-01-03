var React =require('react');
var Popular = require('./Popular.js');
var Battle = require('./Battle.js');
var Nav = require('./Nav.js');
var Home = require('./Home.js');
var Results = require('./Results.js');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <Nav />
          <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/popular' component={Popular}/>
          <Route exact path='/battle' component={Battle}/>
          <Route path='/battle/results' component={Results}/>
          <Route render={function(){return<p>404 Not Found</p>}}/>
          </Switch>
        </div>
      </Router>
    )
  }
}

module.exports = App;
