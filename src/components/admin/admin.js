import React, {useState, useEffect} from 'react'
import {Link, useParams, useHistory, Route, BrowserRouter} from "react-router-dom";
import ProductsInstock from "./products-manager/products-instock";
import BuyerTable from "./buyer-manager/buyer-table";
import SellerTable from "./seller-manager/seller-table";
import { Tab, Row, Col, Nav } from 'react-bootstrap';
import userService from "../../services/user-service";

const Admin = () => {
    // const {adminId} = useParams()
    const [key, setKey] = useState("products")
    const history = useHistory()
    // useEffect(() => {
    //     userService.profile()
    //         .catch(error => {
    //             alert("Not logged in as a Admin!")
    //             history.push('/')
    //         })
    //     }, []
    // )
        return (
            <div>
                <h2>Admin</h2>

                <Tab.Container id="left-tabs-example" defaultActiveKey="products">
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column"
                                 onSelect={k => {
                                     setKey(k)
                                     history.push(`/admin/${k}`)

                                     // history.push(`/admin/${adminId}/${k}`)
                            }}>
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

                                        <ProductsInstock />
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