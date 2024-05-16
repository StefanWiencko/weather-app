import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { Colors } from "@/constants/colors";
import Input from "@/components/UI/Input";
import Button from "@/components/UI/Button";
import { HomeScreenProps } from "@/types";

const Home = ({ navigation }: HomeScreenProps) => {
  const [inputValue, setInputValue] = useState("");

  const buttonPressHandler = () => {
    if (inputValue.length === 0) return;
    navigation.navigate("WeatherDetails", { location: inputValue });
    setInputValue("");
  };
  const inputTextChangeHandler = (value: string) => {
    setInputValue(value);
  };

  return (
    <View style={styles.rootContainer}>
      <View style={styles.innerContainer}>
        <Input
          textInputConfig={{
            onChangeText: inputTextChangeHandler,
            value: inputValue,
            inputMode: "text",
          }}
          style={{
            width: "100%",
            minWidth: 200,
          }}
          label="Enter name of the city"
        />
        <Button style={styles.button} onPress={buttonPressHandler}>
          Check weather
        </Button>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: Colors.primary500,
    alignItems: "center",
  },
  innerContainer: {
    alignItems: "center",
    width: "50%",
    marginTop: "20%",
  },
  button: {
    width: "40%",
    minWidth: 200,
  },
});
