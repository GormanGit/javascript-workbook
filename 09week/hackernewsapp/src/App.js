import React, {
  Component
} from 'react';
import 'semantic-ui-css/semantic.min.css';


import './App.css';


class App extends Component {
  state = {
    links: []
  }

  componentDidMount() {
    console.log('mounted');
    // const that = this;
    //        fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
    // // .then is whats next waiting for responce object with json in it*
    //            .then((response) => response.json())
    // // argument name*
    //             .then((responseJson) => {
    //            that.setState({characters: responseJson.results})
    //        })
    //            .catch((error) => {
    //            console.error(error);
    //            })
    //
    const newLinks = []
    fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
      .then(res => res.json())
      .then(stories => {
        for (let i = 0; i < 20; i++) {
          fetch(`https://hacker-news.firebaseio.com/v0/item/${stories[i]}.json?print=pretty`)
            .then(res => res.json())
            .then(article => newLinks.push(article))
            .then(() => this.setState({
              links: newLinks
            }))
        }
        // stories.forEach(story => {
        //     //could use the loop here.
        //
        //         .catch(err => console.log(err))
      })

      .catch(err => console.log(err))
    console.log(newLinks)
  }
  renderLinks() {
    const {
      links
    } = this.state;
    if (links.length) {
      console.log('what')
      return links.map((article, key) => {
        return ( <
          div >
          <
          div class = "ui left align container" >
          <
          div class = "ui yellow segment" >
          <
          a href = {
            article.url
          }
          key = {
            key
          } > {
            article.title
          } < /a> <
          /div> <
          /div> <
          /div>

        );
      })
    } else {
      return <div > Loading... < /div>
    }
  }
  // renderLink(){
  //     return this.state.story.map((story, key) => {
  //         return <li key={key}>{story.title}</li>
  //     })
  // }
  render() {
    // const imgStyle = {
    //   backgroundImage: "src("
    //   data: image / png;base64,
    //   iVBORw0KGgoAAAANSUhEUgAAAWAAAACPCAMAAADz2vGdAAAAeFBMVEX / ZgD /YgD/XAD/XwD/kFb/8+r/zrb/+fP/xav/kl7/fjj/9O7/WgD/agD/0L3/2c3/4tT/28v/yrH/spX/v6j/vZ//uZj/jVz/6dv/1sP/mmr/nXD/upb/rIz/TwD/eCn/pHj/qX//rob/j1T/gj7/iFL/u6OX8hgcAAACTklEQVR4nO3cXW+bMBSAYWK8BrY53dolLh9dmq7r/v8/nG1YQ9jN8ZGsKNL7XJ0QLtAbZCERqCoAAAAAAAAAAAAAAAAAAAAAAAAAAIAbYvSufei34e2T1m8KC5hmo3VfX/vgb4G5UwfeEliAwIWlwF+zNQQWSoHfnM3jWgILpcCfc68HagJLEbgwAhdG4MIIXBiBC1sGts45O28O49SvPm+0540ElloEtoeu655TTPMaxhSwbsN0SCntrzC26XsCiy0C1/dhfJxa/gjjdxcm9xCmZv4BwvjNpV0JLCUKPO1AYA1Z4G0cCawhC7whsJYw8GAIrCMMHO9eEFhDGHjDGawkDRzWCAJrSAP3jsAq0sDNjsAq0sCb0RBYQxy4dwTW+C+wi3+KcpeBu1h4VxNYYR24f38K3tuLwPt4l350BFZYB144B/4Tv3k4ElhBFniIn1mDNUSB9y5dR3gC55MFPvZxeSawwjpwe3TB8efqDB5j8WcC5xNdB+9rEwPfETifLLB1/bxuEDiTMLAZCawjDFxVBNaRBv63RhA4kzSwGQisIl4idg2BNcSB5zWCwJnEgec1gsCZxIErQ2ANeeC6J7BCxhk8EFhhGbj/qJYCd5eBK0dghUVgM3rvh2l8Onj/ms7bk/eH+Q/aYfSn6bcgsNTyEQJjrZ2f1oijXW+0HyOBxXgIpjACF0bgwghcGIELmwLbzPdN8b4IsRT49CXTy5bAQryzpzACF0bgwkzXaD0SWGKnd+1DBwAAAAAAAAAAAAAAAAAAAAAAAAAAyPAXhtU6PxuBCbsAAAAASUVORK5CYII=")""
    //
    // };
    return (
      // < div >
      // < div style = {
      //   imgStyle
      // } >
      // < /div>




      < div > {
        this.renderLinks()
      } < /div>
      //  < /div>
    );


  }
}

export default App;
