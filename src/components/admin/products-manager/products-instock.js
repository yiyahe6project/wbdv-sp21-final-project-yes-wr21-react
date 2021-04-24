import React, {useState, useEffect} from 'react'
import {Link, useParams, useHistory, Route} from "react-router-dom";
import Table from 'react-bootstrap/Table';
import productsService from "../../../services/products-service"

const ProductsInstock = () => {

    const [listOfProducts, setListOfProducts] = React.useState([]);
    const col1 = "drinkName"
    const col2 = "totalQuantity"

    useEffect(() => {
        productsService.findAllProducts()
            .then(products => {
                const groups = groupByDrinkName(products)
                const list = getTotalQuantitiesByDrink(groups)
                sortByField(list, col1)
                setListOfProducts(list)
            })
    }, [])

    // group products by drink name
    const groupByDrinkName = (products) => {
        const groups = products.reduce((groups, item) => {
            const group = (groups[item.drink.nameDrink] || []);
            group.push(item);
            groups[item.drink.nameDrink] = group;
            return groups;
        }, {});
        return groups;
    }
    // get total quantities of each drink
    const getTotalQuantitiesByDrink = (groups) => {
        let list = []
        for (const drink in groups) {
            let obj = {}
            let total = 0
            groups[drink].forEach(product => total += parseInt(product.quantity))
            obj[col1] = drink
            obj[col2] = total
            list.push(obj)
        }
        return list;
    }

    // sort products by drink name
    const sortByField = (products, sortedField) => {
        if (sortedField) {
            products.sort((a, b) => {
                if (a[sortedField] < b[sortedField]) {
                    return -1;
                }
                if (a[sortedField] > b[sortedField]) {
                    return 1;
                }
                return 0;
            });
        }
    }

    return (
        <div>
            <h2>Products</h2>
            <Table className="products-table">
                <thead>
                <tr>
                    <th className="h3" colSpan="2">Drink</th>
                    <th className="h3 d-none d-sm-table-cell">Quantities</th>
                </tr>
                </thead>
                <tbody>
                    {
                        listOfProducts.map((product, ndx) =>

                            <>
                                <tr>
                                    <td colSpan="2">
                                        <Link to={`/admin/products/${product.drinkName}/details`}>
                                            {product.drinkName}
                                        </Link>
                                    </td>
                                    <td>
                                        {product.totalQuantity}
                                    </td>
                                </tr>
                            </>
                        )

                    }

                </tbody>
            </Table>
        </div>

    )

}

export default ProductsInstock;