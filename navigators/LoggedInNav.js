import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import TabsNav from "./TabsNav";
import useMe from "../hooks/useMe";
import UploadNav from "./UploadNav";
import UploadForm from "../screens/UploadForm";
import MessagesNav from "./MessageNavigator";

const Stack = createStackNavigator();

export default function LoggedInNav() {
  const { data } = useMe();
  return (
    <Stack.Navigator screenOptions={{ presentation: "modal" }}>
      <Stack.Screen
        name="Tabs"
        options={{ headerShown: false }}
        component={TabsNav}
      />
      <Stack.Screen
        name="Upload"
        options={{ headerShown: false }}
        component={UploadNav}
      />
      <Stack.Screen
        name="UploadForm"
        options={{
          headerBackTitleVisible: false,
          headerBackImage: ({ tintColor }) => (
            <Ionicons color={tintColor} name="close" size={28} />
          ),
          title: "Upload",
          headerTintColor: "white",
          headerStyle: {
            backgroundColor: "black",
          },
        }}
        component={UploadForm}
      />
      <Stack.Screen
        name="Messages"
        options={{ headerShown: false }}
        component={MessagesNav}
      />
    </Stack.Navigator>
  );
}
