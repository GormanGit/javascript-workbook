import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    state = {
        stacks: {
            a: [4, 3, 2, 1],
            b: [],
            c: []
        },
        stackColorObject: {
            4: 'red',
            3: 'orange',
            2: 'yellow',
            1: 'blue'
        }


    };

    movePuck(endStack) {
        const stacks = {...this.state.stacks};
        const valueOfMove = stacks[this.state.startStack].pop();
        stacks[endStack].push(valueOfMove)
        this.setState({stacks: stacks, startStack: null})
    }

    render() {
        const status = stacks
    }

    return(

<div>
<div className="status">{status}</div>
</div>

);


}
}



export default App;

