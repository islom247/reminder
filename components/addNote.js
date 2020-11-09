import React, {useState} from "react";
import {connect} from "react-redux";
import {addNote} from "../store/actions/noteActions";
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableWithoutFeedback,
    Keyboard,
    ImageBackground,
    Dimensions
} from "react-native";
import {Formik} from "formik";
import * as yup from "yup";
import TextButton from "../shared/button";

const renderText = (text) => {
    return <Text>text</Text>
}
const reviewSchema = yup.object({
    title: yup.string()
        .required("Title cannot be empty.")
        .min(5, "Title should be at least 5 characters."),
    content: yup.string()
        .required("Content cannot be empty.")
        .min(10, "Content should be at least 10 characters.")
});
const AddNote = ({addNote}) => {
    return (
        <ImageBackground
            source={require("../assets/images/zzz.png")}
            style={styles.background}
            resizeMode="cover"
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.container}>
                    <Text style={styles.text}>NEW NOTE</Text>
                    <Formik
                        initialValues={{title: "", content: ""}}
                        validationSchema={reviewSchema}
                        onSubmit={(values, actions) => {
                            actions.resetForm();
                            console.log(values);
                            addNote(values);
                        }}
                    >
                        {(formikProps) => (
                            <>
                                {/*{renderText("Title")}*/}
                                <TextInput
                                    placeholder="Title"
                                    style={styles.input}
                                    onChangeText={formikProps.handleChange("title")}
                                    value={formikProps.values.title}
                                    onBlur={formikProps.handleBlur("title")}
                                />
                                <Text style={styles.errorText}>
                                    {formikProps.touched.title && formikProps.errors.title}
                                </Text>
                                <TextInput
                                    placeholder="Content"
                                    style={styles.input}
                                    multiline
                                    numberOfLines={4}
                                    onChangeText={formikProps.handleChange("content")}
                                    value={formikProps.values.content}
                                    onBlur={formikProps.handleBlur("content")}
                                />
                                <Text style={styles.errorText}>
                                    {formikProps.touched.content && formikProps.errors.content}
                                </Text>
                                <TextButton
                                    text="add"
                                    color="teal"
                                    textColor="white"
                                    onPress={formikProps.handleSubmit}
                                />
                            </>
                        )}
                    </Formik>
                </View>
            </TouchableWithoutFeedback>
        </ImageBackground>
    );
}
const mapDispatchToProps = (dispatch) => {
    return {
        addNote: (note) => dispatch(addNote(note))
    }
}
export default connect(null, mapDispatchToProps)(AddNote);
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    background: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    addButton: {
        height: 50,
        width: 50,
        backgroundColor: "coral",
        borderRadius: 100
    },
    text: {
        fontSize: 30,
        marginTop: 30,
        color: "black",
        fontWeight: "bold"
    },
    input: {
        borderWidth: 1,
        padding: 10,
        fontSize: 18,
        borderRadius: 6,
        width: "90%",
        marginTop: 20,
        backgroundColor: "#b2d8d8",
        textAlignVertical: "top",
        maxHeight: 300,
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
    errorText: {
        color: "crimson",
        fontWeight: "bold",
        marginBottom: 6,
        marginTop: 6,
        textAlign: "center"
    }
});
