import React from 'react';

// functional component

const Dashboard = (props) => {
    return(
        <div className="Dashboard">
            <h1>Dashboard</h1>
            <h3>Status: {props.loggedInStatus}</h3>
        </div>
    )
}

export default Dashboard;