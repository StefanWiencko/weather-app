import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from "react-native";
import React from "react";
import { Colors } from "@/constants/colors";

type Props = {
  label: string;
  textInputConfig?: TextInputProps;
  style?: ViewStyle;
};

const Input = ({ label, textInputConfig, style }: Props) => {
  return (
    <View style={[styles.inputContainer, style]}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.input} {...textInputConfig} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 4,
    marginVertical: 8,
  },
  label: {
    fontSize: 16,
    color: Colors.font,
    marginBottom: 4,
  },
  input: {
    backgroundColor: Colors.accent200,
    padding: 6,
    borderRadius: 6,
    fontSize: 18,
    color: Colors.font,
    width: "100%",
  },
});
