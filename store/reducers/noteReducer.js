const initState = {
    // notes: [
    //     {
    //         title: "First",
    //         content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec."
    //     },
    //     {title: "Second", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec."},
    //     {title: "Third", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec."},
    //     {title: "Fourth", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec."},
    //     {title: "Fifth", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec."},
    //     {title: "Sixth", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec."},
    //     {title: "Seventh", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec."},
    // ]
};
const noteReducer = (state = initState, action) => {
    switch (action.type) {
        case "ADD_NOTE_SUCCESS":
            return {
                ...state,
                notes: [action.note, ...state.notes],
                addNoteError: null
            }
        case "ADD_NOTE_ERROR":
            return {
                ...state,
                addNoteError: action.addNoteError
            }
        case "GET_NOTES_SUCCESS":
            console.log("notes", action.notes)
            return {
                ...state,
                notes: action.notes
            }
        case "GET_NOTES_ERROR":
            return {
                ...state,
                getNotesError: action.getNotesError
            }
        case "RESET_REDUCER" :
            return {
                ...state,
                notes: null,
                addNoteError: null,
                getNotesError: null
            }
        default:
            return state;
    }
}
export default noteReducer;
