import { View, Text, TextInput, Pressable } from "react-native";
import React from "react";
import { Formik } from "formik";
import axios from "axios";

const Login = ({ navigation }) => {
    const submitHandler = (values) => {
        // TODO
    };
    return (
        <View>
            <Formik
                initialValues={{ email: "", password: "" }}
                onSubmit={(values) => {
                    submitHandler(values);
                }}
            >
                {({ values, handleChange, handleSubmit }) => (
                    <View className="mx-4 mt-2">
                        <TextInput
                            className="border-b-slate-200 focus:border-b-slate-400 border-b-2 px-2 pb-2 mt-2 mb-3"
                            inputMode="email"
                            value={values.email}
                            onChangeText={handleChange("email")}
                            placeholder="email"
                        />
                        <TextInput
                            className="border-b-slate-200 focus:border-b-slate-400 border-b-2 px-2 pb-2 mt-2 mb-3"
                            value={values.password}
                            secureTextEntry={true}
                            onChangeText={handleChange("password")}
                            placeholder="password"
                        />
                        <Pressable className="px-6 py-3 mt-2 rounded bg-sky-600" onPress={handleSubmit}>
                            <Text className="text-white uppercase self-center">Login</Text>
                        </Pressable>
                    </View>
                )}
            </Formik>

            <View className="flex flex-row self-center mt-6">
            <Text>Not a member?{" "}</Text>
            <Pressable onPress={() => navigation.navigate("signup")}>
                <Text className=' text-sky-600 font-bold'>Sign Up</Text>
            </Pressable>
            </View>
        </View>
    );
};

export default Login;
