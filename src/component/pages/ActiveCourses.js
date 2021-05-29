import React from "react";
import {Button, Col, Container, Row} from "reactstrap";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTimesCircle} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

export default function ActiveCourses(){
    return(
        <div className={'d-flex'}>
            <Container>
                <Row>
                    <Col md={4}>
                        <div className="d-inline-flex justify-content-between" style={{marginTop: '5em'}}>
                            <div className="border-bottom pr-5 mr-4 font-weight-bold">
                                <span>Online</span>
                            </div>
                            <div className="border-bottom pr-5">
                                <span>Onsite</span>
                            </div>
                        </div>
                        <div className="font-weight-bold" style={{marginTop: '10vh'}}>
                            <div className="border-bottom p-lg-2">
                                <span>Offline Kurslar</span>
                            </div>
                            <div className="border-bottom p-lg-2 mt-2">
                                <span>Imtiyoz haqida</span>
                            </div>
                        </div>
                        <div className="" style={{marginTop: '30vh'}}>
                            <Button color={'black'} className='font-weight-bold'>
                                Barcha Kurslar
                            </Button>
                        </div>
                    </Col>
                    <Col md={8}>
                        <Container>
                            <Row>
                                <Col md={4}>
                                    <div className="courses " style={{marginTop: '5em'}}>
                                        <ul className='list-group '>
                                            <li className='list-group font-weight-bold'>
                                                <span>Kurslar</span>
                                            </li>
                                            <li className='list-group'>
                                                <span>ReactJS Development</span>
                                            </li>
                                            <li className='list-group'>
                                                <span>Spring Development</span>
                                            </li>
                                            <li className='list-group'>
                                                <span>Django Development</span>
                                            </li>
                                            <li className='list-group'>
                                                <span>PDP Start</span>
                                            </li>
                                            <li className='list-group'>
                                                <span>Python Development</span>
                                            </li>
                                            <li className='list-group'>
                                                <span>IOS Development</span>
                                            </li>
                                            <li className='list-group'>
                                                <span>Flutter Development</span>
                                            </li>
                                            <li className='list-group'>
                                                <span>Database Development</span>
                                            </li>
                                            <li className='list-group'>
                                                <span>Android Development</span>
                                            </li>
                                            <li className='list-group'>
                                                <span>Frontend Development</span>
                                            </li>
                                            <li className='list-group '>
                                                <span>Java Development</span>
                                            </li>
                                        </ul>
                                    </div>
                                </Col>
                                <Col md={4}>
                                    <div className="courses " style={{marginTop: '5em'}}>
                                        <ul className='list-group list-group-flush'>
                                            <li className='list-group font-weight-bold'>
                                                <span>Mutaxassislik</span>
                                            </li>
                                            <li className='list-group'>
                                                <span>Full Stack Python</span>
                                            </li>
                                            <li className='list-group'>
                                                <span>Python Backend</span>
                                            </li>
                                            <li className='list-group'>
                                                <span>Java Backend</span>
                                            </li>
                                            <li className='list-group'>
                                                <span>IOS</span>
                                            </li>
                                            <li className='list-group'>
                                                <span>Flutter </span>
                                            </li>
                                            <li className='list-group'>
                                                <span>Android</span>
                                            </li>
                                            <li className='list-group '>
                                                <span>Full Stack Java</span>
                                            </li>
                                        </ul>
                                    </div>
                                </Col>
                                <Col md={4}>
                                    <div className="courses " style={{marginTop: '5em'}}>
                                        <ul className='list-group list-group-flush'>
                                            <li className='list-group font-weight-bold'>
                                                <span>Bootcamp</span>
                                            </li>
                                            <li className='list-group'>
                                                <span>Flutter Development</span>
                                            </li>
                                            <li className='list-group'>
                                                <span>Android Development</span>
                                            </li>
                                            <li className='list-group '>
                                                <span>Java Web Development</span>
                                            </li>
                                        </ul>
                                    </div>
                                </Col>

                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
            <div
                className=""
                style={{
                    marginTop: '1em',
                    marginRight: '2em',
                    fontSize: '3vh'
                }}
            >
                <Link to='/'>
                    <FontAwesomeIcon icon={faTimesCircle} style={{color: 'black'}}/>
                </Link>
            </div>
        </div>
    )
}