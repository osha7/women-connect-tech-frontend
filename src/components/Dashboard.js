import React from 'react';
import Avatar from './users/usermedia/AvatarUploads';
import axios from 'axios';
// import {UserImage} from './users/usermedia/user_image';
import UserInfo from './users/user_info'

// functional component

const Dashboard = (props) => {

    function handleLogoutClick() {
        axios.delete('http://localhost:3000/logout', { withCredentials: true })
        .then(response => {
            console.log("logout response", response)
            props.handleLogout()
        })
        .catch(error => {
            console.log("logout error", error)
        })
        // this.props.handleLogout()
    }
    // debugger
    console.log(props)
    if (props.user.id) {
        return(
            <div className="Dashboard">
                <h1>Dashboard</h1>
                <h3>Status: {props.loggedInStatus}</h3>
                <button onClick={handleLogoutClick}>Log Out</button>
                <Avatar />
                {/* <UserImage user={props.user} /> */}
                <UserInfo id={props.user.id}/>
            </div>
                
        )
    } else {
        return(
            <div>
                <h1>Dashboard</h1>
                <h3>Status: {props.loggedInStatus}</h3>
                <br /> 
                <h1>You Must Be Logged In To View Dashboard</h1>

            </div>
        )
    }
}

export default Dashboard;