import React, {useState} from 'react'

const EditableCart = ({pair}) => {
    const [editing, setEditing] = useState(false)

    return (<>
            <li className='list-group-item'>
                <div className='ml-1 row'>
                    <div>
                        {pair.product.drink.nameDrink} by {pair.product.seller.storeName}:
                    </div>
                    {
                        editing &&
                        <>
                            <input className='cart-editor-typing'
                            type='Number'
                            value={pair.quantity}/>
                            <div className='cart-editor-button'>
                                <i onClick={() => {
                                    setEditing(false)
                                    // updateProduct(productCache)
                                }}
                                   className="float-right edit-button fa fa-check"/>
                                <i
                                    onClick={() => {
                                        // deleteProduct(productCache)
                                    }}
                                    className="float-right edit-button fa fa-trash mr-1"/>
                            </div>
                        </>
                    }
                    {!editing &&
                     <>
                         <div className='cart-editor'>
                             {pair.quantity}
                         </div>
                         <div className='cart-editor-button'>
                             <i className='float-right fa fa-cog edit-button'
                                onClick={() => {
                                    setEditing(true)
                                }}/>
                         </div>
                     </>
                    }
                </div>
            </li>
        </>
    )
}

export default EditableCart