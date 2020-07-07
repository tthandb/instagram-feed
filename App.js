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
          backgroundColor: "pink",
          alignItems: "center",
          justifyContent: "space-between",
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

      <View style={{}}>
        <View style={Style.avatarWrapper}>
          <Image
            source={{
              uri:
                "https://instagram.fhan2-3.fna.fbcdn.net/v/t51.2885-19/s150x150/94425218_579318199350506_3264303706216071168_n.jpg?_nc_ht=instagram.fhan2-3.fna.fbcdn.net&_nc_ohc=5Fn8R5UbbTkAX_milyH&oh=17920072c257600f0a37da2d70ccdee8&oe=5F2E99C4",
            }}
            style={Style.avatarImage}
            resizeMode="cover"
          />
          <Text style={Style.posterName}>Binh Nguyen Duc</Text>
        </View>
        <View style={Style.imagePoster}>
          <Image
            source={require("./assets/1.jpg")}
            style={{ flex: 1, width: null, height: null }}
            resizeMode="cover"
          />
        </View>
      </View>
      {feedData.map((e, i) => {
        return (
          <View id={i}>
            <View style={Style.avatarWrapper}>
              <Image
                source={{
                  uri: e.avatar,
                }}
                style={Style.avatarImage}
                resizeMode="cover"
              />
              <Text style={Style.posterName}>{e.name}</Text>
            </View>
            <View style={Style.imagePoster}>
              <Image
                source={e.image}
                style={{ flex: 1, width: null, height: null }}
                resizeMode="cover"
              />
            </View>
          </View>
        );
      })}
    </View>
  );
}
const feedData = [
  {
    id: 1,
    name: "Ho tay 1",
    image: require("./assets/1.jpg"),
    likeCount: 128,
    avatar:
      "https://instagram.fhan2-3.fna.fbcdn.net/v/t51.2885-19/s150x150/94425218_579318199350506_3264303706216071168_n.jpg?_nc_ht=instagram.fhan2-3.fna.fbcdn.net&_nc_ohc=5Fn8R5UbbTkAX_milyH&oh=17920072c257600f0a37da2d70ccdee8&oe=5F2E99C4",
  },
  {
    id: 2,
    name: "Ho tay 2",
    image: require("./assets/2.jpg"),
    likeCount: 12,
    avatar:
      "https://instagram.fhan2-3.fna.fbcdn.net/v/t51.2885-19/s150x150/94425218_579318199350506_3264303706216071168_n.jpg?_nc_ht=instagram.fhan2-3.fna.fbcdn.net&_nc_ohc=5Fn8R5UbbTkAX_milyH&oh=17920072c257600f0a37da2d70ccdee8&oe=5F2E99C4",
  },
];

const Style = {
  avatarWrapper: {
    flexDirection: "row",
    alignItems: "center",
    maginVertical: 7,
    marginHorizontal: 12,
  },
  avatarImage: {
    width: 46,
    height: 46,
    borderRadius: 23,
  },
  posterName: {
    marginLeft: 12,
    fontSize: 15,
    fontWeight: "500",
  },
  imageWrapper: {
    height: 300,
  },
  imagePoster: {
    width: null,
    height: 400,
  },
};
