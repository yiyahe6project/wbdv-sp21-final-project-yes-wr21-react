import React from 'react'
import {Link} from "react-router-dom";
import userService from "../../../services/user-service";

export default class Login extends React.Component {
    state = {
        username: '',
        password: ''
    }

    handleLogin = (user) => {
        userService.login(user).then(
            currentUser => this.props.history.push('/profile')
        )
    }

    render() {
        return (
            <div className="container">
                <h1>Sign In</h1>

                <div className="mb-3 row">
                    <label htmlFor="username" className="col-sm-2 col-form-label">Username</label>
                    <div className="col-sm-10">
                        <input className="form-control wbdv-field wbdv-username"
                               id="username"
                               value={this.state.username}
                               onChange={(e) => this.setState({
                                   username: e.target.value
                               })}
                               placeholder="Alice"/>
                    </div>

                </div>
                <div className="mb-3 row">
                    <label htmlFor="password" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input className="form-control wbdv-field wbdv-username"
                               id="password"
                               type="password"
                               value={this.state.password}
                               onChange={(e) => this.setState({
                                    password: e.target.value
                               })}
                               placeholder="abc123!"/>
                    </div>
                </div>

                <div className="mb-3 row">
                    <label className="col-sm-2 col-form-label"/>
                    <div className="col-sm-10">
                        <button
                            onClick={()=>this.handleLogin(this.state)}
                            className="btn btn-primary btn-block">
                            Sign in
                        </button>
                        <Link to="/" className="btn btn-danger btn-block"> Cancel </Link>
                        <div className="row">
                            <div className="col-6">

                                <Link to="/">Forgot Password</Link>
                            </div>
                            <div className="col-6">
                                <Link to="/register"
                                      className="float-right">
                                    Sign up
                                </Link>
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
