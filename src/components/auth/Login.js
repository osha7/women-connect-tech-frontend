import React, { Component } from 'react';
import axios from 'axios';

//http only cookie authentication (no tokens)

class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            email: '',
            password: '',
            loginErrors: ''

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
        axios.post("http://localhost:3000/sessions", {
            user: {
                username: this.state.username,
                email: this.state.email,
                password: this.state.password
            }
        }, { withCredentials: true } 
        // ^^gives api permission to set cookie within our client - this is a MUST to have
        )
        // axios returns a promise
        .then(response => {
            console.log("resp from login", response)
            if (response.data.logged_in === true){
                this.props.handleSuccessfulAuth(response.data)
            } else {
                // console.log("Didn't log in")
                alert ("Error in credentials.  Please Try Again")
            }
        })
        // .catch(error => {
        //     console.log("login error", error)
        // })
        .catch(() => alert("Unable To Login At This Time"))
    }

    render() {
        return (
            <div className="Login">
                Log In
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

                {/* <Link to="/registration">Registration</Link> */}

                <button type="submit">Log In</button>

             </form>
            </div>
        )
    }

}

export default Login;
