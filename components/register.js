import React from "react";
import {
    StyleSheet,
    View,
    TextInput,
    Keyboard,
    TouchableWithoutFeedback,
    Dimensions,
    ImageBackground,
    Text,
} from "react-native";
import {connect} from "react-redux";
import {Formik} from "formik";
import * as yup from "yup";
import {register} from "../store/actions/authActions";
import TextButton from "../shared/button";

const reviewSchema = yup.object({
    name: yup.string()
        .required("Name cannot be empty")
        .min(5, "Name should be at least 5 characters"),
    email: yup.string()
        .email("Email must be a valid email")
        .required("Email cannot be empty"),
    password: yup
        .string()
        .required("Password cannot be empty")
        .min(6, "Password should be at least 6 characters")
        .matches(/[a - zA - Z]/, "Password can only contain Latin letters")
});
const Register = ({navigation, register, register_error}) => {
    return (
        <ImageBackground
            source={require("../assets/images/zzz.png")}
            style={styles.container}
            resizeMode="cover"
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.container}>
                    <Formik
                        initialValues={{name: "", email: "", password: ""}}
                        validationSchema={reviewSchema}
                        onSubmit={(values, actions) => {
                            actions.resetForm();
                            console.log(values);
                            register({name: values.name, email: values.email, password: values.password});
                        }}
                    >
                        {(formikProps) => (
                            <>
                                <TextInput
                                    placeholder="Name (e.g. John Doe)"
                                    style={styles.input}
                                    onChangeText={formikProps.handleChange("name")}
                                    value={formikProps.values.name}
                                    onBlur={formikProps.handleBlur("name")}
                                />
                                {formikProps.touched.name &&
                                <Text style={styles.errorText}>
                                    {formikProps.errors.name}
                                </Text>
                                }
                                <TextInput
                                    placeholder="Email"
                                    style={styles.input}
                                    onChangeText={formikProps.handleChange("email")}
                                    value={formikProps.values.email}
                                    onBlur={formikProps.handleBlur("email")}
                                />

                                {formikProps.touched.email &&
                                <Text style={styles.errorText}>
                                    {formikProps.errors.email}
                                </Text>
                                }
                                <TextInput
                                    placeholder="Password"
                                    style={styles.input}
                                    secureTextEntry={true}
                                    onChangeText={formikProps.handleChange("password")}
                                    value={formikProps.values.password}
                                    onBlur={formikProps.handleBlur("password")}
                                />

                                {formikProps.touched.password &&
                                <Text style={styles.errorText}>
                                    {formikProps.errors.password}
                                </Text>
                                }

                                <TextButton
                                    text="Register"
                                    color="teal"
                                    textColor="white"
                                    onPress={formikProps.handleSubmit}
                                />
                                {
                                    register_error &&
                                    <Text style={styles.errorText}>
                                        {register_error.toString()}
                                    </Text>
                                }
                            </>
                        )}
                    </Formik>
                </View>
            </TouchableWithoutFeedback>
        </ImageBackground>
    );
}
const mapStateToProps = (state) => {
    return {
        register_error: state.auth.register_error
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        register: (newUser) => dispatch(register(newUser))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Register);
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
        borderColor: "#505050",
        elevation: 3,
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowColor: "#333",
        shadowOpacity: 0.3,
        shadowRadius: 2,
    },
    background: {
        flex: 1,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#eee",
        opacity: 0.2
    },
    text: {
        fontSize: 18,
        marginTop: 20,
        color: "black"
    },
    errorText: {
        color: "crimson",
        fontWeight: "bold",
        marginBottom: 6,
        marginTop: 6,
        textAlign: "center"
    }
});
