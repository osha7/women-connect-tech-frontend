import React from 'react';
import {Image, Transformation, CloudinaryContext} from 'cloudinary-react';


export const UserImage = (props) => {
    // let image 
    // let imageUrlArray
    // let endImageUrl

// console.log("image div", props)
    if (props.avatar) {
        // let image = props.avatar.image
        // let imageUrlArray = image.split("/")
        // let endImageUrl = imageUrlArray.slice(-1).pop()
        // let fifthVariable = endImageUrl.split(".")
        // let sixthVariable = fifthVariable.slice(0,1).pop()
        // debugger
        

    return(
        <div className="user-image-square">
            {/* <Image publicId={props.avatar.image} cloud_name="djsz02nwd">
                <Transformation height="250" width="250" radius="2" gravity="faces" crop="fill"  />
            </Image>  */}
            <img className="user-avatar" src={props.avatar.link} alt={props.avatar.id} />
            {/* <img className="user-avatar" src={props.avatar.image} alt={props.avatar.id} /> */}
        </div>
    )
    } else {
        return (
            <div></div>
        )
    }
}


  