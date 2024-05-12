import { Dimensions } from "react-native";

export const isLandscape = () =>
  Dimensions.get("window").width > Dimensions.get("window").height;
