import React from "react";
import AdminLayout from "../AdminLayout";
import {Col, Container, Row} from "reactstrap";

export default function AdminPage() {

    return (
        <div className='d-inline-flex mt-4'>
                <AdminLayout/>
            <Container>
                <Row>
                    <Col md={12}>
                        <h1>Director Dashboard</h1>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}