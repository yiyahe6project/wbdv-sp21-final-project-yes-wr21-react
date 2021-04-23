import React, {useEffect, useState} from 'react'
import {Col, Nav, Row, Tab} from "react-bootstrap";
import ProductTable from "../../../admin/product-table";
import SellerTable from "../../../admin/seller-table";
import BuyerTable from "../../../admin/buyer-table";
import productService from "../../../../services/products-service";

const ShoppingStoreLists = ({}) => {
    const [key, setKey] = useState("")
    const [allStores, setAllStores] = useState([])
    useEffect(()=> {
        productService.findAllStores()
            .then((stores) => setAllStores(stores))
    })
    return (
        <>
            <br/>
            <br/>
            <Tab.Container id="left-tabs-example" defaultActiveKey="admin">
                <Row>
                    <Col sm={3}>
                        <Nav variant="pills" className="flex-column" onSelect={k => setKey(k)}>
                        {
                            allStores.map((store) => {
                                console.log(store)
                                return (
                                    <Nav.Item>
                                        <Nav.Link eventKey="products">Product Table</Nav.Link>
                                    </Nav.Item>
                                )
                            })
                        }


                        {/*    <Nav.Item>*/}
                        {/*        <Nav.Link eventKey="sellers">Seller Table</Nav.Link>*/}
                        {/*    </Nav.Item>*/}
                        {/*    <Nav.Item>*/}
                        {/*        <Nav.Link eventKey="buyers">Buyer Table</Nav.Link>*/}
                        {/*    </Nav.Item>*/}
                        </Nav>
                    </Col>
                    <Col sm={9}>
                        {/*<Tab.Content>*/}
                        {/*    <Tab.Pane eventKey="products">*/}
                        {/*        <ProductTable />*/}
                        {/*    </Tab.Pane>*/}

                        {/*    <Tab.Pane eventKey="sellers">*/}
                        {/*        <SellerTable />*/}
                        {/*    </Tab.Pane>*/}
                        {/*    <Tab.Pane eventKey="buyers">*/}
                        {/*        <BuyerTable />*/}
                        {/*    </Tab.Pane>*/}
                        {/*</Tab.Content>*/}
                    </Col>
                </Row>
            </Tab.Container>
        </>
    )
}

export default ShoppingStoreLists