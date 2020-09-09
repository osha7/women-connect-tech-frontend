import React from 'react';
import axios from 'axios';
import Registration from './Registration'
import Login from './Login'

class Home extends React.Component {
    // console notified this was a useless constructor
    // constructor(props) {
    //     super(props)
    // }

    handleSuccessfulAuth = (data) => {
        //must update parent component
        this.props.handleLogin(data)
        this.props.history.push("/dashboard")
    }

    handleLogoutClick = () => {
        axios.delete('http://localhost:3000/logout', { withCredentials: true })
        .then(response => {
            console.log("logout response", response)
            this.props.handleLogout()
        })
        .catch(error => {
            console.log("logout error", error)
        })
        // this.props.handleLogout()
    }

    render () {
        // console.log("login page", this.props)
        return(
            <div className="login-container">
                <div className="login">
                    <h3>Status: {this.props.loggedInStatus} </h3>
                    <button onClick={this.handleLogoutClick}>Log Out</button>
                    <br />
                    <br />
                    <Registration handleSuccessfulAuth={this.handleSuccessfulAuth} />
                    <br />
                
                    <Login handleSuccessfulAuth={this.handleSuccessfulAuth} />
                    <br />
                    
                    
                </div>
            </div>
        )
    }
}

export default Home;
