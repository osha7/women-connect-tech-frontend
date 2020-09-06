
import React from 'react';

export default function CardFront(props) {

    return (
        <div className="card-front">
            <img className="users-avatar" src={props.avatar.link} alt={props.avatar.id} />
            <br />
            <h3>{props.first_name} {props.last_name}</h3>
        </div>
    )
}


