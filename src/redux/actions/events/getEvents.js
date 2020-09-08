const GET_EVENTS = "GET_EVENTS"

export default function getEvents() {
    return function(dispatch) {
        fetch("http://localhost:3000/events")
        .then (resp => resp.json())
        .then (eventsObj => {
            dispatch({ 
                type: GET_EVENTS, 
                payload: eventsObj.events 
            })
        })
    }
}

// *see getJobs for notes on actions / action creaters / THUNK


// .then( json => {
    // json.sort(function(a, b) {
    //     const nameA = a.name.toUpperCase()
    //     const nameB = b.name.toUpperCase()
    //     if (nameA < nameB) {
    //         return -1
    //     }
    //     if (nameA > nameB) {
    //         return 1
    //     }
    //     return 0
    // })
   