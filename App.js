import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
export default function App() {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "pink",
        }}
      >
        <View style={{ width: 27 }} />
        <Image
          source={{
            uri:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png",
          }}
          style={{
            flex: 1,
            height: 40,
            resizeMode: "contain",
          }}
        />
        <AntDesign name="rightcircleo" size={27} color="black" />
      </View>
      <View style={{ height: 300 }}>
        <Image
          source={require("./assets/1.jpg")}
          style={{ flex: 1, width: null, height: null }}
          resizeMode="cover"
        />
      </View>
    </View>
  );
}
