import React from "react";
import {connect} from "react-redux";
import {signOut} from "../store/actions/authActions";
import {View, Text, Button} from "react-native";
import globalStyles from "../styles/globalStyles";

const Settings = ({signOut}) => {
    return (
        <View style={globalStyles().container}>
            <Text>This is settings page</Text>
            <Button title="log out" onPress={() => signOut()}/>
        </View>
    );
}
const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}
export default connect(null, mapDispatchToProps)(Settings)
