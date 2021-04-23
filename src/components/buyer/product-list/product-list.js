import React, {useState} from 'react'


const ProductList = ({productList, quantities}) => {

    const [clicked, setClick] = useState(false)
    const [quantity, setQuantity] = useState(0)
    return (
        <>
            <br/>
            <div>
                <ul className="list-group">
                    {
                        productList.map((product, idx) => {
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
                                                   value={quantities[idx]}
                                                   // value={quantity}
                                                   onChange={(e) => {
                                                       let val = parseInt(e.target.value)
                                                       quantities[idx] = val
                                                       setQuantity(val)
                                                   }}
                                                   name="quantity"/>
                                            <button onClick={() =>{
                                                setClick(true)
                                            }}>
                                                Purchase
                                            </button>
                                        </div>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
                {JSON.stringify(quantities)}

            </div>
        </>
    )
}

export default ProductList

