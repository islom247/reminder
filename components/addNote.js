import React from "react";
import {connect} from "react-redux";
import {addNote} from "../store/actions/noteActions";
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableWithoutFeedback,
    Keyboard,
    ImageBackground,
    Dimensions,
    KeyboardAvoidingView
} from "react-native";
import {Formik} from "formik";
import * as yup from "yup";
import TextButton from "../shared/button";

const reviewSchema = yup.object({
    title: yup.string()
        .required("Title cannot be empty.")
        .min(5, "Title should be at least 5 characters."),
    content: yup.string()
        .required("Content cannot be empty.")
        .min(10, "Content should be at least 10 characters.")
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
const AddNote = ({addNote, addNoteError}) => {
    return (
        <ImageBackground
            source={require("../assets/images/zzz.png")}
            style={styles.background}
            resizeMode="cover"
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <KeyboardAvoidingView style={styles.container} behavior="padding">
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
                                {renderError(formikProps, "title")}
                                <TextInput
                                    placeholder="Content"
                                    style={styles.input}
                                    multiline
                                    numberOfLines={4}
                                    onChangeText={formikProps.handleChange("content")}
                                    value={formikProps.values.content}
                                    onBlur={formikProps.handleBlur("content")}
                                />
                                {renderError(formikProps, "content")}
                                <TextButton
                                    text="add"
                                    color="teal"
                                    textColor="white"
                                    onPress={formikProps.handleSubmit}
                                />
                                {
                                    addNoteError &&
                                    <Text style={styles.errorText}>
                                        {addNoteError}
                                    </Text>
                                }
                            </>
                        )}
                    </Formik>
                </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
        </ImageBackground>
    );
}
const mapStateToProps = (state) => {
    return {
        addNoteError: state.note.addNoteError
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addNote: (note) => dispatch(addNote(note))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddNote);
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
        marginTop: 24
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
