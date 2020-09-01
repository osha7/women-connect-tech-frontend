// reducers: are controllers (controller switchboard)

let initialState = {
    jobs: []
}

export default function jobsReducer(state = initialState, action) {
    switch(action.type) {
        case 'GET_JOBS':
            // console.log("We made it into the reducer!", action.payload)
            return {jobs: action.payload}

        case 'ADD_JOB':
            // console.log("WE MADE IT INTO THE INVOICE REDUCER, YAY!", {...state.jobs}, action.payload)
            // action.payload
            // {...state.jobs}
            // return {...state, }
            // return {jobs: action.payload.jobs}
            // return {...state.jobs}, action.payload
            // return {...state.jobs}
            const job = action.payload
            return { ...state, jobs: [job, ...state.jobs] }

        case 'DELETE_JOB':
            // return console.log('made it to delete reducer', state.jobs, action.payload.id)
            const jobs = state.jobs.filter(job => job.id !== action.payload.id)
            return { jobs }
    
        default:
            return state

    }
}