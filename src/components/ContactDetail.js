import React from 'react';
import { Link } from "react-router-dom";
import user from "../images/user.jpg"

const ContactDetail = (props) => {
    const { name, email } = props.location.state.contact;
    return (
        <div className="card">
                <div className="card-img-top">
                    <img src={user} alt="user" className="img-fluid" />
                </div>
                <div className="card-body">
                    <div className="card-title fs-2">{name}</div>
                    <div className="card-text fs-5">{email}</div>
                    <div className="col text-center">
                        <Link to="/">
                            <button className="btn btn-primary mt-4">Back to Contact List</button>
                        </Link>
                    </div>
                </div>
        </div>
    );
};
export default ContactDetail;