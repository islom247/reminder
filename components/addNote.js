import React, {useState} from "react";
import {connect} from "react-redux";
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableWithoutFeedback,
    Keyboard,
    Image,
    View,
    ImageBackground,
    Dimensions,
    KeyboardAvoidingView,
    ToastAndroid,
    ScrollView
} from "react-native";
import {MaterialIcons} from '@expo/vector-icons';
import {Formik} from "formik";
import * as yup from "yup";
import TextButton from "../shared/button";
import {addNote} from "../store/actions/noteActions";
import * as ImagePicker from "expo-image-picker";

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
    const [image, setImage] = useState(null);
    const pickImage = async () => {
        let result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1
        })
        console.log(result);
        if (!result.cancelled) {
            setImage(result.uri);
        }
    }
    return (

        <ImageBackground
            source={require("../assets/images/zzz.png")}
            style={styles.background}
            resizeMode="cover"
        >
            <ScrollView style={{flex: 1}}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <KeyboardAvoidingView style={styles.container} behavior="padding">
                        <Text style={styles.text}>NEW NOTE</Text>
                        <Formik
                            initialValues={{title: "", content: ""}}
                            validationSchema={reviewSchema}
                            onSubmit={(values, actions) => {
                                Keyboard.dismiss();
                                actions.resetForm();
                                console.log(values);
                                addNote(values);
                                if (!addNoteError) {
                                    ToastAndroid.showWithGravity(
                                        "Note added successfully!",
                                        ToastAndroid.SHORT,
                                        ToastAndroid.BOTTOM
                                    );
                                }
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
                                    <Text>add a photo</Text>
                                    <MaterialIcons
                                        name="add-a-photo"
                                        size={50}
                                        color="teal"
                                        style={styles.addPhotoButton}
                                        onPress={pickImage}
                                    />
                                    {image && <Image source={{uri: image}} style={{width: 160, height: 120}}/>}
                                    <TextButton
                                        text="add"
                                        color="teal"
                                        textColor="white"
                                        onPress={formikProps.handleSubmit}
                                        style={styles.addPhotoButton}
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
            </ScrollView>
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
    addPhotoButton: {
        marginBottom: 10,
        borderWidth: 1,
        borderColor: "teal",
        padding: 5,
        borderRadius: 10,
        alignSelf: "center",
        //marginTop: 0
    },
    text: {
        fontSize: 30,
        marginTop: 10,
        color: "black",
        fontWeight: "bold",
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
        maxHeight: 120,
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
    errorText: {
        color: "crimson",
        fontWeight: "bold",
        marginBottom: 6,
        marginTop: 6,
        textAlign: "center"
    }
});
