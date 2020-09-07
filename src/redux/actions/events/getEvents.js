const GET_EVENTS = "GET_EVENTS"

export default function getEvents() {
    return function(dispatch) {
        fetch("http://localhost:3000/events")
        .then (resp => resp.json())
        .then (eventsObj => {
            dispatch({ type: GET_EVENTS, payload: eventsObj.events })
        })
    }
}

// *see getJobs for notes on actions / action creaters / THUNK