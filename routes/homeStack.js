import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import Details from "../components/details";
import Home from "../components/home";

const Stack = createStackNavigator();
export default () => {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home}>
            </Stack.Screen>
            <Stack.Screen name="Details" component={Details}>
            </Stack.Screen>
        </Stack.Navigator>
    );
}
