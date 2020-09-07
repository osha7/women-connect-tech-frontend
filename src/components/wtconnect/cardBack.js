import React from 'react';

export default function CardBack(props) {

    return (
        <div className="card-back">
            <span />
            <h5>Goals:</h5><br />
            <p>{props.goals}</p>
            <span />
        </div>
    )
}