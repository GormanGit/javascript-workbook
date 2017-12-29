import React, {Component} from 'react';
import 'semantic-ui-css/semantic.min.css';

import './App.css';
class App extends Component {
  state = {
    links: []
  }
  componentDidMount() {
    console.log('mounted');
    const newLinks = []
    fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
      .then(res => res.json())
      .then(stories => {
        for (let i = 0; i < 20; i++) {
          fetch(`https://hacker-news.firebaseio.com/v0/item/${stories[i]}.json?print=pretty`)
            .then(res => res.json())
            .then(article => newLinks.push(article))
            .then(() => this.setState({links: newLinks}))
        }
      })
      .catch(err => console.log(err))
    console.log(newLinks)
  }
  renderLinks() {
    const {links} = this.state;
    if (links.length) {
      console.log('what')
      return links.map((article, key) => {
        return (
          <div>
            <div class="ui left align container">
              <div class="ui yellow segment">
                <a href={article.url} key={key}>{article.title} </a>
              </div>
            </div>
          </div>
        );
      })
    } else {
      return <div>Loading...</div>
    }
  }
  render() {
    return (
      <div>
        <div className="head ui container">
        </div>

        <div>
          {this.renderLinks()}
        </div>
      </div>
    );
  }
}
export default App;
