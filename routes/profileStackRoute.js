import { createStackNavigator } from "@react-navigation/stack";
import UserProfile from "../src/UserProfile";

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
export default function ProfileStackRoute() {
    return (
        <Stack.Navigator initialRouteName="Profile">
            <Stack.Screen name="Profile" component={UserProfile} options={{ ...navOptions }} />
        </Stack.Navigator>
    );
}
