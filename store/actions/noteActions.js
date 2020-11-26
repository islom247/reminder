import firebaseApp from "../../config/firebaseConfig";

const firestore = firebaseApp.firestore();
const storage = firebaseApp.storage();
export const addNote = (note) => {
    return (dispatch, getState) => {
        let creationTime = new Date();
        console.log("Image is : ", note.image);
        firestore
            .collection("notes")
            .add({
                ...note,
                authorId: getState().auth.profile.uid,
                createdAt: creationTime,
            })
            .then(async (response) => {
                console.log("addition log", response.get());
                const resp = await fetch(note.image);
                const blob = await resp.blob();
                storage
                    .ref()
                    .child("image")
                    .put(blob)
                    .then(() => {
                        dispatch({type: "ADD_NOTE_SUCCESS", note: {...note, createdAt: creationTime}});
                    })
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
            .where("authorId", "==", getState().auth.profile.uid)
            .get()
            .then(snapshot => {
                console.log(snapshot.docs.map(doc => {
                    const userNotes = doc.data();
                    return {...userNotes, id: doc.id}
                }));
                dispatch({
                    type: "GET_NOTES_SUCCESS",
                    notes: snapshot.docs.map(doc => {
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
export const resetReducer = () => {
    return (dispatch, getState) => {
        dispatch({type: "RESET_REDUCER"});
    }
}
