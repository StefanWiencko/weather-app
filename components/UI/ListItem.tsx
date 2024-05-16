import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "@/constants/colors";

type Props = {
  text: string;
  onPress: () => void;
};

const ListItem = ({ text, onPress }: Props) => {
  return (
    <Pressable
      android_ripple={{ color: Colors.accent200 }}
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.container}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </Pressable>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    alignItems: "flex-start",
    borderBottomColor: Colors.grey300,
    borderBottomWidth: 1,
    backgroundColor: Colors.grey200,
  },
  text: {
    color: Colors.font,
    fontSize: 18,
    marginHorizontal: 8,
  },
  pressed: {
    opacity: 0.75,
  },
});
