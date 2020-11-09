export const addNote = (note) => {
    return (dispatch, getState) => {
        dispatch({type: "ADD_NOTE", note: note});
    }
}
