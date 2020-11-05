import React from "react";
import {View, Text} from "react-native";
import globalStyles from "../styles/globalStyles";

export default () => {
    return (
        <View style={globalStyles().container}>
            <Text>This is settings page</Text>
        </View>
    );
}
