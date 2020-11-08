import React from "react";
import {StyleSheet, ImageBackground, Text, Dimensions, View} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {AntDesign} from '@expo/vector-icons';

export default ({title, details}) => {
    const navigation = useNavigation();
    return (
        <ImageBackground source={require("../assets/images/zzz.png")} style={styles.header}>
            {details ?
                <AntDesign
                    name="back"
                    size={24}
                    color="black"
                    style={styles.icon}
                    onPress={() => navigation.goBack()}
                />
                : null}
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
    },
    icon: {
        position: "absolute",
        left: 16
    }
});
