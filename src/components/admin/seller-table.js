import React, {useState, useEffect} from 'react'
import {Link, useParams, useHistory, Route} from "react-router-dom";
import Table from "react-bootstrap/Table";

const SellerTable = () => {
    return (
        <div>
            <h2>Sellers</h2>
            <Table className="table">
                <thead>
                <tr>
                    <th className="h3" colSpan="2">List of Sellers</th>
                    <th className="sort-icon">
                        <i className="fas fa-sort-alpha-up fa-2x pr-3"></i>
                    </th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <tr>
                        <td colSpan="2">
                            <Link to="">
                                sellerA
                            </Link>
                        </td>
                    </tr>
                </tr>
                </tbody>
            </Table>
        </div>
    )

}

export default SellerTable;