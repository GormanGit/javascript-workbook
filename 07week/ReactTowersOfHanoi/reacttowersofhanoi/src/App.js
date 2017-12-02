import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

// class App extends Component {
//     state = {
//         stacks: {
//             a: [4, 3, 2, 1],
//             b: [],
//             c: []
//         },
//         stackColorObject: {
//             4: 'red',
//             3: 'orange',
//             2: 'yellow',
//             1: 'blue'
//         },
//         startStack: null,
//         error: '',
//
//     };
//
//
//     // isLegal(endStack) {
//     //     const endValue = this.state.stack[endStack][this.]
//     // }
// renderStacks(){
//     return Object.keys(this.state.stacks).map((stack, key) => {
//         return (
//             <div
//                 stack={stack}
//                 stacks={this.state.stackColorObject}
//                 />
//         )
//     })
// }
//    render() {
//
//     return(
//         <div>
//             <div style={{display: 'flex'}}>
//                 {this.renderStacks()}
//                 <p>{this.state.startStack}</p>
//                 </div>
//                 <p>{this.state.error}</p>
//         </div>
//      );
//   }
// }
//
//
//
// export default App;

class App extends Component {
    /*

    * */
    state = {
        stacks : {
            a: [4, 3, 2, 1],
            b: [],
            c: []
        },
        stackColorObj:{
            4: 'red',
            3: 'orange',
            2: 'yellow',
            1: 'green'
        },
        startStack: null,
        error: '',
    };

    isLegalMove(endStack){
        const endValue = this.state.stacks[endStack][this.state.stacks[endStack].length - 1];
        const startValue = this.state.stacks[this.state.startStack][this.state.stacks[this.state.startStack].length - 1];
        // if(!endValue){
        //    return true
        // }else if(endValue > startValue){
        //     return true
        // }else{
        //     return false
        // }
        return !endValue ||  endValue > startValue

    }
    moveDisc(endStack){
        const stacks = {...this.state.stacks};
        const valueToMove = stacks[this.state.startStack].pop();
        stacks[endStack].push(valueToMove);
        this.setState({stacks: stacks, startStack:null, error: null})
    }
    handleStackClick=(stack)=>{
        //if no startStack, assign startStack, else attempt move last disc and clear the start stack
        if(!this.state.startStack){
            this.setState({startStack: stack, error: null})
        }else{
            //check to see if it's a legal move
            // if there's nothing at the last item in the target Stack
            // if the last item in target stack is bigger last item in this.state.startStack
            if(this.isLegalMove(stack)){
                // move disc
                this.moveDisc(stack)
            }else{
                // tell the user there's an error, clear startStack
                this.setState({error: 'Illegal Move', startStack: null})
            }
        }
    }
    renderStacks(){
        return Object.keys(this.state.stacks).map((stack, key) => {
            return (
                <App
                    stack={stack}
                    stacks={this.state.stacks[stack]}
                    stackColorObj={this.state.stackColorObj}
                    handleStackClick={this.handleStackClick}
                />
            )
        })
    }
    render() {
        return (
            <div>
                <p>Hello world!</p>
                <div style={{ display: 'flex'}}>
                    {this.renderStacks()}
                    <p>{this.state.startStack}</p>
                </div>
                <p>{this.state.error}</p>

            </div>
        );
    }
}

export default App;
