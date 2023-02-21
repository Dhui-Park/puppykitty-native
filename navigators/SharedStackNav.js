import React, { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profile from "../screens/Profile";
import Photo from "../screens/Photo";
import Feed from "../screens/Feed";
import Notifications from "../screens/Notifications";
import Me from "../screens/Me";
import Search from "../screens/Search";
import { Image } from "react-native";
import Likes from "../screens/Likes";
import Comments from "../screens/Comments";

const Stack = createNativeStackNavigator();

export default function SharedStackNav({ screenName }) {
  return (
    <Stack.Navigator
      headerMode="screen"
      screenOptions={{
        headerBackTitleVisible: false,
        headerTintColor: "white",
        headerStyle: {
          backgroundColor: "black",
        },
      }}
    >
      {screenName === "Feed" ? (
        <Stack.Screen name={"Feed"} component={Feed} />
      ) : null}
      {screenName === "Search" ? (
        <Stack.Screen name={"Search"} component={Search} />
      ) : null}
      {screenName === "Notifications" ? (
        <Stack.Screen name={"Notifications"} component={Notifications} />
      ) : null}
      {screenName === "Me" ? <Stack.Screen name={"Me"} component={Me} /> : null}
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Photo" component={Photo} />
      <Stack.Screen name="Likes" component={Likes} />
      <Stack.Screen name="Comments" component={Comments} />
    </Stack.Navigator>
  );
}
