const initState = {
    status: false
};
const authReducer = (state = initState, action) => {
    switch (action.type) {
        case "LOGIN_SUCCESS":
            return {
                ...state,
                status: true,
                loginError: null
            }
        case "LOGIN_ERROR":
            return {
                ...state,
                loginError: action.loginError
            }
        case "LOGOUT": {
            return {
                ...state,
                status: false,
                loginError: null,
                registerError: null
            }
        }
        case "REGISTER_SUCCESS":
            return {
                ...state,
                status: true,
                registerError: null
            }
        case "REGISTER_ERROR": {
            return {
                ...state,
                registerError: action.registerError
            }
        }
        default:
            return state;
    }
}
export default authReducer;
