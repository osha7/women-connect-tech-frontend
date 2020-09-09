import React, { Component } from 'react';
import axios from 'axios';

//http only cookie authentication (no tokens)

class Registration extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            email: '',
            password: '',
            password_confirmation: '',
            registrationErrors: ''

        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onSubmitHandler = (event) => {
        event.preventDefault()
        // console.log(origin)
        // axios.post takes in 3 arguments: 1. endpoint to hit, 2. data we want to send in the post request (passed in as object), 3. another object: 'withCredentials: true'
        axios.post("http://localhost:3000/users", {
            user: {
                username: this.state.username,
                email: this.state.email,
                password: this.state.password,
                password_confirmation: this.state.password_confirmation,
                // avatar: this.state.avatar
            }
        }, { withCredentials: true } 
        // ^^gives api permission to set cookie within our client - this is a MUST to have
        )
        // axios returns a promise
        .then(response => {
            //  console.log("resp from registration", response)
            // if (response.data.status === "created"){
            if (response.data.user.id){
                this.props.handleSuccessfulAuth(response.data)
            } else {
                // console.log("nope", this.state)
                alert ("Username & Password must be unique.  Please Try Again")
            }
        })
        // .catch(error => {
        //     console.log("registration error", error)
        // })
        .catch(() => alert("Unable To Register At This Time"))
    }

    render() {
        return (
            <div className="Registration">
                <h2>Register</h2>
                <form onSubmit={this.onSubmitHandler}>

                <input
                onChange={this.handleChange}
                type="text"
                name="username"
                placeholder="Username"
                value={this.state.username}
                required
                />
                <br />

                <input
                onChange={this.handleChange}
                type="text"
                name="email"
                placeholder="Email"
                value={this.state.email}
                required
                />
                <br />

                <input
                onChange={this.handleChange}
                type="password"
                name="password"
                placeholder="Password"
                value={this.state.password}
                required
                />
                <br />

                <input
                onChange={this.handleChange}
                type="password"
                name="password_confirmation"
                placeholder="Password Confirmation"
                value={this.state.password_confirmation}
                required
                />
                <br />
                <br />

                {/* <input
                onChange={this.handleChange}
                type="file"
                accept="/images/*"
                name="avatar"
                // required
                />
                <br /> */}

                {/* <Link to="/login">login</Link> */}

                <button type="submit">Register</button>

             </form>
            </div>
        )
    }

}

export default Registration;
