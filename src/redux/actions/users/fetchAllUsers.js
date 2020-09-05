
const FETCH_ALL_USERS = "FETCH_ALL_USERS"

export function fetchAllUsers(data) { 
    // console.log("Fetch All Users", data)
    return function(dispatch) {
        fetch("http://localhost:3000/users")
            .then (resp => resp.json())
            .then (usersObj => {
                // console.log("Users", usersObj)
                dispatch({ type: FETCH_ALL_USERS, payload: usersObj })
            })
    }
}
