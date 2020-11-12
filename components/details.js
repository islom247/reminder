import React from "react";
import {View, Text, StyleSheet, ScrollView} from "react-native";
import moment from "moment";
import Card from "../shared/card";

export default ({route}) => {
    return (
        <View style={styles.details}>
            <Card>
                <ScrollView showsVerticalScrollIndicator={true}>
                    <Text style={styles.headText}>Date of creation</Text>
                    <Text style={styles.text}>
                        {!(route.params.item.createdAt instanceof Date) ?
                            moment(route.params.item.createdAt.toDate()).format('MMMM Do YYYY, h:mm:ss a')
                            :
                            moment(route.params.item.createdAt).format('MMMM Do YYYY, h:mm:ss a')
                        }
                    </Text>
                    <Text style={styles.headText}>Title</Text>
                    <Text style={styles.text}>{route.params.item.title}</Text>
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
        //alignSelf: "center",
        color: "teal",
        fontSize: 15,
        paddingBottom: 16
    },
    headText: {
        //alignSelf: "center",
        letterSpacing: 0,
        lineHeight: 25,
        fontWeight: "bold",
        fontSize: 20,
        color: "black",
        flexWrap: "wrap",

    }
});
