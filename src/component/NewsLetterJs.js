import React from "react";
import {Button, Col, Container, Row} from "reactstrap";

export default function NewsLetterJs() {
    return (
        <>
            <Container>
                <Row className='mt-5 mb-5'>
                    <Col md={6} className='border-right'>
                        <div className="d-inline-flex justify-content-between">
                            <h2>Yangiliklar</h2>
                            <Button className='bg-light ml-5' color='white'>Barcha yangiliklar</Button>
                        </div>
                        <div className="mt-5 aboutNews">
                            <div className="">
                                <p>Bugun, 11:40</p>
                            </div>
                            <div className="">
                                <h5 >Invest in Uzbekistan loyihasi xorijiy investorlar bilan hamkorlik qilishga
                                    tayyor</h5>
                                <p>Savdo-sanoati palatasi investitsiya muhitini yaxshilash hamda horijiy sarmoyalarni
                                    jalb qilish maqsadida loyihaning afvzalliklar haqida ma`lumot berdi</p>
                            </div>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="aboutNews news2">
                            <div className="">
                                <p>25-yanvar, 10:00</p>
                            </div>
                            <div className="">
                                <h5 >Aksiz soliq stavkalarining o’zgarishi sababli neft mahsulotlarining narxlari oshadi</h5>
                                <p>Savdo-sanoati palatasi investitsiya muhitini yaxshilash hamda horijiy sarmoyalarni
                                    jalb qilish maqsadida loyihaning afvzalliklar haqida ma`lumot berdi</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}