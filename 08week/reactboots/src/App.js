import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
// import * as FontAwesome from 'react-icons/lib/fa'


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            timelineData: [
                {name: 'Name: renee', post: 'I love kitties', id: 1},
                {name: 'Name: stevie', post: 'I love dogs', id: 2},
                {name: 'Name: groot', post: 'I Am Groot', id: 3},
                {name: 'Name: luke', post: 'blah blah blah', id: 4},
                {name: 'Name: vader', post: 'I am your father', id: 5},
                {name: 'Name: lea', post: 'Pizza', id: 6},
                {name: 'Name: tamra', post: 'Workout', id: 7},
                {name: 'Name: vicky', post: 'Coto Insurance', id: 8},
            ]

        };
    }
    handleClick = (postItem) => {

// this.setState({count: this.state.count+ 1})
        const newState = {};
        //if this.state[postItem.id] is true then this.state[postItem.id] +1 else leave at 1
        // store redundancy in variables this.state[postItem.id] ? this.state[postItem.id] + 1 : 1;
        const postLikes = this.state[postItem.id]
        const value = postLikes ? postLikes + 1 : 1;
        newState[postItem.id] = value
        //change the state with this.setState
        this.setState(newState)
    }
    renderPosts=()=> {
        return this.state.timelineData.map((item, index) => {
            return (
                <div index={index} style={{margin: 10, border: '1px solid black'}}>
                    <p>{item.name}</p>
                    <p>{item.post}</p>
                    <p>{item.id}</p>
                    {/*bind funktion to an event. if doesent exist then just display zero*/}
                    <a onClick={() => this.handleClick(item)}><Button bsSize='small' bsStyle='primary'>like {this.state[item.id] || 0}</Button>
                    </a>
                    <br/>
                    {/*to access the likes in the state that we want. tempral literal with javascript */}
                    {/*if state does not exist just display zero*/}
                    {/*<p>`Likes: ${this.state[item.id] || 0}</p>*/}
                </div>
            );
        })

    }
    render()  {
        return this.renderPosts();
    }
}


export default App;

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//           <Button bsSize='large' bsStyle='primary'>Hey Yo</Button>
//       </div>
//     );
//   }
// }
//
// export default App;