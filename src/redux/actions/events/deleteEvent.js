const DELETE_EVENT = "DELETE_EVENT"

const deleteEvent = (id) => {
    // console.log(id)
    return (dispatch) => {
        return fetch(`http://localhost:3000/events/${id}`, {
            method: "DELETE"
        })
        .then(resp => resp.json())
        .then(eventObj => dispatch({type: DELETE_EVENT, payload: eventObj}))
    }
}

export default deleteEvent;