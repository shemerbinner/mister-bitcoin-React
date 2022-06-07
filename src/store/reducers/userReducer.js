const INITIAL_STATE = {
    loggedInUser: null
}

export function userReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        // case 'SIGNUP':
        //     return {
        //         ...state,
        //         loggedInUser: { ...action.user }
        //     };
        case 'SET_LOGGEDIN_USER':
            return {
                ...state,
                loggedInUser: { ...action.user }
            };

        default:
            return state;
    }
}