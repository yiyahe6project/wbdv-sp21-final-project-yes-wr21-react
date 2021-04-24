import React, {useState, useEffect} from 'react'
import {Link, useParams, useHistory, Route, BrowserRouter} from "react-router-dom";
// import ProductTable from "./product-table";
import ProductTable from "../buyer/shopping/product-table";
import BuyerTable from "./buyer-table";
import SellerTable from "./seller-table";
import { Tab, Row, Col, Nav } from 'react-bootstrap';

const Admin = () => {
    const [key, setKey] = useState("admin")
        return (
            <div>
                <h2>Admin</h2>

                <Tab.Container id="left-tabs-example" defaultActiveKey="admin">
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column" onSelect={k => setKey(k)}>
                                <Nav.Item>
                                    <Nav.Link eventKey="products">Product Table</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="sellers">Seller Table</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="buyers">Buyer Table</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content>

                                <Tab.Pane eventKey="products">

                                        <ProductTable />
                                </Tab.Pane>

                                <Tab.Pane eventKey="sellers">
                                    <SellerTable />
                                </Tab.Pane>
                                <Tab.Pane eventKey="buyers">
                                    <BuyerTable />
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
        </div>

        )

}
// render(<Admin />);

export default Admin;