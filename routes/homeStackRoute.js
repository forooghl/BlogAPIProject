import { createStackNavigator } from "@react-navigation/stack";
import Home from "../src/Home";
import PostDetails from "../src/PostDetails";

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
export default function HomeStackRoute() {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home} options={{ ...navOptions, ...homeOptions }} />
            <Stack.Screen
                name="PostDetails"
                component={PostDetails}
                options={({ route }) => ({ title: route.params.title, ...navOptions })}
            />
        </Stack.Navigator>
    );
}
