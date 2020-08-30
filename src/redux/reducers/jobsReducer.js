// reducers: are controllers (controller switchboard)

let initialState = {
    jobs: []
}

export default function jobsReducer(state = initialState, action) {
    switch(action.type) {
        case 'GET_JOBS':
            return {jobs: action.payload}

        case 'ADD_JOBS':
            return {...state, }

        default:
            return state

    }
}