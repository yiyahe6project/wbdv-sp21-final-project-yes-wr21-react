import React, {useState} from 'react'

const ProductList = ({productList}) => {

    // const [quantity, setQuantity] = useState(0)

    return (
        <>
            <br/>
            <div>
                <ul className="list-group">
                    {
                        productList.map((product) => {
                            const drink = product.drink
                            return (

                                <li key={drink._id}
                                    className="list-group-item">
                                    <div className="row">
                                        <h4>Product Name: </h4>
                                        <h4 className="ml-3">{drink.nameDrink}</h4>
                                    </div>
                                    <div className="row">
                                        <div className="col-6">
                                            <img width={180}
                                                 height={200}
                                                 src={drink.imageURL}
                                                 alt={drink.nameDrink}/>
                                        </div>
                                        <div className='col-2'>
                                            Quantity: {product.quantity}
                                        </div>
                                        <div className='col-2'>
                                            Price: {product.price}
                                        </div>
                                        <div className="col-2">
                                            <label for="quantity"> Quantity to buy: </label>
                                            <input type="number"
                                                   id="quantity"
                                                   min='0'
                                                   max={product.quantity}
                                                   className='form-control'
                                                   name="quantity"/>
                                            <button>
                                                Purchase
                                            </button>
                                        </div>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </>
    )
}

export default ProductList

