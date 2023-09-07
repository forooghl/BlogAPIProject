import { View, Text, ScrollView, TextInput, Pressable } from "react-native";
import React from "react";
import { Formik } from "formik";

const PostForm = ({ submitHandler, postContent }) => {
    return (
        <View>
            <Formik
                initialValues={{
                    author: postContent.author,
                    title: postContent.title,
                    body: postContent.body,
                    image: postContent.image,
                }}
                onSubmit={(values, action) => {
                    action.resetForm();
                    submitHandler(values);
                }}
            >
                {({ values, handleChange, handleSubmit }) => (
                    <ScrollView className="mx-4 mt-2">
                        <View className="mb-6">
                            <TextInput
                                placeholder="Author name ..."
                                className="border-b-slate-200 focus:border-b-slate-400 border-b-2 px-2 pb-2 mt-2 mb-3"
                                onChangeText={handleChange("author")}
                                value={values.author}
                            />
                            <TextInput
                                placeholder="Title of Blog ..."
                                className="border-b-slate-200 focus:border-b-slate-400 border-b-2 px-2 pb-2 mt-2 mb-3"
                                onChangeText={handleChange("title")}
                                value={values.title}
                            />
                            <TextInput
                                placeholder="Image url"
                                className="border-b-slate-200 focus:border-b-slate-400 border-b-2 px-2 pb-2 mt-2 mb-3"
                                onChangeText={handleChange("image")}
                                value={values.image}
                            />
                            <TextInput
                                multiline
                                placeholder="Blog content ..."
                                className="border-b-slate-200 focus:border-b-slate-400 border-b-2 px-2 pb-2 h-20"
                                onChangeText={handleChange("body")}
                                value={values.body}
                            />
                        </View>
                        <Pressable className="px-6 py-3 rounded bg-sky-600" onPress={handleSubmit}>
                            <Text className="text-white uppercase self-center">submit</Text>
                        </Pressable>
                    </ScrollView>
                )}
            </Formik>
        </View>
    );
};

export default PostForm;
