import React from 'react';
// import {Image, Transformation, CloudinaryContext} from 'cloudinary-react';
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'

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


  {/* <Image publicId={String(props.id)} >
                <Transformation height="5" width="5" radius="2" />
                <Transformation overlay="text:arial_60:This is my picture" gravity="north" y="20" /> */}
                {/* <Transformation angle="20" />
            </Image>  */}