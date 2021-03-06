import React from "react";
import { StyleSheet, Text, View, Image, SafeAreaView } from "react-native";
import { Feather } from "@expo/vector-icons";
export default function App() {
  return (
    <View>
      <SafeAreaView style={styles.container}>
        <View style={styles.empty}></View>
        <Image
          source={require("./assets/Instagram_logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />
        <Feather
          name="inbox"
          size={24}
          color="black"
          style={{ marginRight: 10 }}
        />
      </SafeAreaView>
      {feedData.map((feed) => {
        return singlePost(feed);
      })}
    </View>
  );
}
const singlePost = (feed) => {
  return (
    <View style={styles.singlePost} key={feed.id}>
      <View style={styles.avatarWrapper}>
        <Image source={feed.avatar} style={styles.avatar} resizeMode="cover" />
        <Text style={styles.name}>{feed.name}</Text>
      </View>
      <Image source={feed.image} style={styles.postImage} resizeMode="cover" />
      <View style={styles.reactWrapper}>
        <Feather
          name="heart"
          size={24}
          color="black"
          style={styles.reactionButton}
          onPress={() => alert("like")}
        />
        <Feather
          name="message-square"
          size={24}
          color="black"
          style={styles.reactionButton}
          onPress={() => alert("comment")}
        />
        <Feather
          name="share"
          size={24}
          color="black"
          style={styles.reactionButton}
          onPress={() => alert("share")}
        />
      </View>
      <View style={styles.likesWrapper}>
        <Feather
          name="heart"
          size={24}
          color="black"
          style={styles.reactionButton}
          onPress={() => alert("like")}
        />
        <Text>{feed.likeCount} likes</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  empty: { width: 27, marginLeft: 10 },
  container: {
    flexDirection: "row",
    backgroundColor: "#f3f6fa",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logo: {
    flex: 1,
    width: "100%",
    height: 40,
  },
  singlePost: {
    marginTop: 10,
    height: 400,
  },
  avatarWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 7,
    marginHorizontal: 12,
  },
  postImage: {
    flex: 1,
    width: "100%",
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 23,
    marginRight: 12,
  },
  name: {
    fontSize: 15,
    fontWeight: "bold",
  },
  reactWrapper: {
    flexDirection: "row",
    //marginHorizontal: 12,
    marginTop: 5,
    marginBottom: 5,
  },
  likesWrapper: {
    //    marginHorizontal: 12,
    flexDirection: "row",
    borderTopColor: "#e4e3e5",
    borderTopWidth: 1,
    borderBottomColor: "#e4e3e5",
    borderBottomWidth: 1,
    borderRadius:3,
    alignItems: "center",
  },
  reactionButton: {
    marginHorizontal: 10,
  },
});
const feedData = [
  {
    id: 1,
    name: "Chau Bui",
    image: require("./assets/post/1.jpg"),
    likeCount: 128,
    avatar: require("./assets/avatar/1.jpg"),
  },
  {
    id: 2,
    name: "Le Bong",
    image: require("./assets/post/2.jpg"),
    likeCount: 44,
    avatar: require("./assets/avatar/2.jpg"),
  },
  {
    id: 3,
    name: "Han Hang",
    image: require("./assets/post/3.jpg"),
    likeCount: 122,
    avatar: require("./assets/avatar/3.jpg"),
  },
];
