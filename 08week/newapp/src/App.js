import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';
import MainPage from './components/pages/MainPage';
import './App.css';
// import Flexbox from 'flexbox-react';
// import RaisedButton from 'material-ui/RaisedButton';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

class App extends Component {

  render() {
    return (
      //  this is a semantic-ui-react also semantic-ui-css container that auto margins
      <div className="ui container">
           {/*forwardslash "/" signifies the home or homepage for the path */}
        <Route path="/" exact component={HomePage} />
          {/*this must start with a forward slash as it signifies the homepage starting point
          this path name does not matter as long as it matches the link*/}
        <Route path="/login" exact component={LoginPage} />
        <Route path="/main" exact component={MainPage} />
      </div>
    );
  }
}

export default App;
