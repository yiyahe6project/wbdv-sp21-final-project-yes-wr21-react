import React, {useEffect, useState} from 'react'
import {Col, Nav, Row, Tab} from "react-bootstrap";
import productService from "../../../../services/products-service";
import {useHistory, useParams} from "react-router-dom";
import userService from "../../../../services/user-service";
import ShoppingByStore from "./shopping-by-store";

const ShoppingStoreLists = ({handleAddAProductToCart}) => {
    const history = useHistory()
    const {shopBy} = useParams()
    const [key, setKey] = useState("")
    const [allStores, setAllStores] = useState([])
    const [selectedStore, setSelectedStore] = useState('')
    const [selectedStoreName, setSelectedStoreName] = useState('')

    useEffect(() => {
        productService.findAllStores().then((stores) => {
            console.log(stores)
            setAllStores(stores)
        })
    }, [])

    const findStoreName = (sellerId) => {
        const found = allStores.find((seller) => seller._id === sellerId)
        // console.log(found)
        // console.log(found.seller.storeName)
        return found.seller.storeName
    }

    return (
        <>
            <br/>
            <br/>
            <Tab.Container id="left-tabs-example" defaultActiveKey={key}
                           activeKey={key}
                           onSelect={(k) => {
                               setKey(k)
                               setSelectedStore(k)
                               // findStoreName(k)
                               setSelectedStoreName(findStoreName(k))
                           }}>
                <Row>
                    <Col sm={3}>
                        <Nav variant="pills" className="flex-column" onSelect={k => setKey(k)}>
                            {
                                allStores.map((seller) => {
                                    const store = seller.seller
                                    return (
                                        <Nav.Item key={store._id}>
                                            <Nav.Link
                                                eventKey={store._id}>{store.storeName}</Nav.Link>
                                        </Nav.Item>
                                    )
                                })
                            }
                        </Nav>
                    </Col>
                    <Col sm={9}>
                        {
                            selectedStore !== '' &&
                            <ShoppingByStore
                                selectedStoreName={selectedStoreName}
                                handleAddAProductToCart={handleAddAProductToCart}
                                selectedStore={selectedStore}/>
                        }
                    </Col>
                </Row>
            </Tab.Container>
        </>
    )
}

export default ShoppingStoreLists