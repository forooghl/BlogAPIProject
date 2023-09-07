import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const UserProfile = () => {
    return (
        <View>
            <View className="flex flex-row mt-6 items-center border-b-2 border-b-slate-200 pb-6 mx-6">
                <Image source={{ uri: "https://loremflickr.com/640/640/girl" }} className=" w-32 h-32 rounded-full" />
                <View className="ml-10">
                    <Text className="font-bold text-lg">Foroogh L</Text>
                    <Text className="font-semibold text-slate-600">Hello World!</Text>
                    <View className="flex flex-row mt-2">
                        <View className="mr-3 flex items-center">
                            <Text className="font-bold text-lg">0</Text>
                            <Text>Posts</Text>
                        </View>
                        <View className="mr-3 flex items-center">
                            <Text className="font-bold text-lg">0</Text>
                            <Text>Followers</Text>
                        </View>
                        <View className="flex items-center">
                            <Text className="font-bold text-lg">0</Text>
                            <Text>Following</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View>
                
            </View>
        </View>
    );
};

export default UserProfile;

const styles = StyleSheet.create({});
