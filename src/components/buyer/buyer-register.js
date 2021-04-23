import React from 'react'

const BuyerRegister = ({state, updateStoreName, updateStorageLocation}) => {
    return (
        <>
            <br/>
            <div className='mb-4 row'>
                <h5>Delivery Address</h5>
            </div>
            <div className="mb-4 row">
                <label htmlFor="recipientName" className="col-sm-2 col-form-label">Recipient Name</label>
                <div className="col-sm-10">
                    <input className="form-control wbdv-field wbdv-username"
                           id="recipientName"
                           value={state.storeName}
                           onChange={(e) => {
                               updateStoreName(e.target.value)
                           }}
                           placeholder="Example: David"/>
                </div>
            </div>

            <div className="mb-4 row">
                <label htmlFor="AddressLineOne" className="col-sm-2 col-form-label">Address Line
                    1</label>
                <div className="col-sm-10">
                    <input className="form-control wbdv-field wbdv-username"
                           id="AddressLineOne"
                           value={state.storageLocation.addressLineOne}
                           onChange={(e) =>
                               updateStorageLocation({addressLineOne: e.target.value})}
                           placeholder="Example: xxx st"/>
                </div>
            </div>

            <div className="mb-4 row">
                <label htmlFor="AddressLineTwo" className="col-sm-2 col-form-label">Address Line
                    2</label>
                <div className="col-sm-10">
                    <input className="form-control wbdv-field wbdv-username"
                           id="AddressLineTwo"
                           value={state.storageLocation.addressLineTwo}
                           onChange={(e) =>
                               updateStorageLocation({addressLineTwo: e.target.value})}
                           placeholder="Example: xxx st"/>
                </div>
            </div>

            <div className="mb-4 row">
                <label htmlFor="buyerCity" className="col-sm-2 col-form-label">City
                </label>
                <div className="col-sm-10">
                    <input className="form-control wbdv-field wbdv-username"
                           id="buyerCity"
                           value={state.storageLocation.city}
                           onChange={(e) =>
                               updateStorageLocation({city: e.target.value})}
                           placeholder="Example: Santa Clara"/>
                </div>
            </div>

            <div className="mb-4 row">
                <label htmlFor="buyerState" className="col-sm-2 col-form-label">State
                </label>
                <div className="col-sm-10">
                    <input className="form-control wbdv-field wbdv-username"
                           id="buyerState"
                           value={state.storageLocation.state}
                           onChange={(e) =>
                               updateStorageLocation({state: e.target.value})}
                           placeholder="Example: CA"/>
                </div>
            </div>

            <div className="mb-4 row">
                <label htmlFor="buyerPostalCode" className="col-sm-2 col-form-label">Postal Code
                </label>
                <div className="col-sm-10">
                    <input className="form-control wbdv-field wbdv-username"
                           id="buyerPostalCode"
                           value={state.storageLocation.postalCode}
                           onChange={(e) =>
                               updateStorageLocation({postalCode: e.target.value})}
                           placeholder="Example: 94115"/>
                </div>
            </div>

            <div className="mb-4 row">
                <label htmlFor="buyerCountry" className="col-sm-2 col-form-label">Country
                </label>
                <div className="col-sm-10">
                    <input className="form-control wbdv-field wbdv-username"
                           id="buyerCountry"
                           value={state.storageLocation.country}
                           onChange={(e) =>
                               updateStorageLocation({country: e.target.value})}
                           placeholder="Example: USA"/>
                </div>
            </div>
        </>
    )
}

export default BuyerRegister
