import React from "react";
import {Col, Container, Row} from "reactstrap";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMapPin} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

export default function FooterJs() {
    return (
        <>
            <Container>
                <Row className="mt-5 footer1 mb-3">
                    <Col md={4} className={'mb-4'}>
                        <div className="">
                            <h3>(78) 777-47-47</h3>
                            <p>Yagona xizmat raqami</p>
                        </div>
                        <div className="mt-4">
                            <FontAwesomeIcon icon={faMapPin}/>
                            <p>Toshkent shahar. Shayxontohur tum., Zarqaynar ko'ch., 3b-uy.</p>
                        </div>
                        <div className="mt-4">
                            <img src="./images/img_10.png" className='sertificateImg mr-3'/>
                            <img src="./images/img_11.png" className='sertificateImg'/>


                        </div>
                    </Col>
                    <Col md={8}>
                        <Container className="d-inline-flex justify-content-between ">
                            <Col md={4}>
                                <div className="">
                                    <h3>Asosiy</h3>
                                    <ul>
                                        <li>
                                            <Link>
                                                Kompaniya haqida
                                            </Link>
                                        </li>
                                        <li>
                                            <Link>
                                                Hamkorlik
                                            </Link>
                                        </li>
                                        <li>
                                            <Link>
                                                Huquqiy hujjatlar
                                            </Link>
                                        </li>
                                        <li>
                                            <Link>
                                                Bog`lanish
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className="">
                                    <h3>Ta`lim</h3>
                                    <ul>
                                        <li>
                                            <Link>
                                                Onside
                                            </Link>
                                        </li>
                                        <li>
                                            <Link>
                                                Online
                                            </Link>
                                        </li>
                                        <li>
                                            <Link>
                                                Imtiyoz
                                            </Link>
                                        </li>
                                        <li>
                                            <Link>
                                                Code skill
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className="">
                                    <h3>Loyihalar</h3>
                                    <ul>
                                        <li>
                                            <Link>
                                                PDP Live
                                            </Link>
                                        </li>
                                        <li>
                                            <Link>
                                                PDP Meetup
                                            </Link>
                                        </li>
                                        <li>
                                            <Link>
                                                PDP Generation
                                            </Link>
                                        </li>
                                        <li>
                                            <Link>
                                                Sertificate
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                        </Container>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <div className="d-flex justify-content-between align-items-center mb-4">
                            <div className="">
                                Inflex, Inc. 2017 – {new Date().getFullYear()}
                            </div>
                            <div className="float-right">
                                Instagram, Facebook, Telegram
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}