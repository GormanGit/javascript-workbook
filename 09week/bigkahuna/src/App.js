import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
// import logo from './logo.svg';


import './App.css';

class Background extends Component {
    constructor() {
        super();
        //set initail state...
        this.state = {
            pictures: [],
        };
    }
// lifecycle method:....

    componentDidMount(){
        //this is the fetch + api call
        fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=T5GsJbuK40VNAEkjzclnQwlLB7s4zx3CSpyFqK5w')
            .then(photos => {
                return photos.json();
            }).then(data => {
            let img_src = data.photos.map((pic) => {
                return(
                    <div>
                        <div class="ui card" key={pic.photos}>
                            <img class="ui small image" src={pic.photos.img_src} />
                            <div class="content">
                                <div class="header">Matthew</div>
                                <div class="meta">
                                    <span class="date">Joined in 2015</span>
                                </div>
                                <div class="description">Matthew is a musician living in Nashville.</div>
                            </div>
                            <div class="extra content">
                                <a>
                                    <i aria-hidden="true" class="user icon"></i>22 Friends</a>
                            </div>
                        </div>
                    </div>


                )
            })
            this.setState({img_src: img_src});
            console.log("state", this.state.img_src);
        })
    }
    //render the data
    render() {
        return (


            <div className="App-logo" >
                <div className="Pics" >
                    {/*<div className="App-logo">*/}
                    {this.state.img_src}
                    {/*</div>*/}
                </div>
            </div>

        );
    }
}

export default Background;
