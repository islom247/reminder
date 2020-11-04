import React from "react";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from "../components/home";
import Settings from "../components/settings";

const Tab = createBottomTabNavigator();
export default () => {
    return (
        <Tab.Navigator initialRouteName="Home">
            <Tab.Screen name="Home" component={Home}/>
            <Tab.Screen name="Settings" component={Settings}/>
        </Tab.Navigator>
    );
}
