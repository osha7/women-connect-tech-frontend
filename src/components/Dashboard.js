import React from 'react';
import Avatar from './usermedia/AvatarUploads'
import NavBar from './navbar';
import JobsBoard from './jobsboard'

// functional component

const Dashboard = (props) => {
    return(
        <div className="Dashboard-main">
            <div className="navbar">
                <NavBar>
                    
                </NavBar>
            </div>
            <div className="Dashboard">
                <h1>Dashboard</h1>
                <h3>Status: {props.loggedInStatus}</h3>
                <Avatar />
            </div>
        </div>
    )
}

export default Dashboard;