
let initialState = {
    events: []
}

export default function eventsReducer(state = initialState, action) {
    switch(action.type) {
        case 'GET_EVENTS':
            // console.log(action.payload)
            const ap = (action.payload.sort(function(a, b) {
                const dateA = a.date
                const dateB = b.date
                if (dateA < dateB) {
                    return -1
                }
                if (dateA > dateB) {
                    return 1
                }
                return 0
            }))
            // return {events: action.payload}
            return {events: ap}
            

        case 'ADD_EVENT':
            // {console.log({...state}, state)}
            const event = action.payload
            // debugger
            // const aps = (state.events.sort(function(a, b) {
            //     const dateA = a.date
            //     const dateB = b.date
            //     if (dateA < dateB) {
            //         return -1
            //     }
            //     if (dateA > dateB) {
            //         return 1
            //     }
            //     return 0
            // }))
            // const sortedArrayWithEvent = aps.push(event)
            // debugger
            return { ...state, events: [event, ...state.events] }
            // return { ...state, events: aps.push(event)}
            // return {...state, events: [sortedArrayWithEvent]}
            // return {...state, events: event, ...aps}

        case 'EDIT_EVENT':
            return { ...state, events: state.events.map(event => event.id === action.payload.id ? action.payload : event)}

        case 'DELETE_EVENT':
            const events = state.events.filter(event => event.id !== action.payload.id)
            return { events }

        default:
            return state;
    }
}

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