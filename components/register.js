import React from "react";
import {
    StyleSheet,
    View,
    TextInput,
    Keyboard,
    TouchableWithoutFeedback,
    Dimensions,
    ImageBackground,
} from "react-native";
import TextButton from "../shared/button";

export default () => {
    return (
        <ImageBackground
            source={require("../assets/images/zzz.png")}
            style={styles.container}
            resizeMode="cover"
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.container}>
                    <TextInput
                        placeholder="Name (e.g. John Doe)"
                        style={styles.input}
                    />
                    <TextInput
                        placeholder="Email"
                        style={styles.input}
                    />
                    <TextInput
                        placeholder="Password"
                        style={styles.input}
                        secureTextEntry={true}
                    />
                    <TextButton text="Register" color="teal" textColor="white"/>
                </View>
            </TouchableWithoutFeedback>
        </ImageBackground>
    );
}
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
        borderColor: "#ddd",
        padding: 10,
        fontSize: 18,
        borderRadius: 6,
        width: "70%",
        marginTop: 20,
        backgroundColor: "#b2d8d8"
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
    divider: {
        borderWidth: 1,
        width: "75%",
        borderColor: "#888",
        marginTop: 20
    }
});
