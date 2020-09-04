const GET_USER = "GET_USER"

export function getUser(data) {
    // console.log('in action, yay!', data)
    return function(dispatch) {
        fetch(`http://localhost:3000/users/${data}`)
            .then (resp => resp.json())
            .then (userObj =>{
                // console.log("dispatch fetch", userObj)
                dispatch({ type: GET_USER, payload: userObj })
            })
    }
}