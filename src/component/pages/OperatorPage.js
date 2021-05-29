import React from "react";
import OperatorLayout from "../OperatorLayout";
import {Col, Container, Row} from "reactstrap";

export default function OperatorPage(){
    return(
        <>
            <div className="d-inline-flex mt-4">
                <OperatorLayout/>
                <Container>
                    <Row>
                        <Col md={12}>
                            <h1>Operator Dashboard</h1>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}