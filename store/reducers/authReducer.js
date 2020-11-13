const initState = {
    status: false
};
const authReducer = (state = initState, action) => {
    switch (action.type) {
        case "LOGIN_SUCCESS":
            return {
                ...state,
                profile: action.profile,
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
                userId: null,
                loginError: null,
                registerError: null
            }
        }
        case "REGISTER_SUCCESS":
            return {
                ...state,
                //status: true,
                registerError: null,
                profile: action.profile
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
