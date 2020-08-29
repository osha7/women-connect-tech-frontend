// reducers: are controllers (controller switchboard)

let initialState = {

}

export default function jobsReducer(state = initialState, action) {
    switch(action.type) {
        case 'ADD_JOBS':
            return {...state, }

        default:
            return state

    }
}