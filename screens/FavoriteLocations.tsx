import { FlatList, StyleSheet, View, Text } from "react-native";
import React from "react";
import { Colors } from "@/constants/colors";
import { FavoritesScreenProps } from "@/types";
import { Location } from "@/types";
import { useFavoriteLocation } from "@/store/favorite-locations-context";
import ListItem from "@/components/UI/ListItem";

const Favorites = ({ navigation }: FavoritesScreenProps) => {
  const { favoriteLocations } = useFavoriteLocation();

  const handleItemPress = (location: Location) => {
    navigation.navigate("WeatherDetails", { location: location.location });
  };
  return (
    <View style={styles.container}>
      {favoriteLocations?.length ? (
        <FlatList
          data={favoriteLocations}
          keyExtractor={(item) => item.id.toString()}
          renderItem={(itemData) => (
            <ListItem
              onPress={() => handleItemPress(itemData.item)}
              text={itemData.item.location}
            />
          )}
        />
      ) : (
        <Text style={styles.label}>You have no favorite locations yet</Text>
      )}
    </View>
  );
};

export default Favorites;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary500,
    width: "100%",
  },
  list: {
    maxWidth: "80%",
    minWidth: "50%",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    marginHorizontal: "auto",
  },
  label: {
    fontSize: 16,
    color: Colors.font,
    marginTop: 36,
    textAlign: "center",
  },
});
