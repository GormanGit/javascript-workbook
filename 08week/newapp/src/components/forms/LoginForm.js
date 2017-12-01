import React from 'react';
import { Link } from 'react-router-dom';
import { Form } from 'semantic-ui-react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';


class LoginForm extends React.Component {
    state = {
        data: {
          email: '',
          password: ''
    },
        loading: false,
        errors: {}
    };
    //onChange event that is universal for string data
    //in state change data, use spread to save everything that is in data, then what is changed
    //which is an e.target
    onChange = e => this.setState({
        data: {...this.state.data, [e.target.name]: e.target.value}
    });

   onSubmit = () => {

   }

    render() {
        //destructure
        const { data } = this.state;
        return (
            <Form onSubmit={this.onSubmit}>
                <TextField
                    hintText="email"
                    value={data.email}
                    onChange={this.onChange}
                /><br />
                <TextField
                    hintText="password"
                    value={data.password}
                    onChange={this.onChange}
                /><br />

             <RaisedButton primary={true}>
             <Link to='main'>LOGIN</Link>
             </RaisedButton>

                <br />

            </Form>
        );
    }
}

export default LoginForm;