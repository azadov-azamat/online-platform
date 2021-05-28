import React from "react";
import AdminLayout from "../AdminLayout";
import {Col, Container, Row} from "reactstrap";

export default function AdminPage() {

    return (
        <div className='d-inline-flex mt-4'>
            <Container >
                <AdminLayout/>
            </Container>
            <Container>
                <Row>
                    <Col md={12} sm={12} className='border'
                    >
                        <div className="float-right"  >
                         <span className={''}>
                             Odilbek Mirzayev
                         </span>
                        </div>
                        <div className="">
                            <span>Direktor Dashboard</span>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}