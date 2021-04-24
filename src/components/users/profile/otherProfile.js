import React, {useEffect, useState} from 'react'
import userService from "../../../services/user-service";
import {Link} from "react-router-dom";


const otherProfile = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [users, setUsers] = useState([]);
    const findAllUsers = () =>
        userService.findAllUsers().then(users => {
            console.log(users)
            setUsers(users)
        })

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        findAllUsers().then(r => r)
    }, [])

    return (
        <>
            <br/>
            <div className="col-sm-10">
                <Link to="/">
                    <i className="fa fa-home"/> Back to homepage
                </Link>
            </div>
            <br/>
            <h3>Other Users Profile</h3>
            <br/>

            <ul className="list-group">
                {
                    users.map((user, index) => {
                        return (
                            <li className="list-group-item">
                                Profile {index + 1}
                                <div className="mb-3 row">
                                    <label htmlFor="firstName" className="col-sm-2 col-form-label">
                                        First Name
                                    </label>
                                    <div className="col-sm-10">
                                        <input type="tel"
                                               className="form-control"
                                               id="firstName"

                                               value={user.names.firstName}
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

                                               value={user.names.lastName}
                                        />
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <label htmlFor="role" className="col-sm-3 col-form-label">
                                        Role
                                    </label>
                                    <div className="col-sm-10">
                                        <input type="tel"
                                               className="form-control"
                                               id="role"
                                               placeholder="N/A"
                                               value={user.role}
                                        />
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <label htmlFor="storeName" className="col-sm-3 col-form-label">
                                        store Name
                                    </label>
                                    <div className="col-sm-10">
                                        <input type="tel"
                                               className="form-control"
                                               id="storeName"
                                               placeholder="N/A"
                                               value={user.storeName}
                                                />
                                    </div>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </>
    )
}

export default otherProfile
