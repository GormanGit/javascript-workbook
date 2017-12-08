//
// https://blog.hellojs.org/fetching-api-data-with-react-js-460fe8bbf8f2
import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import logo from './logo.svg';


import './App.css';

class Background extends Component {
    constructor() {
        super();
        //set initail state...
        this.state = {
            pictures: [],
        };
    }
// lifecycle method:....

componentDidMount(){
  //this is the fetch + api call
  fetch('https://randomuser.me/api/?results=8')
  .then(results => {
      return results.json();
    }).then(data => {
        let pictures = data.results.map((pic) => {
            return(
                <div>
                <div class="ui segment" key={pic.results}>
                   <img class="ui image" src={pic.picture.large} />
                </div>
                </div>


            )
        })
        this.setState({pictures: pictures});
        console.log("state", this.state.pictures);
    })
}
  //render the data
  render() {
    return (


      <div className="App-logo" >
      <div className="Pics" >
      {/*<div className="App-logo">*/}
          {this.state.pictures}
      {/*</div>*/}
      </div>
      </div>

    );
  }
}

export default Background;
