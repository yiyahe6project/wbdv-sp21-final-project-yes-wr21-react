import React, {useState, useEffect} from 'react'
import {Link, useParams, useHistory, Route} from "react-router-dom";
import Table from 'react-bootstrap/Table';

const ProductTable = () => {
    return (
        <div>
            <h2>Products</h2>

            <Table className="table">
                <thead>
                <tr>
                    <th className="h3" colSpan="2">Drink</th>
                    <th className="h3 d-none d-sm-table-cell">Quantities</th>
                    <th className="sort-icon">
                        <i className="fas fa-sort-alpha-up fa-2x pr-3"></i>
                    </th>
                </tr>
                </thead>
                <tbody>
                    <tr>
                        <td colSpan="2">
                            <Link to="">
                                drinkA
                            </Link>
                        </td>
                        <td>  15  </td>
                    </tr>
                </tbody>
            </Table>
        </div>

    )

}

export default ProductTable;