export const setImageLoaded = () => {
    return (dispatch, getState) => {
        dispatch({type: "IMAGE_LOADED", imageLoaded: true});
    }
}
