import React from 'react';
import {createStore, applyMiddleware, compose} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import rootReducer from "./store/reducers/rootReducer";
import RootNavigation from "./routes/rootNavigation";

const store = createStore(rootReducer, applyMiddleware(thunk));
export default function App() {
    return (
        <Provider store={store}>
            <RootNavigation/>
        </Provider>
    );
}
