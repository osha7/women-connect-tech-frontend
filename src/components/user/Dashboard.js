import React from 'react';
// import Avatar from './users/usermedia/AvatarUploads';
import axios from 'axios';
import UserInfo from './user_info'
import UserForm from './userForm'

class Dashboard extends React.Component {

    state = {
        viewUserForm: false,
    }

    clickForUserForm = () => {
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
   
    render() {
        // console.log(this.props)
        let text = this.state.viewUserForm === true ? "Hide Form" : "Update Your Information"
        if (this.props.user.id) {
            return(
                <div className="Dashboard">
                    <h1>Dashboard</h1>
                    <h5>Status: {this.props.loggedInStatus}</h5>
                    <button onClick={this.handleLogoutClick}>Log Out</button>
                    
                    {/* <Avatar /> */}
                    <UserInfo id={this.props.user.id}/>
                    <button onClick={this.clickForUserForm}>{ text }</button>
                    <div className="toggle-user-form">
                        {this.state.viewUserForm === true ? <UserForm id={this.props.user.id} viewform={this.clickForUserForm}/> : null }
                    </div>
                    <br /><br /><br />
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