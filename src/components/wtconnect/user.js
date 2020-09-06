import React from 'react';
import CardFront from './cardFront';
import CardBack from './cardBack';

export default function User(props) {
    // console.log("user", props)
    return(
        <div className="womens-card" key={props.id}>
            {/* <img className="users-avatar" src={props.avatar.link} alt={props.avatar.id} />
            <br />
            < >{props.first_name}{props.last_name}</> */}
            <CardFront avatar={props.avatar} first_name={props.first_name} last_name={props.last_name} />
            <CardBack 
            goals={props.goals}
            resume_link={props.resume_link}
            website={props.website}
            contact={props.contact}
            linked_in={props.linked_in}
            twitter={props.twitter}
            available_to_work={props.available_to_work}
            open_to_connect={props.open_to_connect}
            open_to_mentor={props.open_to_mentor}/>
        </div>
    )
}