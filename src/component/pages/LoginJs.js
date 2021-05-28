import React, {useState} from "react";
import NavbarJs from "../NavbarJs";
import {Col, Container, Row} from "reactstrap";
// import uz from 'react-phone-number-input/locale/'
import {AvField, AvForm} from 'availity-reactstrap-validation';
import {useHistory} from "react-router-dom";

export default function LoginJs() {

    const [value, setValue] = useState()

    const history = useHistory();

    function registerPage() {
        history.push('/signUp');
    }

    function login() {
        history.push('/adminPage');
    }

    return (
        <div className='signIn'>
            <NavbarJs/>
            <Container>
                <Row>
                    <Col md={12}
                         className='d-flex'
                         style={{marginTop: '6em'}}
                    >
                        <Row className='align-items-center signUp ' style={{width: '37em'}}>
                            <Col md={6}>
                                <div style={{width: '18em'}}
                                     className='text-center mb-5 mt-5 d-flex justify-content-center align-content-center'>
                                    <AvForm>
                                        <AvField
                                            label='Your phone number'
                                            name='phoneNumber'
                                            placeholder='Ex: +998 99 680 22 08'
                                            value={value}
                                            minlength="9"
                                            maxlength="17"
                                            required
                                        />
                                        <AvField
                                            type={'password'}
                                            label='Your password'
                                            name='password'
                                            placeholder='Ex: root123'

                                        />
                                        <button type='submit' id='btn ' onClick={login} className='btn btn-outline-info mt-3'>Sign In
                                        </button>
                                    </AvForm>
                                </div>
                            </Col>

                            <Col md={6}>
                                <div style={{width: '17em'}} className="text-center">
                                    <h1>Welcome to your Account</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad amet
                                        architecto consequuntur </p>
                                    <button id='btn' className='btn btn-outline-success' onClick={registerPage}>Sign
                                        Up
                                    </button>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}