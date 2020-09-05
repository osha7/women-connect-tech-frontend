const EDIT_USER = "EDIT_USER"

const editUser = (data) => {
   console.log("EDIT USER ACTION", data)
    return (dispatch) => {
        return fetch(`http://localhost:3000/users/${data.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                ...data,
                avatar_attributes: {
                    link: data.avatar,
                    // image: data.avatar.image,
                    // video: data.avatar.video,
                    // user_id: data.avatar.video
                }
            })
        })
        .then(resp => resp.json())
        .then(userObj => {
            // console.log(userObj)
            dispatch({type: EDIT_USER, payload: userObj})
        })
    }
}

export default editUser;