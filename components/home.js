import React, {Component} from "react";
import {connect} from "react-redux";
import {StyleSheet, View, Text, ImageBackground, FlatList, TouchableOpacity} from "react-native";
import Card from "../shared/card";
import globalStyles from "../styles/globalStyles";

class Home extends Component {
    render() {
        const {notes} = this.props;
        return (
            <ImageBackground
                source={require("../assets/images/zzz.png")}
                style={globalStyles().container}
                resizeMode="cover"
            >
                <View>
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
                    />
                </View>
            </ImageBackground>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        notes: state.note.notes
    }
}
export default connect(mapStateToProps)(Home);
