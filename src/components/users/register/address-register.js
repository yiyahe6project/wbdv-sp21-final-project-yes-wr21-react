import React from "react";

const AddressRegister = ({state, updateAddress}) => {
    return (
        <>
            <br/>
            <div className='mb-3 row'>
                <h5>Address</h5>
            </div>

            <div className="mb-3 row">
                <label htmlFor="UserAddressLineOne" className="col-sm-2 col-form-label">Address Line
                    1</label>
                <div className="col-sm-10">
                    <input className="form-control wbdv-field wbdv-username"
                           id="UserAddressLineOne"
                           value={state.address.addressLineOne}
                           onChange={(e) =>
                               updateAddress({addressLineOne: e.target.value})}
                           placeholder="Example: xxx st"/>
                </div>
            </div>

            <div className="mb-3 row">
                <label htmlFor="UserAddressLineTwo" className="col-sm-2 col-form-label">Address Line
                    2</label>
                <div className="col-sm-10">
                    <input className="form-control wbdv-field wbdv-username"
                           id="UserAddressLineTwo"
                           value={state.address.addressLineTwo}
                           onChange={(e) =>
                               updateAddress({addressLineTwo: e.target.value})}
                           placeholder="Example: xxx st"/>
                </div>
            </div>

            <div className="mb-3 row">
                <label htmlFor="UserCity" className="col-sm-2 col-form-label">City
                </label>
                <div className="col-sm-10">
                    <input className="form-control wbdv-field wbdv-username"
                           id="UserCity"
                           value={state.address.city}
                           onChange={(e) =>
                               updateAddress({city: e.target.value})}
                           placeholder="Example: Boston"/>
                </div>
            </div>

            <div className="mb-3 row">
                <label htmlFor="UserState" className="col-sm-2 col-form-label">State
                </label>
                <div className="col-sm-10">
                    <input className="form-control wbdv-field wbdv-username"
                           id="UserState"
                           value={state.address.state}
                           onChange={(e) =>
                               updateAddress({state: e.target.value})}
                           placeholder="Example: MA"/>
                </div>
            </div>

            <div className="mb-3 row">
                <label htmlFor="UserPostalCode" className="col-sm-2 col-form-label">Postal Code
                </label>
                <div className="col-sm-10">
                    <input className="form-control wbdv-field wbdv-username"
                           id="UserPostalCode"
                           value={state.address.postalCode}
                           onChange={(e) =>
                               updateAddress({postalCode: e.target.value})}
                           placeholder="Example: 02115"/>
                </div>
            </div>

            <div className="mb-3 row">
                <label htmlFor="UserCountry" className="col-sm-2 col-form-label">Country
                </label>
                <div className="col-sm-10">
                    <input className="form-control wbdv-field wbdv-username"
                           id="UserCountry"
                           value={state.address.country}
                           onChange={(e) =>
                               updateAddress({country: e.target.value})}
                           placeholder="Example: USA"/>
                </div>
            </div>
        </>
    )
}

export default AddressRegister