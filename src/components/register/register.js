import React from 'react'
import {Link} from "react-router-dom";

const Register = () => {
    return (
        <div className="container">
            <h1>Register</h1>

            <div className="mb-3 row">
                <label htmlFor="username" className="col-sm-2 col-form-label">Username</label>
                <div className="col-sm-10">
                    <input className="form-control wbdv-field wbdv-username"
                           id="username"
                           placeholder="Example: Alice"/>
                </div>
            </div>

            <div className="mb-3 row">
                <label htmlFor="password" className="col-sm-2 col-form-label">Password</label>
                <div className="col-sm-10">
                    <input className="form-control wbdv-field wbdv-username"
                           id="password"
                           type="password"
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
                           placeholder="Example: abc123!"/>
                </div>
            </div>

            <div className="mb-3 row">
                <label htmlFor="dob" className="col-sm-2 col-form-label">
                    DOB
                </label>
                <div className="col-sm-10">
                    <input type="date"
                           className="form-control"
                           title="Please enter your DOB"
                           id="dob"/>
                </div>
            </div>

            <div className="form-group row">
                <label className="col-sm-2 col-form-label"/>
                <div className="col-sm-10">
                    <a href="../profile/profile.template.client.html"
                       className="btn btn-primary btn-block">
                        Sign up
                    </a>
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

export default Register