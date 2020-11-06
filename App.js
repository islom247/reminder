import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {createStore, applyMiddleware, compose} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import rootReducer from "./store/reducers/rootReducer";
import RootNavigation from "./routes/rootNavigation";

const store = createStore(rootReducer, applyMiddleware(thunk));
export default function App() {
    const [status, setStatus] = useState(false);
    const updateStatus = () => {
        setStatus(status => {
            console.log(!status);
            return !status
        });
    }
    return (
        <Provider store={store}>
            {/*<NavigationContainer>*/}
            {/*    /!*<Stack.Navigator initialRouteName="LoginStack" headerMode="none">*!/*/}
            {/*    /!*    <Stack.Screen name="LoginStack" component={LoginStack}>*!/*/}
            {/*    /!*    </Stack.Screen>*!/*/}
            {/*    /!*    <Stack.Screen name="HomeTab" component={HomeTab}>*!/*/}
            {/*    /!*    </Stack.Screen>*!/*/}
            {/*    /!*</Stack.Navigator>*!/*/}

            {/*</NavigationContainer>*/}
            <RootNavigation/>
        </Provider>
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
