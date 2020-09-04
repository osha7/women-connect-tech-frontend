import React from 'react';
// import Avatar from './users/usermedia/AvatarUploads';
import axios from 'axios';
import UserInfo from './users/user_info'
import UserForm from '../components/users/userForm'

class Dashboard extends React.Component {

    state = {
        viewUserForm: false,
    }

    handleOnClick = () => {
        // console.log(state)
        this.setState(previousState => ({
            viewUserForm: previousState.viewUserForm === true ? false : true
         }))
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
    // debugger
    // console.log(props)
    render() {
        let text = this.state.viewUserForm === true ? "Hide Form" : "Update Your Information"
        if (this.props.user.id) {
            return(
                <div className="Dashboard">
                    <h1>Dashboard</h1>
                    <h5>Status: {this.props.loggedInStatus}</h5>
                    <button onClick={this.handleLogoutClick}>Log Out</button>
                    
                    {/* <Avatar /> */}
                    <UserInfo id={this.props.user.id}/>
                    <button onClick={this.handleOnClick}>{ text }</button>
                    <div className="toggle-job-form">
                        {this.state.viewUserForm === true ? <UserForm id={this.props.user.id} /> : null }
                    </div>
                </div>
                    
            )
        } else {
            return(
                <div>
                    <h1>Dashboard</h1>
                    <h3>Status: {this.props.loggedInStatus}</h3>
                    <br /> 
                    <h1>You Must Be Logged In To View Dashboard</h1>

                </div>
            )
        }
    }
}

export default Dashboard;