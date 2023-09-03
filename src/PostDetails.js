import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image,
    Modal,
    ActivityIndicator,
    TouchableWithoutFeedback,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import axios from "axios";
import AddPost from "./AddPost";
import { Keyboard } from "react-native";

const PostDetails = ({ route, navigation }) => {
    const queryClient = useQueryClient();
    const [isOpen, setIsOpen] = useState(false);
    const deletePost = useMutation(
        (id) => {
            axios.delete(`https://64f2d9feedfa0459f6c60cae.mockapi.io/BlogAPI/${id}`);
        },
        {
            onSuccess: () => {
                queryClient.invalidateQueries("posts");
                navigation.pop();
            },
            onError: (error) => {
                console.log(error);
            },
        }
    );
    const editPost = useMutation(
        (DATA) => {
            axios.put(`https://64f2d9feedfa0459f6c60cae.mockapi.io/BlogAPI/${route.params.id}`, DATA);
        },
        {
            onSuccess: () => {
                queryClient.invalidateQueries("posts");
                navigation.pop();
            },
            onError: (error) => {
                console.log(error);
            },
        }
    );
    const deleteHandler = () => {
        deletePost.mutate(route.params.id);
    };
    const editHandler = (values) => {
        const newPost = {
            author: values.author,
            title: values.title,
            body: values.body,
            image: values.image,
        };

        editPost.mutate(newPost);
        setIsOpen(false);
    };

    if (editPost.isLoading || deletePost.isLoading)
        return (
            <View className="flex-1 justify-center align-middle">
                <ActivityIndicator size="large" color="#333" />
            </View>
        );
    return (
        <View>
            <ScrollView className="mx-6 my-3 py-4 rounded shadow shadow-slate-300">
                <View className="flex flex-row justify-between px-4">
                    <Text className="text-lg font-bold basis-10/12">{route.params.title}</Text>
                    <View className="flex-row basis-2/12 justify-between">
                        <MaterialIcons name="delete" size={24} color="#333" onPress={deleteHandler} />
                        <MaterialIcons name="edit" size={24} color="#333" onPress={() => setIsOpen(true)} />
                    </View>
                </View>
                <View className="mt-2">
                    <Image className="w-auto h-96 mx-1" source={{ uri: route.params.image }} />
                    <View className="px-4">
                        <Text className="mt-2 font-bold">{route.params.author}</Text>
                        <Text className="my-2 mx-2">{route.params.body}</Text>
                        <Text className="text-xs self-end text-gray-600 pb-8">{route.params.createdAt}</Text>
                    </View>
                </View>
            </ScrollView>
            <Modal visible={isOpen} animationType="slide">
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View className="flex-1 m-4">
                        <MaterialIcons name="close" size={34} color="#333" onPress={() => setIsOpen(false)} />
                        <AddPost
                            submitHandler={editHandler}
                            postContent={{
                                author: route.params.author,
                                title: route.params.title,
                                body: route.params.body,
                                image: route.params.image,
                            }}
                        />
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
        </View>
    );
};

export default PostDetails;

const styles = StyleSheet.create({});
