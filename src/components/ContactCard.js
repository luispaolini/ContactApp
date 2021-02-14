import React from 'react';
import { Link } from "react-router-dom";
import user from "../images/user.png"
import { Trash } from "bootstrap-icons-react";

const ContactCard = (props) => {
    const {id, name, email} = props.contact;

    return (
        <div className="list-group-item">
            <div className="card">
                <div className="row">
                    <div className="col-2">
                        <img className="img-fluid" src={ user } alt="user"/>
                    </div>
                    <div className="col-8">
                        <Link to={{pathname: `/contact/${id}`, state:{contact: props.contact}}} className="link-light">
                            <div className="card-text fs-2 text-secondary">{ name }</div>
                            <div className="card-text fs-5 text-success">{ email }</div>
                        </Link>
                    </div>
                    <div className="col-1">
    
                        <Trash 
                           
                            style={{ color: "red", marginTop: "20px", height: "26px", width: "26px"}}
                            onClick={() => props.clickHandler(id)}
                        />

                    </div>
                   
            </div>
            </div>
        </div>
    );

};
export default ContactCard;