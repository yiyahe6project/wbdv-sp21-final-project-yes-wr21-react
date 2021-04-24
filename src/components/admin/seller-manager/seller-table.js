import React, {useState, useEffect} from 'react'
import {Link, useParams, useHistory, Route} from "react-router-dom";
import Table from "react-bootstrap/Table";
import userService from "../../../services/user-service";
import ProductItem from "../products-manager/product-item";
import Button from '@material-ui/core/Button';


const SellerTable = () => {
    const [listOfSellers, setListOfSellers] = useState([])
    const {adminId} = useParams()
    const [authority, setAuthority] = useState("write") // assume all admin can write
    useEffect(() => {
        userService.findUsersByRole("Seller")
            .then(sellers => {
                setListOfSellers(sellers)
            })

    }, [])


    return (
        <div>
            <h2>Sellers </h2>
            <Table className="table">
                <thead>
                </thead>
                <tbody>
                {
                    listOfSellers.map(seller =>
                        <tr>
                            <td>
                                <Link to={`/profile/authority/${authority}/${seller._id}`}>
                                   <h5>{seller.username}</h5>
                                </Link>
                            </td>
                            <td>
                                <Button className="store-button"
                                        variant="contained"
                                        color="primary"
                                        component={Link} to={`/admin/store/${seller._id}`}>
                                    Go to store
                                </Button>
                            </td>
                        </tr>
                    )

                }

                </tbody>
            </Table>
        </div>
    )

}

export default SellerTable;