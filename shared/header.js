import React from "react";
import {StyleSheet, ImageBackground, Text, Dimensions, View} from "react-native";

export default ({title}) => {
    return (
        <ImageBackground source={require("../assets/images/zzz.png")} style={styles.header}>
            <Text style={styles.headerText}>{title}</Text>
        </ImageBackground>
    );
}
const styles = StyleSheet.create({
    header: {
        width: Dimensions.get("window").width,
        height: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "coral",
    },
    headerText: {
        fontWeight: "bold",
        fontSize: 20,
        color: "#333",
        letterSpacing: 1
    }
});
