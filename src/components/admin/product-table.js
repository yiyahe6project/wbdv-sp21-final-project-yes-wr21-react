import React, {useState, useEffect} from 'react'
import {Link, useParams, useHistory, Route} from "react-router-dom";
import Table from 'react-bootstrap/Table';
import productService from "../../services/products-service";
// import cocktailService from "../services/cocktail-service"

const ProductTable = () => {
    const products = [{"ingredients" : [ "Baileys irish cream", "Grand Marnier", "Kahlua" ], "idDrink" : "15853", "nameDrink" : "B-52", "category" : "Shot", "alcoholic" : "Alcoholic", "imageURL" : "https://www.thecocktaildb.com/images/media/drink/5a3vg61504372070.jpg" },
    { "ingredients" : [ "Orange Bitters", "Green Chartreuse", "Gin", "Sweet Vermouth" ], "idDrink" : "17254", "nameDrink" : "Aijou", "category" : "Cocktail", "alcoholic" : "Alcoholic", "imageURL" : "https://www.thecocktaildb.com/images/media/drink/rysb3r1513706985.jpg" },
    { "ingredients" : [ "Gin", "Triple sec", "Lemon juice", "Grenadine", "Egg white" ], "idDrink" : "11149", "nameDrink" : "Coxcar", "category" : "Ordinary Drink", "alcoholic" : "Alcoholic", "imageURL" : "https://www.thecocktaildb.com/images/media/drink/pwgtpa1504366376.jpg"}]
    const [sortedProducts, setSortedProducts] = useState(products);
    const sortedField = "nameDrink";

    const sortByName = () => {
        if (sortedField) {
            sortedProducts.sort((a, b) => {
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

    const getAllProducts = () => {
        if (sortedField) {
            productService.findAllProducts().then((products) => setSortedProducts(products))
        }
    }

    useEffect(() => {
        getAllProducts();
        // sortByName();
    })

    return (
        <div>
            <h2>Products</h2>

            <Table className="table">
                <thead>
                <tr>
                    <th className="h3" colSpan="2">Drink</th>
                    <th className="h3 d-none d-sm-table-cell">Quantities</th>
                </tr>
                </thead>
                <tbody>
                    {
                        sortedProducts.map((product, ndx) =>
                            <>
                                <tr>
                                    <td colSpan="2">
                                        <Link to={`/details/${product.idDrink}`}>
                                            {product.nameDrink}
                                        </Link>
                                    </td>
                                    <td>
                                        1
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

export default ProductTable;