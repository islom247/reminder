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
        default:
            return state;
    }
}
export default authReducer;
