let initialState = {
    users: []
}

export default function usersReducer(state = initialState, action) {
    switch(action.type) {
        case 'GET_USER':
            // return (console.log("User Reducer! YAY!", state, action.payload));
            return {users: action.payload}
        
        default: 
            return state
    }
}