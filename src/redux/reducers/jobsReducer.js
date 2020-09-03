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

        case 'EDIT_JOB':
            // return console.log("WE MADE IT INTO THE INVOICE REDUCER, YAY!", state.jobs.filter(job => job.id !== action.payload.id), {...state.jobs.filter(job => job.id !== action.payload.id)}, action.payload)
            // return console.log("WE MADE IT INTO THE INVOICE REDUCER, YAY!", {...state.jobs.filter(job => job.id !== action.payload.id)}, action.payload)
            const newJobObject = {...state.jobs.filter(job => job.id !== action.payload.id)}
            
            const editedJobObject = action.payload
            const newObject = { editedJobObject, ...newJobObject}
            // return console.log(newJobObject, editedJobObject, newObject)
            return { ...state, jobs: [newObject]}
            // return { ...state, jobs: [editedJobObject, ...newJobObject] }
            // return { ...state.jobs, jobs: [...newJobObject, editedJobObject]}
            
            // return { ...state, jobs: [...state.jobs] }
            // break;

        case 'DELETE_JOB':
            // return console.log('made it to delete reducer', state.jobs, action.payload.id)
            const jobs = state.jobs.filter(job => job.id !== action.payload.id)
            return { jobs }
    
        default:
            return state

    }
}