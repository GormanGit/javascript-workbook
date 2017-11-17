import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    state = {
      count: 0,
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

handleClick = (index) => {
this.setState({count: this.state.count + 1})
        console.log(this.state.count)
}
renderPosts=()=> {
    return this.state.timelineData.map((item, index) => {
        return (
            <div>
                <p>{item.name}</p> <p>{item.post}</p>
                <a onClick={this.handleClick}><button>like</button></a>
                <p>{this.state.count}</p>
            </div>
        );
    })

}
    render()  {
        return this.renderPosts();
    }
}


export default App;


