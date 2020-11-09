const initState = {
    status: false
};
const authReducer = (state = initState, action) => {
    switch (action.type) {
        case "LOGIN_SUCCESS":
            return {
                ...state,
                status: true
            }
        case "LOGOUT": {
            return {
                ...state,
                status: false
            }
        }
        case "REGISTER_SUCCESS":
            return {
                ...state,
                status: true
            }
        case "REGISTER_ERROR": {
            return {
                ...state,
                register_error: action.register_error
            }
        }
        default:
            return state;
    }
}
export default authReducer;
