import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../colors";

export default function TabIcon({ iconName, color, focused }) {
  return (
    <Ionicons
      name={focused ? iconName : `${iconName}-outline`}
      color={focused ? colors.main : color}
      size={focused ? 22 : 18}
    />
  );
}
