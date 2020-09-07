
import React from 'react';

export default function CardFront(props) {

    return (
        <div className="card-front">
            <img className="users-avatar" src={props.avatar.link} alt={props.avatar.id} />
            {/* <br /> */}
            <h1><b>{props.first_name} {props.last_name}</b></h1>
            <b>Goals:</b>
            <p>{props.goals}</p>
        </div>
        
    )
}


