import React from 'react';
import {StyleSheet, View} from 'react-native';
import Login from "./components/login";
import Register from "./components/register"

export default function App() {
    return (
        <View style={styles.container}>
            <Register/>
        </View>
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
