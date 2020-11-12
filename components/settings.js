import React from "react";
import {connect} from "react-redux";
import {signOut} from "../store/actions/authActions";
import {resetReducer} from "../store/actions/noteActions";
import {View, Text, Button, ImageBackground, StyleSheet} from "react-native";
import globalStyles from "../styles/globalStyles";
import Card from "../shared/card";
import TextButton from "../shared/button";

const Settings = ({signOut, resetReducer, profile}) => {
    return (
        <ImageBackground
            source={require("../assets/images/zzz.png")}
            style={{...globalStyles().container, flexDirection: "column", marginTop: 24}}>
            <View style={{flex: 0.6}}>
                <Text style={styles.pageTitle}>Profile Information</Text>
                <Card>
                    <Text style={styles.headText}>Name</Text>
                    <Text style={styles.text}>{profile.displayName}</Text>
                    <Text style={styles.headText}>Email</Text>
                    <Text style={styles.text}>{profile.email}</Text>
                    <Text style={styles.headText}>Joined</Text>
                    <Text style={styles.text}>{profile.metadata.creationTime}</Text>
                    <Text style={styles.headText}>Last login</Text>
                    <Text style={styles.text}>{profile.metadata.lastSignInTime}</Text>
                </Card>
            </View>
            <View style={{alignSelf: "center"}}>
                <TextButton
                    text="Log Out"
                    color="crimson"
                    textColor="white"
                    onPress={() => {
                        signOut();
                        resetReducer();
                    }}
                />
            </View>
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
const styles = StyleSheet.create({
    pageTitle: {
        alignSelf: "center",
        fontSize: 20,
        fontWeight: "bold"
    },
    text: {
        lineHeight: 25,
        //alignSelf: "center",
        color: "teal",
        fontSize: 15,
        paddingBottom: 1
    },
    headText: {
        //alignSelf: "center",
        letterSpacing: 0,
        lineHeight: 25,
        fontWeight: "bold",
        fontSize: 15,
        color: "black",
        flexWrap: "wrap",
    }
});
