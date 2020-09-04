import React from 'react';

export const UserImage = (props) => {
// console.log("image div", props)
    if (props.avatar) {
    return(
        <div>
            <img className="user-avatar" src={props.avatar.link} alt={props.avatar.id} />
        </div>
    )
    } else {
        return (
            <div></div>
        )
    }
}
