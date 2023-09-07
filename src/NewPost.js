import React from "react";
import { View, TouchableWithoutFeedback, Keyboard } from "react-native";
import axios from "axios";
import { useMutation, useQueryClient } from "react-query";
import PostForm from "./PostForm";

const NewPost = ({navigation}) => {
    const queryClient = useQueryClient();
    const addPost = useMutation((DATA) => axios.post("https://64f2d9feedfa0459f6c60cae.mockapi.io/BlogAPI", DATA), {
        onSuccess: () => {
            queryClient.invalidateQueries();
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
        navigation.navigate('MainScreen')

    };
    return (
        <View className="flex mx-4">
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <PostForm submitHandler={submitHandler} postContent={{ author: "", title: "", body: "", image: "" }} />
            </TouchableWithoutFeedback>
        </View>
    );
};

export default NewPost;
