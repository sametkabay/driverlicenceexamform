import React from 'react';
import './index.css';
import AuthenticationStore from '../../store/authenticationStore'
import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button,
} from 'reactstrap';
import LoginModel from '../../model/loginModel';

class Login extends React.Component {

    login = (username: string, password: string) => {
        AuthenticationStore.login({ username, password } as LoginModel)
    }

    render() {
        return (
            'Login Formu'
        );
    }
}

export default Login;