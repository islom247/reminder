import React from "react";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SafeAreaView} from "react-native-safe-area-context";
import {MaterialIcons} from "@expo/vector-icons";
import HomeStack from "../routes/homeStack";
import Settings from "../components/settings";
import AddNote from "../components/addNote";

const Tab = createBottomTabNavigator();
export default () => {
    return (
        <Tab.Navigator
            initialRouteName="HomeStack"
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    let iconName = route.name === "HomeStack" ? "home" :
                        route.name === "AddNote" ? "add-circle-outline" : "account-box";
                    let iconColor = focused ? "white" : "teal";
                    return <MaterialIcons name={iconName} size={35} color={iconColor}/>
                },
                tabStyle: {
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center"
                }
            })}
            tabBarOptions={{
                activeTintColor: "white",
                inactiveTintColor: "teal",
                inactiveBackgroundColor: "coral",
                activeBackgroundColor: "coral",
                showLabel: false,
                style: {
                    height: 50,
                }
            }}
            onNavigationS
        >
            <Tab.Screen name="HomeStack" component={HomeStack} options={{title: "Home"}}/>
            <Tab.Screen name="AddNote" component={AddNote} options={{title: "Add"}}/>
            <Tab.Screen name="Settings" component={Settings}/>
        </Tab.Navigator>
    );
}
