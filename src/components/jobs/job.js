import React from  'react';

export default function Job(props) {
    // console.log(props)

    function handleOnClick() {
        //  console.log(props.boundDeleteJob)
        props.boundDeleteJob(props.id)
    }

    return (
        <div className="job" key={props.id} >
        <li key={props.id}>{props.title}</li>
        <button onClick={handleOnClick}>X</button>
        </div>
    )
}
