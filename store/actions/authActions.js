import firebaseApp from "../../config/firebaseConfig";

const firestore = firebaseApp.firestore();
export const signIn = () => {
    return (dispatch, getState) => {
        dispatch({type: "LOGIN_SUCCESS"});
    }
}
export const register = (newUser) => {
    return (dispatch, getState) => {
        firebaseApp
            .auth()
            .createUserWithEmailAndPassword(newUser.email, newUser.password)
            .then(response => {
                console.log(response);
                return firestore
                    .collection("users")
                    .doc(response.user.uid)
                    .set({
                        name: newUser.name,
                        joined: new Date(),
                        email: newUser.email
                    });
            })
            .then(() => {
                dispatch({type: "REGISTER_SUCCESS"});
            })
            .catch(err => {
                dispatch({type: "REGISTER_ERROR", register_error: err});
                console.log("error is: ", err)
            })
    }
}
export const signOut = () => {
    return (dispatch, getState) => {
        dispatch({type: "LOGOUT"});
    }
}
