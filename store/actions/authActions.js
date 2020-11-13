import firebaseApp from "../../config/firebaseConfig";

const firestore = firebaseApp.firestore();
export const signIn = (credentials) => {
    return (dispatch, getState) => {
        firebaseApp
            .auth()
            .signInWithEmailAndPassword(credentials.email, credentials.password)
            .then(response => {
                if (response.user.emailVerified) {
                    dispatch({type: "LOGIN_SUCCESS", profile: response.user});
                } else {
                    dispatch({
                        type: "LOGIN_ERROR",
                        loginError: "Your email address is not verified.\nCheck your inbox for an email with verification link."
                    });
                }
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
                        return user.sendEmailVerification();
                        //dispatch({type: "REGISTER_SUCCESS", profile: user});
                    })
                    .then(response => {
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
