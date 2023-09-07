import { createStackNavigator } from "@react-navigation/stack";
import SignUp from "../src/SignUp";
import Login
 from "../src/Login";
const Stack = createStackNavigator();

const navOptions = {
    headerStyle: {
        backgroundColor: "#e6e6e6",
    },
    headerTintColor: "#404040",
    headerTitleStyle: {
        textTransform: "capitalize",
    },
};
const homeOptions = {
    headerTitleContainerStyle: {
        width: "100%",
        alignItems: "center",
    },
    headerTitleStyle: {
        textTransform: "capitalize",
        fontSize: 28,
    },
};
export default function RegisterStackRoute() {
    return (
        <Stack.Navigator initialRouteName="login">
            <Stack.Screen name="login" component={Login} options={{ ...navOptions, ...homeOptions }} />
            <Stack.Screen name="signup" component={SignUp} options={{ ...navOptions}} />
        </Stack.Navigator>
    );
}
