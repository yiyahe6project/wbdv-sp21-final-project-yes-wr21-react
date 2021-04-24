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
                               value={this.state.profile.username}/>
                    </div>
                </div>


                <div className="mb-3 row">
                    <label htmlFor="firstName" className="col-sm-2 col-form-label">
                        First Name
                    </label>
                    <div className="col-sm-10">
                        <input type="tel"
                               readOnly={!this.state.canWrite}
                               className="form-control"
                               id="firstName"
                               onChange={(e)=>{
                                   const curName = this.state.profile.names
                                   curName.firstName = e.target.value
                                   this.setState({names : curName})
                               }}
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
                               readOnly={!this.state.canWrite}
                               className="form-control"
                               id="middleName"
                               onChange={(e)=>{
                                   const curName = this.state.profile.names
                                   curName.middleName = e.target.value
                                   this.setState({names : curName})
                               }}
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
                               readOnly={!this.state.canWrite}
                               className="form-control"
                               id="lastName"
                               onChange={(e)=>{
                                   const curName = this.state.profile.names
                                   curName.lastName = e.target.value
                                   this.setState({names : curName})
                               }}
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
