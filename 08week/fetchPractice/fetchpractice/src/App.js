//
// https://blog.hellojs.org/fetching-api-data-with-react-js-460fe8bbf8f2
import React, { Component } from 'react';

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
  fetch('https://randomuser.me/api/?results=500')
  .then(results => {
      return results.json();
    }).then(data => {
        let pictures = data.results.map((pic) => {
            return(
                <div key={pic.results}>
                   <img src={pic.picture.medium} />

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
      <div className="container2">
      <div className="container1">
          {this.state.pictures}
      </div>
      </div>
    );
  }
}

export default Background;
