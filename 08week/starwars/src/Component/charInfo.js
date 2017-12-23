
import React, { Component } from 'react';
import { Route } from 'react-router-dom'
// import { mainPage } from "./mainPage";
import 'semantic-ui-css/semantic.min.css';

class charInfo extends Component {
  state = {}


render(){
  console.log(this.props);
  return(
    <div>
      <h1>Hello Page!</h1>
      <h1>{}</h1>

    </div>
  )
}
}


export default charInfo;