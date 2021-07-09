import React from "react";
import {Button, Col, Container, Row} from "reactstrap";
    import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowAltCircleRight, faBars} from "@fortawesome/free-solid-svg-icons";
import {useHistory} from "react-router-dom";

export default function NavbarJs() {
    let history = useHistory();

    function register() {
        history.push("/signIn");
    }

    function Courses() {
        history.push("/activeCourses");
    }

    return (
        <div className='pdp-navbar border position-fixed w-100'>
            <Container>
                <Row className='mt-2 mb-2 align-items-center'>
                    <Col  md={6} className='d-inline-flex justify-content-between align-items-center'>
                        <div className="">
                            <a href="/">
                                <img src="https://pdp.uz/assets/icons/pdpuz-logo.svg"/>
                            </a>
                        </div>
                        <div className="mr-5">
                            <span onClick={Courses}><FontAwesomeIcon icon={faBars}/> Barcha kurslar</span>
                        </div>
                    </Col>
                    <Col md={6} sm={12}>
                        <div className="float-right ">
                            <Button onClick={register} className='bg-light' color='white'><span
                                className="mr-2 ml-2"><FontAwesomeIcon icon={faArrowAltCircleRight}/>  Kirish</span>
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
