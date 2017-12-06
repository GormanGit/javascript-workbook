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
                    <div className="ui center aligned container">
                        <a href={article.url} key={key}>{article.title}</a>
                    </div>
                );
            })
        }else {
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
                {this.renderLinks()}
            </div>
        );


    }
}

export default App;
