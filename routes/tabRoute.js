import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons, FontAwesome } from "@expo/vector-icons";
import HomeStackRoute from "./homeStackRoute";
import ProfileStackRoute from "./profileStackRoute";
import NewPost from "../src/NewPost";

const Tab = createBottomTabNavigator();

export default function TabRoute() {
    const activeColor = "#333";
    const inactiveColor = "#9999";
    return (
        <Tab.Navigator
            initialRouteName="MainScreen"
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
            }}
        >
            <Tab.Screen
                name="MainScreen"
                component={HomeStackRoute}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <MaterialIcons name="home" color={focused ? activeColor : inactiveColor} size={28} />
                    ),
                }}
            />
            <Tab.Screen
                name="add post"
                component={NewPost}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <MaterialIcons name="add-box" color={focused ? activeColor : inactiveColor} size={28} />
                    ),
                    headerShown: true,
                    headerTitle:'New Post',
                    headerStyle: {backgroundColor:'#e6e6e6'},
                }}
            />
            <Tab.Screen
                name="user profile"
                component={ProfileStackRoute}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <FontAwesome name="user-circle-o" color={focused ? activeColor : inactiveColor} size={28} />
                    ),
                    headerStyle: {backgroundColor: '#e6e6e6'},
                }}
            />
        </Tab.Navigator>
    );
}
