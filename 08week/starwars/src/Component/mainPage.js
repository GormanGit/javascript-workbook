
import React, { Component } from 'react';
import logo from '../jediLogo.png';
import '../App.css';
// import './Component/infoButton'
import 'semantic-ui-css/semantic.min.css';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

// import charInfo from './charInfo';

export class mainApp extends Component {
  constructor(props){
    super(props);
    this.state ={
      characters: []
    }
  }
  componentDidMount(){
    const that = this;
    fetch('https://swapi.co/api/people/')
      .then((response) => response.json())
      .then((responseJson) => {
        that.setState({characters: responseJson.results})
      })
      .catch((error) => {
        console.error(error)
      })
  }
  handleClick(obj, key) {
    // console.log(obj.height);
    this.state.characters.map((obj, key) => {
        // return this.state.obj.height;
    })

  }
  renderCharacters(){
    const {characters} = this.state;
    if(characters.length) {
      return characters.map((obj, key) =>{
        return <div key={key}>
          <Button onClick={this.handleClick()} basic color='orange'>
            <Link onClick={()=>
              this.handleClick()} to="/charInfo"> {obj.name} </Link>
          </Button>
        </div>
      })
    }
  }
  render() {

    // console.log(this.props);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="jediLogo" alt="logo" />
          {/*<h1 className="App-title">Welcome to React</h1>*/}
          <br />
        </header>
        <br />
        {this.renderCharacters()}
      </div>
    );
  }
}


export default mainApp;