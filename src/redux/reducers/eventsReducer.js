
let initialState = {
    events: []
}

export default function eventsReducer(state = initialState, action) {
    switch(action.type) {
        case 'GET_EVENTS':
            return {events: action.payload}

        case 'DELETE_EVENT':
            const events = state.events.filter(event => event.id !== action.payload.id)
            return { events }

        default:
            return state;
    }
}