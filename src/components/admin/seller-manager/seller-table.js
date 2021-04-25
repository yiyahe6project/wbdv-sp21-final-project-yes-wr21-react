import React, {useState, useEffect} from 'react'
import {Link, useParams, useHistory, Route} from "react-router-dom";
import Table from "react-bootstrap/Table";
import userService from "../../../services/user-service";
import Button from '@material-ui/core/Button';


const SellerTable = () => {
    const [listOfSellers, setListOfSellers] = useState([])
    const [isAdmin, setIsAdmin] = useState(false)
    const {adminId} = useParams()
    const [authority, setAuthority] = useState("write") // assume all admin can write
    useEffect(() => {
        if (adminId) {
            setIsAdmin(true)
        }
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
                                {isAdmin &&
                                    <Link to={`/profile/authority/${authority}/${seller._id}`}>
                                        <h5>{seller.username}</h5>
                                    </Link>
                                }
                                {!isAdmin &&
                                    <Link to={`/profile/${seller._id}`}>
                                        <h5>{seller.username}</h5>
                                    </Link>
                                }
                            </td>
                            {isAdmin &&
                                <td>
                                    <Button className="store-button"
                                            variant="contained"
                                            color="primary"
                                            component={Link} to={`/admin/store/${seller._id}`}>
                                        Go to store
                                    </Button>
                                </td>
                            }
                        </tr>

                        )
                    }


                </tbody>
            </Table>
        </div>
    )

}

export default SellerTable;