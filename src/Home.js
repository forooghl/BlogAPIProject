import { ActivityIndicator, FlatList, Image, Text, TouchableOpacity, View, Modal, Keyboard } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import axios from "axios";
import { useQuery, useMutation, useQueryClient } from "react-query";
import Card from "./Card";
import AddPost from "./AddPost";
import { TouchableWithoutFeedback } from "react-native";

const fetchData = async () => {
    const { data } = await axios.get("https://64f2d9feedfa0459f6c60cae.mockapi.io/BlogAPI");
    return data;
};
const Home = ({ navigation }) => {
    const queryClient = useQueryClient();
    const [isOpen, setIsOpen] = useState(false);
    const [posts, setPosts] = useState([{}]);
    const { isLoading, isError, error, refetch } = useQuery("posts", fetchData, {
        onSuccess: (DATA) => {
            const sortedData = DATA.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
            setPosts(sortedData);
        },
    });
    const addPost = useMutation((DATA) => axios.post("https://64f2d9feedfa0459f6c60cae.mockapi.io/BlogAPI", DATA), {
        onSuccess: () => {
            refetch();
        },
    });
    const submitHandler = (values) => {
        const newPost = {
            author: values.author,
            title: values.title,
            body: values.body,
            image: values.image,
        };

        addPost.mutate(newPost);
        setIsOpen(false);
    };
    if (isLoading || addPost.isLoading)
        return (
            <View className="flex-1 justify-center align-middle">
                <ActivityIndicator size="large" color="#333" />
            </View>
        );
    if (isError) return <Text>{error}</Text>;
    return (
        <View className="flex">
            <Modal visible={isOpen} animationType="slide">
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View className="flex-1 m-4">
                        <MaterialIcons name="close" size={34} color="#333" onPress={() => setIsOpen(false)} />
                        <AddPost
                            submitHandler={submitHandler}
                            postContent={{ author: "", title: "", body: "", image: "" }}
                        />
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
            <View className="absolute bottom-2 right-5 z-10">
                <MaterialIcons name="add-circle" size={68} color="#427dde" onPress={() => setIsOpen(true)} />
            </View>
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
