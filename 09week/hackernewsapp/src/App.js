import React, { Component } from 'react';
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
        for(let i=0; i<20; i++){
    fetch(`https://hacker-news.firebaseio.com/v0/item/${stories[i]}.json?print=pretty`)
    .then(res => res.json())
    .then(article => newLinks.push(article))
    .then(()=> this.setState({links: newLinks}))
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
        const { links } = this.state;
        if (links.length) {
            console.log('what')
            return links.map((article, key) => {
                return (
                    <div>
                    <div class="ui left align container" >
                        <div class ="ui yellow segment">
                        <a  href={article.url} key={key}>{article.title} </a>
                        </div>
                    </div>
                    </div>

                );
            })
        } else {
            return <div>Loading...</div>
        }
    }
    // renderLink(){
    //     return this.state.story.map((story, key) => {
    //         return <li key={key}>{story.title}</li>
    //     })
    // }
    render() {
        return (
            <div>
                {/*<div>*/}
            {/*<h1 className="">*/}

                {/*<img class="ui fluid image" src="https://s3.amazonaws.com/GoRoost-Heroku/wp-content/uploads/2014/08/hacker-news.jpg" />*/}
            {/*</h1>*/}
                <img class="ui medium image centered" src="https://s3.amazonaws.com/GoRoost-Heroku/wp-content/uploads/2014/08/hacker-news.jpg" />
                <div class="ui hidden divider">
                </div>



            <div>
                {this.renderLinks()}
            </div>
            </div>
        );


    }
}

export default App;
