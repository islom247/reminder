export const signIn = () => {
    return (dispatch, getState) => {
        dispatch({type: "LOGIN_SUCCESS"});
    }
}
export const register = () => {
    return (dispatch, getState) => {
        dispatch({type: "REGISTER_SUCCESS"});
    }
}
export const signOut = () => {
    return (dispatch, getState) => {
        dispatch({type: "LOGOUT"});
    }
}
