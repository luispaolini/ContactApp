import React from "react"

class AddContact extends React.Component {

    state = {
        name: "",
        email: "",
    }

    add = (e) => {
        e.preventDefault();
        if (this.state.name === "" || this.state.email === "") {
            alert("All fields are mandatory!");
            return
        }
        this.props.addContactHandler(this.state);
        this.setState({ name: "", email: ""});
        this.props.history.push("/");
    }

    render() {
        return (
            <div className="container">
                <h2>Add Contact</h2>
                <form className="mb-3" onSubmit={this.add}>
                    <div className="form-label">
                        <label className="form-label fs-5">Name</label>
                        <input 
                            className="form-control"
                            type="text" 
                            name="name" 
                            placeholder="Name"
                            value={this.state.name}
                            onChange={ (e) => this.setState({ name: e.target.value })} 
                        />
                    </div>
                    <div className="form-label fs-5">
                        <label className="form-label">Email</label>
                        <input 
                            className="form-control"
                            type="text" 
                            name="email" 
                            placeholder="Email"
                            value={this.state.email}
                            onChange={ (e) => this.setState({ email: e.target.value })}  
                        />
                    </div>
                    <button className="btn btn-primary">Add</button>
                </form>
            </div>
        );
    }

}

export default AddContact;