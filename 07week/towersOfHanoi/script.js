'use strict';

// class TowersOfHanoi extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//
//   render() {
//     return (
//       <div>
//         <div data-stack="1">
//           <div data-block="100"></div>
//           <div data-block="75"></div>
//           <div data-block="50"></div>
//           <div data-block="25"></div>
//         </div>
//         <div data-stack="2">
//         </div>
//         <div data-stack="3">
//         </div>
//       </div>
//     );
//   }
// }
//
// ReactDOM.render(<TowersOfHanoi />, document.getElementById('towers-of-hanoi'));
 class  extends Component {
  state = {

      stacks : {
          a: [4, 3, 2, 1],
          b: [],
          c: []
      },
      stackColorObject:{
      4: 'red',
      3: 'orange',
      2: 'yellow',
      1: 'green'
      },
      startStack: null,
  }
  handleClick(startStack){
   
  }
 };
  //drag and drop llibrary****
   renderStacks(){
   return Object.keys(this.state.stacks).map((stack) => {
   return (
       <div>
           {stack}
       </div>
   )
   })
   }
 }
  render () {
   return (
       <div>
   <div style={{height: 300, width: 60, displaly: 'flex',
   alignItems: 'flex-end'}}
      key={key}

 >


</div>
   )
  }
 }