'use strict';

class Square extends React.Component{
  render() {
    return (
   <button className="square" onClick={() => this.props.onClick()}>{this.props.value}</button>
    );
  }
}

class TicTacToe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
                     //if in state no need for this.something...Player turn goes in the state because the state is changeing
      // players1: null,
      squares: [
        "", "", "", "", "", "", "", "", ""
      ],
     xNext: true,
    };
  }

  handleClick(i){

    const squares = this.state.squares.slice();
    if(calculateWin(squares) || squares[i]) {
        return;
    }
    squares[i] = this.state.xNext ? 'X' : 'O';
    this.setState({
      squares: squares,
      xNext: !this.state.xNext,
    })
    // this.playerTurn = this.playerTurn === 'X' ? 'O' : 'X'
    // return div[data-cell] = playerTurn
    // console.log(this.renderSquare());
  }
  renderSquare(i) {
    return (
          <Square
              value={this.state.squares[i]}
              onClick={() => this.handleClick(i)}
              />
    );
  }
  render() {
      const winner = calculateWin(this.state.squares);
      let status;
      if(winner) {
          status = 'Winner: ' + winner;
      } else {
          status = 'Next Player: ' + (this.state.xNext ? 'X' : 'O');
      }

    return (
        <div>
            <div className="status">{status}</div>
        <div className="row">
           {/*<div data-cell="0"></div>*/}
            {this.renderSquare(0)}
          {/*<div data-cell="0" onClick={() => this.setState({players1: this.handleClick()})}>*/}
              {/*{this.playerTurn}</div>*/}
          {/*<div data-cell="1"></div>*/}
            {this.renderSquare(1)}
          {/*<div data-cell="2"></div>*/}
            {this.renderSquare(2)}
        </div>
        <div className="row">
          {/*<div data-cell="3"></div>*/}
            {this.renderSquare(3)}
          {/*<div data-cell="4"></div>*/}
            {this.renderSquare(4)}
          {/*<div data-cell="5"></div>*/}
            {this.renderSquare(5)}
        </div>
        <div className="row">
          {/*<div data-cell="6"></div>*/}
            {this.renderSquare(6)}
          {/*<div data-cell="7"></div>*/}
            {this.renderSquare(7)}
          {/*<div data-cell="8"></div>*/}
            {this.renderSquare(8)}
        </div>

      </div>
    );
  }
}

ReactDOM.render(<TicTacToe />, document.getElementById('tic-tac-toe'));

function calculateWin(squares){
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2],
    ];
  for(let i = 0; i <lines.length; i ++) {
     const [a, b, c] = lines[i];
     if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
         return squares[a];
     }
 }
  return null;
}