import React, {useState, useEffect} from 'react'
import {Link, useParams, useHistory, Route} from "react-router-dom";
import Table from "react-bootstrap/Table";
import userService from "../../../services/user-service";

const BuyerTable = () => {
    const [listOfBuyers, setListOfBuyers] = useState([])

    useEffect(() => {
        userService.findUsersByRole("Buyer")
            .then(buyers => {
                setListOfBuyers(buyers)
            })
    }, [])

    return (
        <div>
            <h2>Buyers</h2>
            <Table className="table">
                <thead>
                </thead>
                <tbody>
                {
                    listOfBuyers.map(buyer =>
                    <tr>
                        <td>
                            <Link to={`/profile/${buyer._id}`}>
                                <h5>{buyer.username}</h5>
                            </Link>
                        </td>
                        <td>
                            <Link to={`/admin/buyers/${buyer._id}/orders`}>
                                <h5>Orders</h5>
                            </Link>
                        </td>
                    </tr>
                    )
                }
                </tbody>
            </Table>
        </div>
    )

}

export default BuyerTable;