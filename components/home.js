import React, {Component} from "react";
import {StyleSheet, View, Text, ImageBackground, FlatList, TouchableOpacity} from "react-native";
import Card from "../shared/card";
import globalStyles from "../styles/globalStyles";

class Home extends Component {
    render() {
        const texts = [
            {title: "First", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec."},
            {title: "Second", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec."},
            {title: "Third", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec."},
            {title: "Fourth", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec."},
            {title: "Fifth", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec."},
            {title: "Sixth", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec."},
            {title: "Seventh", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec."},
        ];
        return (
            <ImageBackground
                source={require("../assets/images/zzz.png")}
                style={globalStyles().container}
                resizeMode="cover"
            >
                <View>
                    <FlatList
                        data={texts}
                        renderItem={({item, index}) => (
                            <TouchableOpacity key={index} onPress={() => {
                                console.log(index);
                                this.props.navigation.navigate("Details", {item});
                            }}>
                                <Card>
                                    <Text style={{fontWeight: "bold"}}>{item.title}</Text>
                                    <Text>{item.content}</Text>
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

export default Home;
