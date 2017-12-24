import React, {Component} from 'react';
import logo from './jediLogo.png';
import './App.css';
// import './Component/infoButton'
import 'semantic-ui-css/semantic.min.css';
import {Button} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

export class mainApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1,
      characters: []
    }
  }

  handleChange = (event, index, value) => this.setState({value});

  componentDidMount() {
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

  renderCharacters() {
    const {characters} = this.state;
    if (characters.length) {
      return characters.map((obj, key) => {
        return <div key={key}>
          <DropDownMenu menuItemStyle={{color: 'blue'}} menuStyle={{color: 'green'}} labelStyle={{color: 'green'}}                   maxHeight={100} iconStyle='orange' style='orange'
                        value={this.state.value} onChange={this.handleChange}>
            <MenuItem value={1}  primaryText={obj.name}/>
            <MenuItem value={2} listStyle={{color: 'green'}} primaryText={obj.height}/>
            <MenuItem value={3} primaryText={obj.mass}/>
            <MenuItem value={4} primaryText={obj.hair_color}/>
            <MenuItem value={5} primaryText={obj.eye_color}/>
            <MenuItem value={6} primaryText={obj.birth_year}/>
            <MenuItem value={7} primaryText={obj.gender}/>
            <MenuItem value={8} primaryText={obj.homeworld}/>
          </DropDownMenu>
          <br/>
        </div>

      })
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="jediLogo" alt="logo"/>
          {/*<h1 className="App-title">Welcome to React</h1>*/}
          <br/>
        </header>
        <br/>
        {this.renderCharacters()}
      </div>
    );
  }
}

export default mainApp;
