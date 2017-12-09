//
// https://blog.hellojs.org/fetching-api-data-with-react-js-460fe8bbf8f2
import React, {Component} from 'react';
import 'semantic-ui-css/semantic.min.css';

class App extends Component {
  constructor() {
      super();
      this.state = {
          pictures: [],
      };
  }

componentDidMount(){
      const that = this;
  fetch('https://randomuser.me/api/?results=16')
      .then((response) => response.json())
      .then((responseJson) => {
      that.setState({pictures: responseJson.results})
      console.log("state", this.state.pictures)
    })
}

renderPictures(){
    const { pictures } = this.state;
      if(pictures.length){
        return pictures.map((obj, key) =>{
            return <img src={obj.picture.large} />
            })
        }
    }
    render() {
        return (
            <div className="App">
                {this.renderPictures()}
            </div>
        );
    }
}

export default App;