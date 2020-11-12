import firebaseApp from "../../config/firebaseConfig";

const firestore = firebaseApp.firestore();
export const signIn = (credentials) => {
    return (dispatch, getState) => {
        firebaseApp
            .auth()
            .signInWithEmailAndPassword(credentials.email, credentials.password)
            .then(response => {
                console.log(response.user.uid);
                dispatch({type: "LOGIN_SUCCESS", userId: response.user.uid});
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
                let error = "";
                switch (err.code) {
                    case "auth/email-already-in-use":
                        error = "The email address is already in use by another account."
                }
                dispatch({type: "REGISTER_ERROR", registerError: error});
                console.log("error is: ", err.code)
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
