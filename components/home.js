import React, {Component} from "react";
import {StyleSheet, View, Text} from "react-native";
import Card from "../shared/card";

class Home extends Component {
    render() {
        return (
            <View>
                <Card>
                    <Text>Text inside a cardsssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss</Text>
                </Card><Card>
                    <Text>Text inside a cardsssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss</Text>
                </Card><Card>
                    <Text>Text inside a cardsssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss</Text>
                </Card><Card>
                    <Text>Text inside a cardsssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss</Text>
                </Card><Card>
                    <Text>Text inside a cardsssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss</Text>
                </Card>
            </View>
        );
    }
}

export default Home;
