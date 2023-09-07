import { ActivityIndicator, FlatList, Image, Text, TouchableOpacity, View, Modal, Keyboard } from "react-native";
import React, { useState } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import Card from "./Card";

const fetchData = async () => {
    const { data } = await axios.get("https://64f2d9feedfa0459f6c60cae.mockapi.io/BlogAPI");
    return data;
};
const Home = ({ navigation }) => {
    const [posts, setPosts] = useState([{}]);
    const { isLoading, isError, error } = useQuery("posts", fetchData, {
        onSuccess: (DATA) => {
            const sortedData = DATA.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
            setPosts(sortedData);
        },
    });
    if (isLoading)
        return (
            <View className="flex-1 justify-center align-middle">
                <ActivityIndicator size="large" color="#333" />
            </View>
        );
    if (isError) return <Text>{error}</Text>;
    return (
        <View className="flex">
            <FlatList
                keyExtractor={(item) => item.id}
                data={posts}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        className="mx-6"
                        key={item.id}
                        onPress={() => {
                            navigation.navigate("PostDetails", item);
                        }}
                    >
                        <Card>
                            <Image className="w-auto h-96 rounded-t self-top" source={{ uri: item.image }} />
                            <Text className="font-bold text-lg py-2 px-3">{item.title}</Text>
                            <Text className="font-bold text-xs self-end pr-6 pb-4 ">{item.author}</Text>
                        </Card>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

export default Home;
