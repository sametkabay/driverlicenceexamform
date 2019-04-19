import React from 'react';
import './index.css'
import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button,
} from 'reactstrap';

class Login extends React.Component {
    render() {
        return (
            <Container className="form-container">
                <h2>Giriş Yap</h2>
                <Form className="form">
                    <Col>
                        <FormGroup>
                            <Label for="username">Kullanıcı Adı</Label>
                            <Input
                                style={{ width: '30%' }}
                                name="username"
                                id="username"
                                placeholder="Kullanıcı Adı"
                            />
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label for="password">Password</Label>
                            <Input
                                style={{ width: '30%' }}
                                type="password"
                                name="password"
                                id="password"
                                placeholder="********"
                            />
                        </FormGroup>
                    </Col>
                    <Button>Giriş</Button>
                </Form>
            </Container>
        );
    }
}

export default Login;