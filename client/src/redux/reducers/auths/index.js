const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    user: null
};

export const auths = (state = initialState, action) => {
    const { type, payload } = action;
    
    switch (action.type) {
        case "USER_LOADED":
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                user: payload
            };
        case "REGISTER_SUCCESS":
        case "LOGIN_SUCCESS":
            return {
                ...state,
                ...payload,
                isAuthenticated: true,
                loading: false
            };
        case "ACCOUNT_DELETED":
        case "AUTH_ERROR":
        case "LOGOUT":
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false,
                user: null
            };
        default:
            return state;
    }
};
