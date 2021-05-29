import React from "react";
import MentorLayout from "../MentorLayout";
import {Col, Container, Row} from "reactstrap";

export default function MentorPage(){
    return(
        <>
            <div className="d-inline-flex mt-4">
                <MentorLayout/>
                <Container>
                    <Row>
                        <Col md={12}>
                            <h1>Mentor Dashboard</h1>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}