import firebaseApp from "../../config/firebaseConfig";

const firestore = firebaseApp.firestore();
export const addNote = (note) => {
    return (dispatch, getState) => {
        firestore
            .collection("notes")
            .add({
                ...note,
                authorId: getState().auth.userId,
                createdAt: new Date(),
            })
            .then(() => {
                dispatch({type: "ADD_NOTE_SUCCESS", note: note});
            })
            .catch(err => {
                dispatch({type: "ADD_NOTE_ERROR", addNoteError: err});
            });
    }
}
export const getNotes = () => {
    return (dispatch, getState) => {
        firestore
            .collection("notes")
            .where("authorId", "==", getState().auth.userId)
            .get()
            .then(snapshot => {
                console.log(snapshot.docs.map(doc => {
                    const userNotes = doc.data();
                    return {...userNotes, id: doc.id}
                }));
                dispatch({
                    type: "GET_NOTES_SUCCESS", notes: snapshot.docs.map(doc => {
                        const userNotes = doc.data();
                        return {...userNotes, noteId: doc.id}
                    }).sort((a, b) => (a.createdAt > b.createdAt) ? -1 : 1)
                });
            })
            .catch(err => {
                dispatch({type: "GET_NOTES_ERROR", getNotesError: err});
            });
    }
}
