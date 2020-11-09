const initState = {
    notes: [
        {title: "First", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec."},
        {title: "Second", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec."},
        {title: "Third", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec."},
        {title: "Fourth", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec."},
        {title: "Fifth", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec."},
        {title: "Sixth", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec."},
        {title: "Seventh", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec."},
    ]
};
const noteReducer = (state = initState, action) => {
    switch (action.type) {
        case "ADD_NOTE":
            return {
                ...state,
                notes: [action.note, ...state.notes]
            }
        default:
            return state;
    }
}
export default noteReducer;
