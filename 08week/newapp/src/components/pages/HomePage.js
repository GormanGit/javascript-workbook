import React from 'react';
import {Link} from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';


const HomePage = () => (
    <div>
      <h1>Home Page</h1>
      <RaisedButton primary={true}>
        <Link to='login'>LOGIN PAGE</Link>

      </RaisedButton>
      {/*<Link to='main'>LOGIN PAGE</Link>*/}
    </div>
);

export default HomePage;