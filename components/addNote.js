import React, {useState} from "react";
import {AntDesign} from '@expo/vector-icons';
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
import TextButton from "../shared/button";

const renderText = (text) => {
    return <Text>text</Text>
}
export default () => {
    return (
        <ImageBackground
            source={require("../assets/images/zzz.png")}
            style={styles.background}
            resizeMode="cover"
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.container}>
                    <Text style={styles.text}>NEW NOTE</Text>
                    {/*{renderText("Title")}*/}
                    <TextInput
                        placeholder="Title"
                        style={styles.input}
                    />
                    <TextInput
                        placeholder="Content"
                        style={styles.input}
                        multiline
                        numberOfLines={4}
                    />
                    <TextButton
                        text="add"
                        color="teal"
                        textColor="white"
                        onPress={() => console.log("added")}
                        style={{position: "absolute"}}
                    />
                </View>
            </TouchableWithoutFeedback>
        </ImageBackground>
    );
}
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
        borderColor: "#ddd",
        padding: 10,
        fontSize: 18,
        borderRadius: 6,
        width: "90%",
        marginTop: 20,
        backgroundColor: "#b2d8d8",
        textAlignVertical: "top",
        maxHeight: 300
    },
});
