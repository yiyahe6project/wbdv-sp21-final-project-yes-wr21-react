import React, {useEffect, useState} from 'react'
import orderService from "../../../services/orders-service";
import userService from "../../../services/user-service";
import {useHistory} from "react-router-dom";
import OrderCell from "./order-cell";
import './orders.css'

const OrdersList = ({}) => {
    const [buyerId, setBuyerId] = useState("")
    const [ordersCache, setOrdersCache] = useState([])
    const history = useHistory()

    useEffect(()=> {
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
    },[])

    return (
        <>
            <h1>My orders</h1>
            {
                ordersCache.length === 0 &&
                <>
                    <h3>No orders yet.</h3>
                    <button onClick={()=>history.push('/shopping')}>Go make orders</button>
                </>
            }
            {
                ordersCache.length !== 0 &&
                <>
                    {
                        ordersCache.map((order, index) =>
                                            <OrderCell
                                                num={index+1}
                                                key={order._id}
                                                order={order}/>
                        )
                    }
                </>
            }
        </>
    )
}

export default OrdersList