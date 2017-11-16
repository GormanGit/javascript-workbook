import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor() {
    super();
    this.timelineData =
            [
            {name: 'renee', post: 'I love kitties', id: 1},
            {name: 'stevie', post: 'I love dogs', id: 2},
            {name: 'groot', post: 'I Am Groot', id: 3},
            {name: 'luke', post: 'blah blah blah', id: 4},
            {name: 'vader', post: 'I am your father', id: 5},
            {name: 'lea', post: 'Pizza', id: 6},
            {name: 'tamra', post: 'Workout', id: 7},
            {name: 'vicky', post: 'Coto Insurance', id: 8},
        ];
    }


renderPosts=(e)=>{
        return this.App.timlineData.map((name, post) => {
            return <div> <p>{post}</p> <p>{name}</p> <a>like</a></div>
    });
}
  render() {


    return (

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          {this.renderPosts()}
      </div>
    );
  }
}

export default App;
