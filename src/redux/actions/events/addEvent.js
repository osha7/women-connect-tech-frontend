const ADD_EVENT = "ADD_EVENT"

export const addEvent = (data) => {
    return ((dispatch) => {
        fetch('http://localhost:3000/events', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data)
        })
        .then(resp => resp.json())
        .then(eventObj => dispatch({ type: ADD_EVENT, payload: eventObj }))
    })
}