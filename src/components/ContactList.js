import React from "react"
import { Link } from "react-router-dom"
import ContactCard from "./ContactCard"

const ContactList = (props) => {

    const deleteContactHandler = (id) => {
        props.getContactId(id);
    };

    const renderContactList = props.contacts.map((contact) => {
        return (
            <ContactCard 
            contact={contact} 
            clickHandler={deleteContactHandler} 
            key={ contact.id }
            />
        );
    });
    return (
        <div className="container">
            <div className="row mt-2 mb-2">
                <div className="col">
                    <h2>Contact List</h2>
                </div>
                <div className="col">
                    <div className="text-end">
                        <Link to="/add">
                         <button className="btn btn-primary ">Add Contact</button>
                     </Link>
                     </div>
                </div>
            </div>
          
           
            <div className="card">
                <div className="list-group list-group-flush">{renderContactList}</div>
            </div>
        </div>
    );

}
export default ContactList