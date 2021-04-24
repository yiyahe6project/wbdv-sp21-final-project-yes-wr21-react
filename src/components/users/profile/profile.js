import React from 'react'
import {Link} from "react-router-dom";
import userService from "../../../services/user-service";
import SellerProfile from "./seller-profile";
import AddressProfile from "./address-profile";

export default class Profile extends React.Component {
    state = {
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
                this.props.history.push('/')
            })
            .then(profile => {
                this.setState({profile: profile})
                console.log(profile)
                console.log(this.state.profile.names.firstName)
            })
    }

    handleLogout = () =>
        userService.logout().then(status => {
            this.props.history.push('/')
        })


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
                    <label htmlFor="verify_password" className="col-sm-2 col-form-label">
                        Verify
                    </label>
                    <div className="col-sm-10">
                        <input className="form-control"
                               id="verify_password"
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
                               readOnly
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
                               readOnly
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
                               readOnly
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
                            state={this.state.profile}
                        />
                    </>
                }

                {
                    this.state.profile.role === "Buyer" &&
                    <>
                        <AddressProfile
                            state={this.state.profile}/>
                    </>
                }

                <div className="form-group row">
                    <label className="col-sm-2 col-form-label"/>
                    <div className="col-sm-10">
                        <Link to="/Search" className="btn btn-success btn-block">
                            Update
                        </Link>
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
