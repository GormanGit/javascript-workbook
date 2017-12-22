
import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import mainPage from "./Component/mainPage";
import charInfo from "./Component/charInfo";
// import logo from './logo.svg';
// import './App.css';
// // import './Component/infoButton'
// import 'semantic-ui-css/semantic.min.css';
// import { Button } from 'semantic-ui-react'

const App = () => (
  <div>
<Route path="/" exact component={mainPage} />
<Route path="/charInfo" exact component={charInfo} />
</div>
);
export default App;


