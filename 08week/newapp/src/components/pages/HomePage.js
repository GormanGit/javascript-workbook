import React from 'react';
import { Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';

const HomePage = () => (
    <div>
<h1>Home Page</h1>
        <RaisedButton label="Primary" primary={true} />
        <Link to="login">Login</Link>
    </div>
);

export default HomePage;