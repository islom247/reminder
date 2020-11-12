import React from "react";
import {connect} from "react-redux";
import {signOut} from "../store/actions/authActions";
import {resetReducer} from "../store/actions/noteActions";
import {View, Text, Button, ImageBackground} from "react-native";
import globalStyles from "../styles/globalStyles";
import Card from "../shared/card";
import moment from "moment";
import firebase from "firebase";

const Settings = ({signOut, resetReducer, profile}) => {
    return (
        <ImageBackground
            source={require("../assets/images/zzz.png")}
            style={{...globalStyles().container, flexDirection: "column", marginTop: 24}}>
            <View style={{flex: 0.5}}>
                <Card>
                    <Text>This is settings page</Text>
                    <Text>Name: {profile.displayName}</Text>
                    <Text>Email: {profile.email}</Text>
                    <Text>Joined: {console.log(firebase.auth().currentUser.metadata)}</Text>
                    {/*<Text>Joined: {moment(profile.createdAt.toDate()).format('MMMM Do YYYY, h:mm:ss a')}</Text>*/}
                    <Text>This is settings page</Text>
                    <Text>This is settings page</Text>
                    <Text>This is settings page</Text>
                    <Text>This is settings page</Text>
                    <Text>This is settings page</Text>
                    <Text>This is settings page</Text>
                </Card>
            </View>
            <Button title="log out" onPress={() => {
                signOut();
                resetReducer();
            }}/>
        </ImageBackground>
    );
}
const mapStateToProps = (state) => {
    return {
        profile: state.auth.profile
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut()),
        resetReducer: () => dispatch(resetReducer())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Settings)
