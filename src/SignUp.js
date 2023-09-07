import { View, Text, Pressable, TextInput } from "react-native";
import React from "react";
import { Formik } from "formik";
import axios from "axios";

const SignUp = ({ navigation }) => {
    const submitHandler = (values) => {
        const user = { ...values };
    };
    return (
        <View>
            <Formik
                initialValues={{ username: "", email: "", password: "" }}
                onSubmit={(values) => {
                    submitHandler(values);
                }}
            >
                {({ values, handleChange, handleSubmit }) => (
                    <View className="mx-4 mt-2">
                        <TextInput
                            className="border-b-slate-200 focus:border-b-slate-400 border-b-2 px-2 pb-2 mt-2 mb-3"
                            value={values.username}
                            onChangeText={handleChange("username")}
                            placeholder="username"
                        />
                        <TextInput
                            inputMode="email"
                            className="border-b-slate-200 focus:border-b-slate-400 border-b-2 px-2 pb-2 mt-2 mb-3"
                            value={values.email}
                            onChangeText={handleChange("email")}
                            placeholder="email"
                        />
                        <TextInput
                            className="border-b-slate-200 focus:border-b-slate-400 border-b-2 px-2 pb-2 mt-2 mb-3"
                            secureTextEntry={true}
                            value={values.password}
                            onChangeText={handleChange("password")}
                            placeholder="password"
                        />
                        <Pressable className="px-6 py-3 mt-2 rounded bg-sky-600" onPress={handleSubmit}>
                            <Text className="text-white uppercase self-center">Sign up</Text>
                        </Pressable>
                    </View>
                )}
            </Formik>
            <View className="flex flex-row self-center mt-6">
                <Text>Already a member? </Text>
                <Pressable onPress={() => navigation.navigate("login")}>
                    <Text className=" text-sky-600 font-bold">Log in</Text>
                </Pressable>
            </View>
        </View>
    );
};

export default SignUp;
