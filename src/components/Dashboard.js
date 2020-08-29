import React from 'react';
import Avatar from './usermedia/AvatarUploads'
// functional component

const Dashboard = (props) => {
    return(
        <div className="Dashboard">
            <h1>Dashboard</h1>
            <h3>Status: {props.loggedInStatus}</h3>
            <Avatar />
        </div>
    )
}

export default Dashboard;