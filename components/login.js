import React from "react";
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    Keyboard,
    TouchableWithoutFeedback,
    Dimensions,
    ImageBackground
} from "react-native";
import {connect} from "react-redux";
import {Formik} from "formik";
import * as yup from "yup";
import {signIn} from "../store/actions/authActions";
import {setImageLoaded} from "../store/actions/componentActions";
import TextButton from "../shared/button";

const reviewSchema = yup.object({
    email: yup.string()
        .required("Email cannot be empty")
        .email("Email must be a valid email"),
    password: yup.string()
        .required("Password cannot empty")
});
const renderError = (formikProps, inputFieldName) => {
    if (formikProps.touched[inputFieldName] &&
        formikProps.errors[inputFieldName] &&
        formikProps.errors[inputFieldName].length > 0) {
        return (
            <Text style={styles.errorText}>
                {formikProps.errors[inputFieldName]}
            </Text>
        );
    }
}
const Login = ({navigation, signIn, loginError, imageLoaded, setImageLoaded}) => {
    return (
        <ImageBackground
            source={require("../assets/images/zzz.png")}
            style={styles.container}
            resizeMode="cover"
            onLoad={() => setImageLoaded()}
        >
            {!imageLoaded ? null :
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View
                        style={styles.container}
                    >
                        <Formik
                            initialValues={{email: "", password: ""}}
                            validationSchema={reviewSchema}
                            onSubmit={(values, action) => {
                                console.log(values);
                                signIn(values);
                            }}
                        >
                            {(formikProps) => (
                                <>
                                    <TextInput
                                        placeholder="Email"
                                        style={styles.input}
                                        onChangeText={formikProps.handleChange("email")}
                                        value={formikProps.values.email}
                                        onBlur={formikProps.handleBlur("email")}
                                    />
                                    {renderError(formikProps, "email")}
                                    <TextInput
                                        placeholder="Password"
                                        style={styles.input}
                                        secureTextEntry={true}
                                        onChangeText={formikProps.handleChange("password")}
                                        value={formikProps.values.password}
                                        onBlur={formikProps.handleBlur("password")}
                                    />
                                    {renderError(formikProps, "password")}
                                    <TextButton
                                        text="Log In"
                                        color="teal"
                                        textColor="white"
                                        onPress={formikProps.handleSubmit}
                                    />
                                    {
                                        loginError &&
                                        <Text style={styles.errorText}>
                                            {loginError}
                                        </Text>
                                    }
                                    <View style={styles.divider}/>
                                    <Text style={styles.text}>Don't have an account yet?</Text>
                                    <TextButton text="Register" color="teal" textColor="white"
                                                onPress={() => navigation.navigate("Register")}/>
                                </>
                            )}
                        </Formik>
                    </View>
                </TouchableWithoutFeedback>
            }
        </ImageBackground>
    );
}
const mapStateToProps = (state) => {
    return {
        loginError: state.auth.loginError,
        imageLoaded: state.component.imageLoaded
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (credentials) => dispatch(signIn(credentials)),
        setImageLoaded: () => dispatch(setImageLoaded())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);
const styles = StyleSheet.create({
    container: {
        flex: 1,
        //padding: 24,
        alignItems: "center",
        justifyContent: "center",
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    input: {
        borderWidth: 1,
        padding: 10,
        fontSize: 18,
        borderRadius: 6,
        width: "70%",
        marginTop: 20,
        backgroundColor: "#b2d8d8",
        borderColor: "teal",
        elevation: 3,
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowColor: "#333",
        shadowOpacity: 0.3,
        shadowRadius: 2,
    },
    text: {
        fontSize: 18,
        marginTop: 20,
        color: "black"
    },
    divider: {
        borderWidth: 1,
        width: "75%",
        borderColor: "#888",
        marginTop: 20
    },
    errorText: {
        color: "crimson",
        fontWeight: "bold",
        marginBottom: 6,
        marginTop: 6,
        textAlign: "center",
        marginHorizontal: 10
    }
});
