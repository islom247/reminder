import React from "react";
import {View, Text} from "react-native";

export default ({route}) => {
    return (
        <View>
            <Text>Title: {route.params.item.title}</Text>
            <Text>Content: {route.params.item.content}</Text>
        </View>
    );
}
