import React from 'react';

export const UserImage = (props) => {
    console.log("image div", props)
    return(
        <div>
            <img className="user-avatar" src={props.img.link} alt={props.img.id} />
        </div>
    )
}
