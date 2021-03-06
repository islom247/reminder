import React, {Component} from "react";
import {connect} from "react-redux";
import {ActivityIndicator, StyleSheet, View, Text, ImageBackground, FlatList, TouchableOpacity} from "react-native";
import Card from "../shared/card";
import {getNotes} from "../store/actions/noteActions";
import globalStyles from "../styles/globalStyles";

class Home extends Component {
    componentDidMount() {
        this.props.getNotes();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        //this.props.getNotes();
    }

    render() {
        const {notes, getNotesError} = this.props;
        return (
            <ImageBackground
                source={require("../assets/images/zzz.png")}
                style={{...globalStyles().container, alignItems: "center"}}
            >
                <View style={styles.card}>
                    {getNotesError ?
                        <Text>{getNotesError}</Text>
                        :
                        !notes ? <ActivityIndicator
                                size="large"
                                color="teal"
                            /> :
                            notes.length === 0 ?
                                <Text style={styles.text}>You haven't created any notes yet.</Text> :
                                <FlatList
                                    data={notes}
                                    renderItem={({item, index}) => (
                                        <TouchableOpacity key={index} onPress={() => {
                                            console.log(index);
                                            this.props.navigation.navigate("Details", {item});
                                        }}>
                                            <Card>
                                                <Text style={{fontWeight: "bold"}}>{item.title}</Text>
                                                <Text numberOfLines={2}>{item.content}</Text>
                                            </Card>
                                        </TouchableOpacity>
                                    )}
                                    keyExtractor={(item, index) => index.toString()}
                                    showsVerticalScrollIndicator={false}
                                />}
                </View>
            </ImageBackground>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        notes: state.note.notes,
        getNotesError: state.note.getNotesError
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getNotes: () => dispatch(getNotes())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
const styles = StyleSheet.create({
    card: {
        margin: 10,
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-start",
    },
    text: {
        fontSize: 18,
        fontWeight: "bold",
        color: "crimson"
    }
});
