import { FlatList, StyleSheet, View, Text } from "react-native";
import React from "react";
import { Colors } from "@/constants/colors";
import { FavoritesScreenProps } from "@/types";
import Button from "@/components/UI/Button";
import { Location } from "@/types";
import { useFavoriteLocation } from "@/store/favorite-locations-context";

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
            <View style={styles.listItem}>
              <Button
                style={styles.listItemButton}
                onPress={() => handleItemPress(itemData.item)}
              >
                {itemData.item.location}
              </Button>
            </View>
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
    alignItems: "center",
  },
  list: {
    maxWidth: "80%",
    minWidth: "50%",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    marginHorizontal: "auto",
  },
  listItem: {
    marginVertical: 4,
  },
  listItemButton: {
    backgroundColor: "transparent",
  },
  label: {
    fontSize: 16,
    color: Colors.fontPrimary,
    marginTop: 36,
  },
});
