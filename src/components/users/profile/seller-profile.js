import React from "react";
import {Link} from "react-router-dom";

const SellerProfile = ({state, updateStorageLocation}) => {
    return (
        <>
            <br/>
            <div className='mb-3 row'>
                <h2 className='col-sm-2'>Store Info</h2>
            </div>
            <div className="mb-3 row">
                <label htmlFor="storeName" className="col-sm-2 col-form-label">Store name</label>
                <div className="col-sm-10">
                    <input className="form-control wbdv-field wbdv-username"
                           id="storeName"
                           value={state.storeName}
                           readOnly
                           placeholder="Example: Cocktail Club"/>
                </div>
            </div>

            <div className="mb-3 row">
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

            <div className="mb-3 row">
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

            <div className="mb-3 row">
                <label htmlFor="sellerCity" className="col-sm-2 col-form-label">City
                </label>
                <div className="col-sm-10">
                    <input className="form-control wbdv-field wbdv-username"
                           id="sellerCity"
                           value={state.storageLocation.city}
                           onChange={(e) =>
                               updateStorageLocation({city: e.target.value})}
                           placeholder="Example: Boston"/>
                </div>
            </div>

            <div className="mb-3 row">
                <label htmlFor="sellerState" className="col-sm-2 col-form-label">State
                </label>
                <div className="col-sm-10">
                    <input className="form-control wbdv-field wbdv-username"
                           id="sellerState"
                           value={state.storageLocation.state}
                           onChange={(e) =>
                               updateStorageLocation({state: e.target.value})}
                           placeholder="Example: MA"/>
                </div>
            </div>

            <div className="mb-3 row">
                <label htmlFor="sellerPostalCode" className="col-sm-2 col-form-label">Postal Code
                </label>
                <div className="col-sm-10">
                    <input className="form-control wbdv-field wbdv-username"
                           id="sellerPostalCode"
                           value={state.storageLocation.postalCode}
                           onChange={(e) =>
                               updateStorageLocation({postalCode: e.target.value})}
                           placeholder="Example: 02115"/>
                </div>
            </div>

            <div className="mb-3 row">
                <label htmlFor="sellerCountry" className="col-sm-2 col-form-label">Country
                </label>
                <div className="col-sm-10">
                    <input className="form-control wbdv-field wbdv-username"
                           id="sellerCountry"
                           value={state.storageLocation.country}
                           onChange={(e) =>
                               updateStorageLocation({country: e.target.value})}
                           placeholder="Example: USA"/>
                </div>
            </div>
        </>
    )
}

export default SellerProfile