
let initialState = {
    users: []
}

export default function usersReducer(state = initialState, action) {
    switch(action.type) {

        case 'GET_USER':
            // return (console.log("User Reducer! YAY!", state, action.payload));
            return {users: action.payload};

        case 'EDIT_USER':
            return {users: action.payload};
            // return { state }
            // return (console.log("Edit In USER REDUCER", action.payload))
            // return {...state, jobs: state.jobs.map(job => job.id === action.payload.id ? action.payload : job)}
        
        case 'FETCH_ALL_USERS':
            // return (console.log("USERS REDUCER, YAY!", action.payload))
            return {users: action.payload}

        default: 
            return state
    }
}