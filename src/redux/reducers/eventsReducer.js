
let initialState = {
    events: []
}

export default function eventsReducer(state = initialState, action) {
    switch(action.type) {
        case 'GET_EVENTS':
            return {events: action.payload}

        case 'ADD_EVENT':
            const event = action.payload
            return { ...state, events: [event, ...state.events] }

        case 'EDIT_EVENT':
            return { ...state, events: state.events.map(event => event.id === action.payload.id ? action.payload : event)}

        case 'DELETE_EVENT':
            const events = state.events.filter(event => event.id !== action.payload.id)
            return { events }

        default:
            return state;
    }
}