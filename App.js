import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Login from "./components/login";
import Register from "./components/register";
import HomeTab from "./routes/homeTab";
import LoginStack from "./routes/loginStack";
import globalStyles from "./styles/globalStyles";

const Stack = createStackNavigator();
export default function App() {
    const [status, setStatus] = useState(false);
    const updateStatus = () => {
        setStatus(status => {
            console.log(!status);
            return !status
        });
    }
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="LoginStack" headerMode="none">
                <Stack.Screen name="LoginStack" component={LoginStack}>
                </Stack.Screen>
                <Stack.Screen name="HomeTab" component={HomeTab}>
                </Stack.Screen>
            </Stack.Navigator>
            {/*{status ? (*/}
            {/*    <HomeTab/>*/}
            {/*) : (*/}
            {/*    <LoginStack updateStatus={updateStatus}/>*/}
            {/*)}*/}
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
