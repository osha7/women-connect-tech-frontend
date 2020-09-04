import React from 'react';

export const UserImage = (props) => {
console.log("image div", props)
    if (props.img) {
    return(
        <div>
            <img className="user-avatar" src={props.img.link} alt={props.img.id} />
        </div>
    )
    } else {
        return (
            <div></div>
        )
    }
}
