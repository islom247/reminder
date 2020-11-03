import {StyleSheet} from "react-native";
export default (props) => {
    return StyleSheet.create({
        button: {
            borderRadius: 8,
            paddingVertical: 14,
            paddingHorizontal: 10,
            backgroundColor: props.buttonColor ?? "#f01d71",
            marginTop: 20,
            width: 120,
        },
        buttonText: {
            color: props.buttonTextColor ?? "white",
            fontWeight: "bold",
            textTransform: "uppercase",
            fontSize: 16,
            textAlign: "center"
        }
    });
}
