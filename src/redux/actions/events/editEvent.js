const EDIT_EVENT = "EDIT_EVENT"

export const editEvent = (data) => {
    return (dispatch) => {
        return fetch(`http://localhost:3000/events/${data.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(resp => resp.json())
        .then(eventObj => dispatch({ type: EDIT_EVENT, payload: eventObj}))
    }
}