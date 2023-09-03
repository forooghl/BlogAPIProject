import { View } from "react-native";
import React from "react";

const Card = (props) => {
    return (
        <View className="my-3 p-1 rounded shadow shadow-slate-400 w-auto">
            {props.children}
        </View>
    );
};

export default Card;
