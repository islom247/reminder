import firebaseApp from "../../config/firebaseConfig";

const firestore = firebaseApp.firestore();
export const signIn = (credentials) => {
    return (dispatch, getState) => {
        firebaseApp
            .auth()
            .signInWithEmailAndPassword(credentials.email, credentials.password)
            .then(response => {
                dispatch({type: "LOGIN_SUCCESS", profile: response.user});
            })
            .catch(err => {
                console.log("ERROR is: ", err.code);
                let error = "";
                switch (err.code) {
                    case "auth/user-not-found":
                        error = "Wrong email or password.";
                    case "auth/wrong-password":
                        error = "Wrong email or password."
                }
                error = error.length > 0 ? error : err.toString();
                dispatch({type: "LOGIN_ERROR", loginError: error});
            })
    }
}
export const register = (newUser) => {
    return (dispatch, getState) => {
        firebaseApp
            .auth()
            .createUserWithEmailAndPassword(newUser.email, newUser.password)
            .then(response => {
                console.log(response.user)
                response
                    .user
                    .updateProfile({
                        displayName: newUser.name
                    })
                    .then(response => {
                        console.log("user is", firebaseApp.auth().currentUser);
                        const user = firebaseApp.auth().currentUser;
                        dispatch({type: "REGISTER_SUCCESS", profile: user});
                    })
            })
            .catch(err => {
                let error = "";
                switch (err.code) {
                    case "auth/email-already-in-use":
                        error = "The email address is already in use by another account."
                }
                error = err.length > 0 ? error : err.toString();
                dispatch({type: "REGISTER_ERROR", registerError: error});
            })
    }
}
export const signOut = () => {
    return (dispatch, getState) => {
        firebaseApp
            .auth()
            .signOut()
            .then(() => {
                dispatch({type: "LOGOUT"});
                dispatch({type: "RESET_REDUCER"});
            });
    }
}
