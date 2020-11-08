import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {Text, Button, Image} from "react-native";
import Details from "../components/details";
import Home from "../components/home";
import Header from "../shared/header";

const Stack = createStackNavigator();
export default () => {
    return (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerMode: "screen"
            }}
        >
            <Stack.Screen
                name="Home"
                component={Home}
                options={{
                    headerTitle: () => <Header title="Home"/>,
                    headerTitleAlign: "center",
                }}
            >
            </Stack.Screen>
            <Stack.Screen
                name="Details"
                component={Details}
                options={{
                    headerTitle: () => <Header title="Details" details={true}/>,
                    headerTitleAlign: "center"
                }}>
            </Stack.Screen>
        </Stack.Navigator>
    );
}
