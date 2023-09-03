import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import StackRoute from "./routes/stackRoute";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();
export default function App() {
    return (
        <NavigationContainer>
            <QueryClientProvider client={queryClient}>
                <StackRoute />
            </QueryClientProvider>
        </NavigationContainer>
    );
}
