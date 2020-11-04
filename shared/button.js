import React from "react";
import {TouchableOpacity, Text, View} from "react-native";
import globalStyles from "../styles/globalStyles";

export default ({text, onPress, color, textColor}) => {
    return (
        <TouchableOpacity onPress={onPress} activeOpacity={0.5}>
            <View style={globalStyles({buttonColor: color}).button}>
                <Text style={globalStyles({buttonTextColor: textColor}).buttonText}>{text}</Text>
            </View>
        </TouchableOpacity>
    );
}
