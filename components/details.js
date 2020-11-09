import React from "react";
import {View, Text, StyleSheet, ScrollView} from "react-native";
import Card from "../shared/card";

export default ({route}) => {
    return (
        <View style={styles.details}>
            <Card>
                <ScrollView showsVerticalScrollIndicator={true}>
                    <Text style={styles.headText}>Title</Text>
                    <Text style={{...styles.text, fontWeight: "bold", fontSize: 15, paddingBottom: 15}}>{route.params.item.title}</Text>
                    <Text style={styles.headText}>Content</Text>
                    <Text style={styles.text}>{route.params.item.content}</Text>
                </ScrollView>
            </Card>
        </View>
    );
}
const styles = StyleSheet.create({
    details: {
        margin: 10,
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-start",
    },
    text: {
        lineHeight: 25,
        alignSelf: "center",
        color: "teal",
        fontSize: 15
    },
    headText: {
        alignSelf: "center",
        letterSpacing: 1,
        lineHeight: 25,
        fontWeight: "bold",
        fontSize: 20,
        color: "black",
        flexWrap: "wrap"
    }
});
