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

    };
  }

  handleClick(i){

    const squares = this.state.squares.slice();
    squares[i] = 'X';
    this.setState({squares: squares})
    // this.playerTurn = this.playerTurn === 'X' ? 'O' : 'X'
    // return div[data-cell] = playerTurn
    console.log(this.renderSquare(0));
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
    return (
        <div>
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
