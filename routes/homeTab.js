import React from "react";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MaterialIcons} from "@expo/vector-icons";
import HomeStack from "../routes/homeStack";
import Settings from "../components/settings";

const Tab = createBottomTabNavigator();
export default () => {
    return (
        <Tab.Navigator
            initialRouteName="HomeStack"
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    let iconName = route.name === "HomeStack" ? "home" : "settings";
                    let iconColor = focused ? "black" : "white";
                    return <MaterialIcons name={iconName} size={28} color={iconColor}/>
                },
            })}
            tabBarOptions={{
                activeTintColor: "black",
                inactiveTintColor: "white",
                inactiveBackgroundColor: "coral",
                activeBackgroundColor: "coral",
                labelPosition: "beside-icon",
            }}
        >
            <Tab.Screen name="HomeStack" component={HomeStack} options={{title: "Home"}}/>
            <Tab.Screen name="Settings" component={Settings}/>
        </Tab.Navigator>
    );
}
