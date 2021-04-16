import React from 'react'

const BuyerProfile = ({state}) => {
    return (
        <>
            <br/>
            <div className='mb-3 row'>
                <h5>Recipient Info</h5>
            </div>
            <div className="mb-3 row">
                <label htmlFor="storeName" className="col-sm-2 col-form-label">Recipient name</label>
                <div className="col-sm-10">
                    <input className="form-control wbdv-field wbdv-username"
                           id="recipientName"
                           value={state.storeName}
                           readOnly
                           placeholder="Example: David"/>
                </div>
            </div>

            <div className="mb-3 row">
                <label htmlFor="AddressLineOne" className="col-sm-2 col-form-label">Address Line
                    1</label>
                <div className="col-sm-10">
                    <input className="form-control wbdv-field wbdv-username"
                           id="AddressLineOne"
                           value={state.storageLocation.addressLineOne}
                           readOnly
                           placeholder="Example: xxx st"/>
                </div>
            </div>

            <div className="mb-3 row">
                <label htmlFor="AddressLineTwo" className="col-sm-2 col-form-label">Address Line
                    2</label>
                <div className="col-sm-10">
                    <input className="form-control wbdv-field wbdv-username"
                           id="AddressLineTwo"
                           value={state.storageLocation.addressLineTwo}
                           readOnly
                           placeholder="Example: xxx st"/>
                </div>
            </div>
            <div className="mb-3 row">
                <label htmlFor="buyerCity" className="col-sm-2 col-form-label">City
                </label>
                <div className="col-sm-10">
                    <input className="form-control wbdv-field wbdv-username"
                           id="buyerCity"
                           value={state.storageLocation.city}
                           readOnly
                           placeholder="Example: Santa Clata"/>
                </div>
            </div>

            <div className="mb-3 row">
                <label htmlFor="buyerState" className="col-sm-2 col-form-label">State
                </label>
                <div className="col-sm-10">
                    <input className="form-control wbdv-field wbdv-username"
                           id="buyerState"
                           value={state.storageLocation.state}
                           readOnly
                           placeholder="Example: CA"/>
                </div>
            </div>

            <div className="mb-3 row">
                <label htmlFor="buyerPostalCode" className="col-sm-2 col-form-label">Postal Code
                </label>
                <div className="col-sm-10">
                    <input className="form-control wbdv-field wbdv-username"
                           id="buyerPostalCode"
                           value={state.storageLocation.postalCode}
                           readOnly
                           placeholder="Example: 02115"/>
                </div>
            </div>

            <div className="mb-3 row">
                <label htmlFor="buyerCountry" className="col-sm-2 col-form-label">Country
                </label>
                <div className="col-sm-10">
                    <input className="form-control wbdv-field wbdv-username"
                           id="buyerCountry"
                           value={state.storageLocation.country}
                           readOnly
                           placeholder="Example: USA"/>
                </div>
            </div>
        </>
    )
}

export default BuyerProfile
