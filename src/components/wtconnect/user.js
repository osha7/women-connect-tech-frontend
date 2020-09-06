import React from 'react';

export default function User(props) {
    console.log("user", props)
    return(
        <div className="womens-card" key={props.id}>
            <img className="users-avatar" src={props.avatar.link} alt={props.avatar.id} />
            <br />
            < >{props.first_name}{props.last_name}</>
        </div>
    )
}