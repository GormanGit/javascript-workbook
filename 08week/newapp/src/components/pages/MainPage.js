// import React from 'react';
//
// const MainPage = () => (
//     <div>
//         <h1>Main page</h1>
//
//
//
//
//     </div>
// );
//
// export default MainPage;
import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

class MainPage extends Component {
    state = {
        characters: null
    }
    componentDidMount(){
        const that = this;
        fetch('https://swapi.co/api/people/')
            .then((response) => response.json())
            .then((responseJson) => {
                that.setState({characters: responseJson.results})
            })
            .catch((error) => {
                console.error(error);
            });
    }
    renderCharacters(){
        const { characters } = this.state;
        if(characters && characters.length > 0){
            return characters.map((obj, key) =>{
                return <p key={key}>{obj.name}</p>
            })
        }
    }
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    {/*<img src={logo} className="App-logo" alt="logo" />*/}
                    <h1 className="App-title">Star Wars</h1>
                </header>
                {this.renderCharacters()}
            </div>
        );
    }
}

export default MainPage;