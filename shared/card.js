import React from "react";
import {StyleSheet, View} from "react-native";

export default (props) => {
    return (
        <View style={styles.card}>
            <View style={styles.cardContent}>
                {props.children}
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    card: {
        borderColor: "#505050",
        borderWidth: 1,
        borderRadius: 6,
        elevation: 3,
        backgroundColor: "#fff",
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowColor: "#333",
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 0,
        marginVertical: 6
    },
    cardContent: {
        marginHorizontal: 18,
        marginVertical: 10
    }
});
