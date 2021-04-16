import React from 'react'
import {Link} from "react-router-dom";
import userService from "../../../services/user-service";
import SellerRegister from "./seller-register";

export default class Register extends React.Component {
    state = {
        names: {
            firstName: '',
            middleName: '',
            lastName: ''
        },
        username: '',
        password: '',
        verifyPassword: '',
        role: 'Buyer',
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

    handleRegister = (user) => {
        if (this.state.username === '' || this.state.password === '') {
            alert("You have to give a username and password")
        } else {
            if (this.state.password === this.state.verifyPassword) {
                console.log(user)
                userService.register(user)
                    .then(newUser => {
                        if (newUser) {
                            this.props.history.push('/profile')
                        } else {
                            alert("username or store name are taken")
                        }
                    })
            } else {
                alert("Password doesn't match!")
            }
        }
    }


    // for Seller
    updateStoreName = (storeName) => {
        this.setState({storeName: storeName})
    }

    updateStorageLocation = (storageLocationUpdate) => {
        // console.log(storageLocationUpdate)
        const name = Object.keys(storageLocationUpdate)[0]
        // console.log(storageLocationUpdate[name])
        const currentStorage = this.state.storageLocation
        currentStorage[name] = storageLocationUpdate[name]
        this.setState({storageLocation: currentStorage})
    }

    render() {
        return (
            <div className="container">
                <h1>Register</h1>

                <div className="mb-3 row">
                    <label htmlFor="firstName" className="col-sm-2 col-form-label">First name</label>
                    <div className="col-sm-10">
                        <input className="form-control wbdv-field wbdv-username"
                               id="firstName"
                               value={this.state.names.firstName}
                               onChange={(e)=>{
                                   const curName = this.state.names
                                   curName.firstName = e.target.value
                                   this.setState({names : curName})
                               }}
                               placeholder="Example: Alice"/>
                    </div>
                </div>

                <div className="mb-3 row">
                    <label htmlFor="middleName" className="col-sm-2 col-form-label">Middle name (optimal)</label>
                    <div className="col-sm-10">
                        <input className="form-control wbdv-field wbdv-username"
                               id="middleName"
                               value={this.state.names.middleName}
                               onChange={(e)=>{
                                   const curName = this.state.names
                                   curName.middleName = e.target.value
                                   this.setState({names : curName})
                               }}
                               placeholder="Example: Alice"/>
                    </div>
                </div>

                <div className="mb-3 row">
                    <label htmlFor="lastName" className="col-sm-2 col-form-label">Last name</label>
                    <div className="col-sm-10">
                        <input className="form-control wbdv-field wbdv-username"
                               id="lastName"
                               value={this.state.names.lastName}
                               onChange={(e)=>{
                                   const curName = this.state.names
                                   curName.lastName = e.target.value
                                   this.setState({names : curName})
                               }}
                               placeholder="Example: Alice"/>
                    </div>
                </div>

                <div className="mb-3 row">
                    <label htmlFor="username" className="col-sm-2 col-form-label">Username</label>
                    <div className="col-sm-10">
                        <input className="form-control wbdv-field wbdv-username"
                               id="username"
                               value={this.state.username}
                               onChange={(e)=>this.setState({
                                   username: e.target.value
                               })}
                               placeholder="Example: Alice"/>
                    </div>
                </div>

                <div className="mb-3 row">
                    <label htmlFor="password" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input className="form-control wbdv-field wbdv-username"
                               id="password"
                               type="password"
                               value={this.state.password}
                               onChange={(e)=>this.setState({
                                   password: e.target.value
                               })}
                               placeholder="Example: abc123!"/>
                    </div>
                </div>

                <div className="mb-3 row">
                    <label htmlFor="verify_password" className="col-sm-2 col-form-label">Verify
                        Password</label>
                    <div className="col-sm-10">
                        <input className="form-control wbdv-field wbdv-username"
                               id="verify_password"
                               type="password"
                               value={this.state.verifyPassword}
                               onChange={(e)=>this.setState({
                                   verifyPassword: e.target.value
                               })}
                               placeholder="Example: abc123!"/>
                    </div>
                </div>

                <div className="mb-3 row">
                    <label htmlFor="role" className="col-sm-2 col-form-label">
                        Role
                    </label>
                    <div className="col-sm-10">
                        <select id="role"
                                className="form-control"
                                value={this.state.role}
                            onChange={(e)=> {
                                this.setState({role: e.target.value})
                            }}>
                            <option value={"Admin"}>Admin</option>
                            <option value={"Buyer"}>Buyer</option>
                            <option value={"Seller"}>Seller</option>
                        </select>
                    </div>
                </div>

                {
                    this.state.role === "Seller" &&
                    <>
                        <SellerRegister
                        state={this.state}
                        updateStoreName={this.updateStoreName}
                        updateStorageLocation={this.updateStorageLocation}/>
                    </>
                }

                <div className="form-group row">
                    <label className="col-sm-2 col-form-label"/>
                    <div className="col-sm-10">
                        <button
                            onClick={() => this.handleRegister(this.state)}
                            className="btn btn-primary btn-block">
                            Sign up
                        </button>
                        <Link to="/" className="btn btn-danger btn-block"> Cancel </Link>
                        <div className="row">
                            <div className="col-6">
                                <Link to="/login">Login</Link>
                            </div>
                        </div>
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
