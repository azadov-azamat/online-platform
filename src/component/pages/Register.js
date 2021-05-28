import React from "react";
import NavbarJs from "../NavbarJs";
import {Col, Container, Row} from "reactstrap";
// import uz from 'react-phone-number-input/locale/'
import {AvField, AvForm} from 'availity-reactstrap-validation';
import {useHistory} from "react-router-dom";

export default function Register() {

    // const [value, setValue] = useState()

    const history = useHistory();

    function loginPage() {
        history.push('/signIn');
    }

    return (
        <div className='signIn'>
            <NavbarJs/>
            <Container>
                <Row>
                    <Col
                        md={12}
                        className='d-flex '
                        style={{marginTop: '6em'}}
                    >
                        <Row className='align-items-center signUp ' style={{width: '37em'}}>
                            <Col md={6}>
                                <div style={{width: '18em'}} className="text-center ">
                                    <h2>Welcome to PDP IT Academy</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad amet
                                        architecto consequuntur </p>
                                    <button id='btn' className='btn btn-outline-info' onClick={loginPage}>SignIn
                                    </button>
                                </div>
                            </Col>

                            <Col md={6}>
                                <div style={{width: '18em'}}
                                     className='text-center mb-3 mt-2 d-flex justify-content-center align-content-center'>
                                    <AvForm>
                                        <AvField
                                            label='Your name'
                                            name='firstName'
                                            placeholder='Ex: Davronjon'

                                        />
                                        <AvField
                                            label='Your phone number'
                                            name='phoneNumber'
                                            placeholder='Ex: +998 99 680 22 08'

                                        />
                                        <AvField
                                            label='Your password'
                                            name='password'
                                            placeholder='Ex: root123'

                                        />
                                        <button type='submit' id='btn '
                                                className='btn btn-outline-success'>Registration
                                        </button>
                                    </AvForm>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
            {/*<Container>*/}
            {/*    <Row>*/}
            {/*        <Col md={6}>*/}
            {/*            <div className="">*/}
            {/*                    <PhoneInput*/}
            {/*                        international*/}
            {/*                        countrySelectProps={{ unicodeFlags: true }}*/}
            {/*                        value={value}*/}
            {/*                        onChange={setValue}*/}
            {/*                        minlength="9"*/}
            {/*                        maxlength="17"*/}
            {/*                        required*/}

            {/*                        />*/}
            {/*                <FontAwesomeIcon icon={faEye}/>*/}
            {/*            </div>*/}
            {/*        </Col>*/}
            {/*    </Row>*/}
            {/*</Container>*/}
        </div>
    )
}