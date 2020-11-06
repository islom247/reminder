export const signIn = () => {
    return (dispatch, getState) => {
        dispatch({type: "LOGIN_SUCCESS"});
    }
}
