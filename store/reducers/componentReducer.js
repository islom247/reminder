const initState = {
    imageLoaded: false
}
const componentReducer = (state = initState, action) => {
    switch (action.type) {
        case "IMAGE_LOADED":
            return {
                ...state,
                imageLoaded: action.imageLoaded
            }
        default:
            return state
    }
}
export default componentReducer;
