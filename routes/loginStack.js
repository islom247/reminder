import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import Login from "../components/login";
import Register from "../components/register";

const Stack = createStackNavigator();
export default () => {
    return (
        <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{
                title: "Login",
                headerStyle: {
                    backgroundColor: "coral"
                },
                headerTitleStyle: {
                    flex: 1,
                    textAlign: "center",
                    alignSelf: "center",
                    color: "white"
                },
                headerTintColor: "white"
            }}
        >
            <Stack.Screen name="Login" component={Login}>
            </Stack.Screen>
            <Stack.Screen name="Register" component={Register} options={{title: "Sign Up"}}/>
        </Stack.Navigator>
    );
}
