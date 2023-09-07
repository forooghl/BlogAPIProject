import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { QueryClient, QueryClientProvider } from "react-query";
import TabRoute from "./routes/tabRoute";
import RegisterStackRoute from "./routes/registerStackRoute";

const queryClient = new QueryClient();
export default function App() {
    return (
        <NavigationContainer>
            <QueryClientProvider client={queryClient}>
                <TabRoute />
            </QueryClientProvider>
        </NavigationContainer>
    );

    // return (
    //     <NavigationContainer>
    //         <QueryClientProvider client={queryClient}>
    //             <RegisterStackRoute />
    //         </QueryClientProvider>
    //     </NavigationContainer>
    // );
}
