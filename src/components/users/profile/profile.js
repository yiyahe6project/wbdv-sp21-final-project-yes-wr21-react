import React from 'react'
import {Link} from "react-router-dom";
import userService from "../../../services/user-service";
import SellerProfile from "./seller-profile";
import AddressProfile from "./address-profile";
import Admin from "../../admin/admin";

export default class Profile extends React.Component {
    state = {
        userId: '',
        profile: {
            names: {
                firstName: '',
                middleName: '',
                lastName: ''
            },
            username: '',
            password: '',
            verifyPassword: '',
            role: '',
            address: {
                addressLineOne: '',
                addressLineTwo: '',
                city: '',
                state: '',
                postalCode: '',
                country: ''
            },
            storageLocation: {
                addressLineOne: '',
                addressLineTwo: '',
                city: '',
                state: '',
                postalCode: '',
                country: ''
            },
            storeName: ''
        }
    }

    componentDidMount() {
        userService.profile()
            .catch(error => {
                alert("Not logged In!")
                this.props.history.push('/otherProfile')
                // this.props.history.push('/')
            })
            .then(profile => {
                if (profile) {
                    this.setState({userId: profile._id, profile: profile})
                }
            })
    }

    handleLogout = () =>
        userService.logout().then(status => {
            this.props.history.push('/')
        })

    updateStorageLocation = (storageLocationUpdate) => {
        const name = Object.keys(storageLocationUpdate)[0]
        const currentStorage = this.state.profile.storageLocation
        currentStorage[name] = storageLocationUpdate[name]
        this.setState({storageLocation: currentStorage})
    }

    updateAddress = (addressUpdate) => {
        const name = Object.keys(addressUpdate)[0]
        const currentAddress = this.state.profile.address
        currentAddress[name] = addressUpdate[name]
        this.setState({address: currentAddress})
    }

    handleUserUpdate = () => {
        let userInfo = {
            userId: this.state.userId,
            userProfile: this.state.profile
        }

        userService.updateUserInfo(userInfo)
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
                <br/>
                {
                    this.state.profile.role === "Buyer" &&
                    <div className='mb-3 row'>
                        <div className='col-3'>
                            <button
                                onClick={() => this.props.history.push('/search')}
                                className='btn btn-success btn-block'>Search drinks</button>
                        </div>
                        <div className='col-3'>
                            <button
                            onClick={()=> this.props.history.push('/shopping/store')}
                                className='btn btn-success btn-block'>Browse products</button></div>
                        <div className='col-3'>
                            <button
                                onClick={()=> this.props.history.push('/shopping/products')}
                                className='btn btn-success btn-block'>Browse stores</button></div>
                        <div className='col-3'>
                            <button
                                onClick={()=> this.props.history.push('/orders')}
                                className='btn btn-success btn-block'>My orders</button></div>
                    </div>
                }

                <br/>
                {
                    this.state.profile.role === "Admin" &&
                    <>
                        <div className='mb-3 row'>
                            <h4 className='col-sm-3'>Admin Manager</h4>
                            <div className="col-sm-9">
                                <Link
                                    to={`/admin/${this.state.userId}`}
                                    className="btn btn-success btn-block"
                                >
                                    My Dashboard </Link>
                            </div>
                        </div>
                    </>
                }
                <br/>

                <h1>Personal Profile</h1>
                <br/>

                <div className="mb-3 row">
                    <label htmlFor="username" className="col-sm-2 col-form-label">Username</label>
                    <div className="col-sm-10">
                        <input type="text"
                               readOnly
                               className="form-control"
                               id="username"
                               autoComplete="off"
                               placeholder="username"
                               value={this.state.profile.username}/>
                    </div>
                </div>

                <div className="mb-3 row">
                    <label htmlFor="password" className="col-sm-2 col-form-label">
                        Password
                    </label>
                    <div className="col-sm-10">
                        <input className="form-control"
                               id="password"
                               type="password"
                               readOnly
                               value={this.state.profile.password}
                               placeholder="Example: abc123!"/>
                    </div>
                </div>

                <div className="mb-3 row">
                    <label htmlFor="firstName" className="col-sm-2 col-form-label">
                        First Name
                    </label>
                    <div className="col-sm-10">
                        <input type="tel"
                               className="form-control"
                               id="firstName"
                               onChange={(e)=>{
                                   const curName = this.state.profile.names
                                   curName.firstName = e.target.value
                                   this.setState({names : curName})
                               }}
                               placeholder="Gavin"
                               value={this.state.profile.names.firstName}
                        />
                    </div>
                </div>

                <div className="mb-3 row">
                    <label htmlFor="middleName" className="col-sm-2 col-form-label">
                        Middle Name
                    </label>
                    <div className="col-sm-10">
                        <input type="tel"
                               className="form-control"
                               id="middleName"
                               onChange={(e)=>{
                                   const curName = this.state.profile.names
                                   curName.middleName = e.target.value
                                   this.setState({names : curName})
                               }}
                               placeholder="Gavin"
                               value={this.state.profile.names.middleName}
                        />
                    </div>
                </div>


                <div className="mb-3 row">
                    <label htmlFor="lastName" className="col-sm-2 col-form-label">
                        Last Name
                    </label>
                    <div className="col-sm-10">
                        <input type="tel"
                               className="form-control"
                               id="lastName"
                               onChange={(e)=>{
                                   const curName = this.state.profile.names
                                   curName.lastName = e.target.value
                                   this.setState({names : curName})
                               }}
                               placeholder="Austin"
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
                    this.state.profile.role === "Seller" &&
                    <>
                        <SellerProfile
                            updateStorageLocation={this.updateStorageLocation}
                            state={this.state.profile}
                        />
                    </>
                }

                {
                    this.state.profile.role === "Buyer" &&
                    <>
                        <AddressProfile
                            updateAddress={this.updateAddress}
                            state={this.state.profile}/>
                    </>
                }

                <div className="form-group row">
                    <label className="col-sm-2 col-form-label"/>
                    <div className="col-sm-10">
                        <button
                            onClick={()=>this.handleUserUpdate()}
                            className="btn btn-success btn-block">
                            Update
                        </button>
                        <button
                            className="btn btn-danger btn-block"
                            onClick={()=>this.handleLogout()}>
                            Log out
                        </button>
                    </div>
                </div>

                <div className="mb-3 row">
                    <div className="col-sm-10">
                        <Link to="/">
                            <i className="fa fa-home"/> Back to homepage
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}
