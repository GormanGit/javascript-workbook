//
// https://blog.hellojs.org/fetching-api-data-with-react-js-460fe8bbf8f2
import React, {Component} from 'react';
// import 'semantic-ui-css/semantic.min.css';



// import './App.css';
//
// class Background extends Component {
//     constructor() {
//         super();
//         //set initail state...
//         this.state = {
//             pictures: [],
//         };
//     }
//
// // lifecycle method:....
//
//     componentDidMount() {
//         //this is the fetch + api call
//         const newLinks = []
//       fetch('https://randomuser.me/api')
//           .then(res => res.json())
//           .then(json => {this.setState({pictures: json.results})
//               }
//
//
//
//     renderFaces() {
//         const { pictures } = this.state;
//         if(pictures.length) {
//             console.log('what')
//         return pictures.map(() => {
//             return (
//                 <div>
//                     {/*<div class="ui segment" key={pic.results}>*/}
//                     {/*<img class="ui image" src={pic.picture.large}/>*/}
//                     {/*</div>*/}
//
//                     <div className="App-logo">
//                         <div className="Pics">
//                             {/*<div className="App-logo">*/}
//                             {this.renderFaces}
//                             {/*</div>*/}
//                         </div>
//                     </div>
//                 </div>
//             );
//             });
//         }else {
//             return <div>Loading...</div>
//         }
//     }
//     //render the data
//     render() {
//         return (
//             <div>{this.renderFaces}</div>
//         )
//
//     }
// }
//
// export default Background;
class App extends Component {
  constructor() {
      super();
      this.state = {
          pictures: [],
      };
  }

componentDidMount(){
      const that = this;
       fetch('https://randomuser.me/api/?results=8')
           .then((response) => response.json())
           .then((responseJson) => {
           that.setState({pictures: responseJson.results})
           this.setState({randomPics: responseJson.results})
               console.log("state", this.state.pictures)
       })
  }

renderPictures(){
    const { pictures } = this.state;
    if(pictures.length){
        return pictures.reverse().map((obj, key) =>{
            return <img key={key} src={obj.picture.large} />

        })
    }console.log("this state");

    }




render() {
    return (
        <div className="App">
            {this.renderPictures()}
            {this.renderPictures()}

            </div>
        );
    }
}


export default App;