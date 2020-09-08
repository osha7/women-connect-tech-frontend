import React from 'react';

export default function CardBack(props) {

    return (
        <div className="card-back">
            <div className="back-details">
                {/* <b>Goals:</b><br />
                <p>{props.goals}</p> */}
                <br /> 
                <b>Contact Email:</b>
                <p><i class="fa fa-envelope-open" aria-hidden="true"></i> {props.contact}</p>
                <a href={props.website}>Website</a><br />
                <a href={props.resume_link}>Resume</a><br /><br />
                <b>Get Social:</b><br /><a href={props.linked_in}>LinkedIn</a> --- <a href={props.twitter}>Twitter</a>
            </div>
            {/* { console.log(props)} */}
            <table className="users-availability-table" key={props.id}>
                    <tbody className="t-body">
                        <th>Available To Work</th><th>Open To Connect</th><th>Open To Mentor</th>
                        <tr><td>{props.available_to_work ? "✔️" : "🚫"}</td><td>{props.open_to_connect ? "✔️" : "🚫"}</td><td>{props.open_to_mentor ? "✔️" : "🚫"}</td></tr>
                    </tbody>
                </table>
            
        </div>
    )
}