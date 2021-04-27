import React from 'react'
import userService from "../../../services/user-service";
import {useHistory} from "react-router-dom";

export default class PublicProfile extends React.Component {
    state = {
        profile: {
            names: {
                firstName: '',
                middleName: '',
                lastName: ''
            },
            username: '',
            role: '',
            address: {
                addressLineOne: '',
                addressLineTwo: '',
                city: '',
                state: '',
                postalCode: '',
                country: ''
            },
            storeName: '',
            storageLocation: {
                addressLineOne: '',
                addressLineTwo: '',
                city: '',
                state: '',
                postalCode: '',
                country: ''
            }
        },
        canWrite: false
    }

    componentDidMount() {
        let authority = this.props.match.params.auth
        let userId = this.props.match.params.userId
        userService.getPublicProfile(userId)
            .then(profile => {
                if (profile) {
                    this.setState({profile: profile})
                    if (authority && authority === "write") {
                        this.setState({canWrite: true})
                    }
                }

            })
    }

    handleUserUpdate = () => {
        let userInfo = {
            userId: this.props.match.params.userId,
            userProfile: this.state.profile
        }

        userService.updateUserInfoWithWriteAuth(userInfo)
            .then((res)=> {
                alert('Update Successfully!')
                this.setState({profile: userInfo.userProfile})
            })
            .catch(error => {
                alert('Failed to update')
            })
    }
    render() {

        return (
            <div className="container">
                <h1>Public Profile {this.state.canWrite}</h1>
                <br/>

                <div className="mb-3 row">
                    <label htmlFor="username" className="col-sm-2 col-form-label">Username</label>
                    <div className="col-sm-10">
                        <input type="text"
                               readOnly
                               className="form-control"
                               id="username"
                               autoComplete="off"
                               placeholder="abc"
                               value={this.state.profile.username}/>
                    </div>
                </div>


                <div className="mb-3 row">
                    <label htmlFor="firstName" className="col-sm-2 col-form-label">
                        First Name
                    </label>
                    <div className="col-sm-10">
                        <input type="text"
                               readOnly={!this.state.canWrite}
                               className="form-control"
                               id="firstName"
                               onChange={(e)=>{
                                   const curName = this.state.profile.names
                                   curName.firstName = e.target.value
                                   this.setState({names : curName})
                               }}
                               placeholder="Wenhao"
                               value={this.state.profile.names.firstName}
                        />
                    </div>
                </div>

                <div className="mb-3 row">
                    <label htmlFor="middleName" className="col-sm-2 col-form-label">
                        Middle Name
                    </label>
                    <div className="col-sm-10">
                        <input type="text"
                               readOnly={!this.state.canWrite}
                               className="form-control"
                               id="middleName"
                               onChange={(e)=>{
                                   const curName = this.state.profile.names
                                   curName.middleName = e.target.value
                                   this.setState({names : curName})
                               }}
                               placeholder="W"
                               value={this.state.profile.names.middleName}
                        />
                    </div>
                </div>


                <div className="mb-3 row">
                    <label htmlFor="lastName" className="col-sm-2 col-form-label">
                        Last Name
                    </label>
                    <div className="col-sm-10">
                        <input type="text"
                               readOnly={!this.state.canWrite}
                               className="form-control"
                               id="lastName"
                               onChange={(e)=>{
                                   const curName = this.state.profile.names
                                   curName.lastName = e.target.value
                                   this.setState({names : curName})
                               }}
                               placeholder="Ge"
                               value={this.state.profile.names.lastName}
                        />
                    </div>
                </div>


                <div className="mb-3 row">
                    <label htmlFor="role" className="col-sm-2 col-form-label">
                        Role
                    </label>
                    <div className="col-sm-10">
                        <select id="role"
                                disabled={true}
                                value={this.state.profile.role}
                                className="form-control">
                            <option value="Admin">Admin</option>
                            <option value="Buyer">Buyer</option>
                            <option value="Seller">Seller</option>
                        </select>
                    </div>
                </div>

                {
                    this.state.profile.role === 'Seller' &&
                    <>
                        <div className='mb-3 row'>
                            <h2 className='col-sm-2'>Store Info</h2>
                        </div>
                        <div className="mb-3 row">
                            <label htmlFor="storeName" className="col-sm-2 col-form-label">Store name</label>
                            <div className="col-sm-10">
                                <input className="form-control wbdv-field wbdv-username"
                                       id="storeName"
                                       value={this.state.profile.storeName}
                                       readOnly/>
                            </div>
                        </div>

                        <div className="mb-3 row">
                            <label htmlFor="AddressLineOne" className="col-sm-2 col-form-label">Address Line
                                1</label>
                            <div className="col-sm-10">
                                <input className="form-control wbdv-field wbdv-username"
                                       id="AddressLineOne"
                                       readOnly={!this.state.canWrite}
                                       value={this.state.profile.storageLocation.addressLineOne}
                                       onChange={(e) => {
                                           const curStorage = this.state.profile.storageLocation
                                           curStorage.addressLineOne = e.target.value
                                           this.setState({storageLocation: curStorage})
                                       }}
                                       placeholder="Example: xxx st"/>
                            </div>
                        </div>

                        <div className="mb-3 row">
                            <label htmlFor="AddressLineTwo" className="col-sm-2 col-form-label">Address Line
                                2</label>
                            <div className="col-sm-10">
                                <input className="form-control wbdv-field wbdv-username"
                                       id="AddressLineTwo"
                                       readOnly={!this.state.canWrite}
                                       value={this.state.profile.storageLocation.addressLineTwo}
                                       onChange={(e) => {
                                           const curStorage = this.state.profile.storageLocation
                                           curStorage.addressLineTwo = e.target.value
                                           this.setState({storageLocation: curStorage})
                                       }}
                                       placeholder="Example: xxx st"/>
                            </div>
                        </div>

                        <div className="mb-3 row">
                            <label htmlFor="sellerCity" className="col-sm-2 col-form-label">City
                            </label>
                            <div className="col-sm-10">
                                <input className="form-control wbdv-field wbdv-username"
                                       id="sellerCity"
                                       readOnly={!this.state.canWrite}
                                       value={this.state.profile.storageLocation.city}
                                       onChange={(e) => {
                                           const curStorage = this.state.profile.storageLocation
                                           curStorage.city = e.target.value
                                           this.setState({storageLocation: curStorage})
                                       }}
                                       placeholder="Example: Boston"/>
                            </div>
                        </div>

                        <div className="mb-3 row">
                            <label htmlFor="sellerState" className="col-sm-2 col-form-label">State
                            </label>
                            <div className="col-sm-10">
                                <input className="form-control wbdv-field wbdv-username"
                                       id="sellerState"
                                       readOnly={!this.state.canWrite}
                                       onChange={(e) => {
                                           const curStorage = this.state.profile.storageLocation
                                           curStorage.country = e.target.value
                                           this.setState({storageLocation: curStorage})
                                       }}
                                       value={this.state.profile.storageLocation.country}
                                       placeholder="Example: MA"/>
                            </div>
                        </div>

                        <div className="mb-3 row">
                            <label htmlFor="sellerPostalCode" className="col-sm-2 col-form-label">Postal Code
                            </label>
                            <div className="col-sm-10">
                                <input className="form-control wbdv-field wbdv-username"
                                       id="sellerPostalCode"
                                       readOnly={!this.state.canWrite}
                                       value={this.state.profile.storageLocation.postalCode}
                                       onChange={(e) => {
                                           const curStorage = this.state.profile.storageLocation
                                           curStorage.postalCode = e.target.value
                                           this.setState({storageLocation: curStorage})
                                       }}
                                       placeholder="Example: 02115"/>
                            </div>
                        </div>

                        <div className="mb-3 row">
                            <label htmlFor="sellerCountry" className="col-sm-2 col-form-label">Country
                            </label>
                            <div className="col-sm-10">
                                <input className="form-control wbdv-field wbdv-username"
                                       id="sellerCountry"
                                       readOnly={!this.state.canWrite}
                                       value={this.state.profile.storageLocation.country}
                                       onChange={(e) => {
                                           const curStorage = this.state.profile.storageLocation
                                           curStorage.country = e.target.value
                                           this.setState({storageLocation: curStorage})
                                       }}
                                       placeholder="Example: USA"/>
                            </div>
                        </div>
                    </>
                }
                <br/>
                {this.state.canWrite &&
                    <>
                        <button
                            onClick={() => this.handleUserUpdate()}
                            className="btn btn-success btn-block">
                            Update
                        </button>
                    </>
                }

            </div>
        )}
}
