import React, {useEffect, useState} from 'react'
import orderService from "../../../services/orders-service";
import userService from "../../../services/user-service";
import {useHistory, useParams} from "react-router-dom";
import OrderCell from "./order-cell";
import './orders.css'

const OrdersList = ({}) => {
    const [buyerId, setBuyerId] = useState("")
    const [ordersCache, setOrdersCache] = useState([])
    const history = useHistory()
    const {buyer_id} = useParams();
    const fromAdmin = window.location.href.includes('admin')
    const [buyer, setBuyer] = useState({})

    useEffect(()=> {
        if (fromAdmin) {
            orderService.findOrdersForBuyer(buyer_id)
                .then(orders => {
                    setOrdersCache(orders)
                })
            userService.findUserById(buyer_id)
                .then(buyer => {
                    setBuyer(buyer)
                })
        } else {
            userService.profile()
                .catch(error => {
                    alert("Not logged In!")
                    history.push('/')
                })
                .then(profile => {
                    if (profile) {
                        setBuyerId(profile._id)
                        // console.log(profile)
                        orderService.findOrdersForBuyer(profile._id)
                            .then((orders)=> {
                                console.log(orders)
                                setOrdersCache(orders)
                            })
                    }
                })
        }

    },[])

    return (
        <>
            {!fromAdmin &&
             <div>
                 <h1>My orders</h1>
                 <button
                     className="btn btn-primary mr-2"
                     onClick={() => {
                         history.push('/shopping')
                     }
                     }><i className='mr-1 fa fa-shopping-bag'/>Shopping</button>
                 <button
                     className="btn btn-danger"
                     onClick={() => {
                         userService.logout()
                         history.push('/')
                     }
                     }>Log out</button>
             </div>
            }
            <br/>
            {fromAdmin &&
                <h1>{buyer.username} orders</h1>
            }
            {
                ordersCache.length === 0 &&
                <>
                    <h3>No orders yet.</h3>
                </>
            }
            {
                ordersCache.length !== 0 &&
                <>
                    <div className="mb-3">
                        {
                            ordersCache.map((order, index) =>
                                                <OrderCell
                                                    num={index+1}
                                                    key={order._id}
                                                    order={order}/>
                            )
                        }
                    </div>
                </>
            }
        </>
    )
}

export default OrdersList