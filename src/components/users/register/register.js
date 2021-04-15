import React from 'react'
import {Link} from "react-router-dom";
import userService from "../../../services/user-service";

export default class Register extends React.Component {
    state = {
        username: '',
        password: '',
        verifyPassword: ''
    }

    handleRegister = (user) => {
        if (this.state.password === this.state.verifyPassword) {
            userService.register(user)
                .then(newUser => this.props.history.push('/profile'))
        } else {
            alert("Password doesn't match!")
        }
    }

    render() {
        return (
            <div className="container">
                <h1>Register</h1>

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

                {/*<div className="mb-3 row">*/}
                {/*    <label htmlFor="dob" className="col-sm-2 col-form-label">*/}
                {/*        DOB*/}
                {/*    </label>*/}
                {/*    <div className="col-sm-10">*/}
                {/*        <input type="date"*/}
                {/*               className="form-control"*/}
                {/*               title="Please enter your DOB"*/}
                {/*               id="dob"/>*/}
                {/*    </div>*/}
                {/*</div>*/}

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
