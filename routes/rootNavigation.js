import React from "react";
import {connect} from "react-redux";
import {NavigationContainer} from "@react-navigation/native";
import HomeTab from "../routes/homeTab";
import LoginStack from "../routes/loginStack";

const RootNavigation = ({status}) => {
    return (
        <NavigationContainer>
            {status ? (
                <HomeTab/>
            ) : (
                <LoginStack/>
            )}
        </NavigationContainer>
    );
}
const mapStateToProps = (state) => {
    return {
        status: state.auth.status
    }
}
export default connect(mapStateToProps)(RootNavigation);
