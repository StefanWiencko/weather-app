import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { WeatherDetailsScreenProps } from "@/types";
import IconButton from "@/components/UI/IconButton";
import { useFavoriteLocation } from "@/store/favorite-locations-context";
import { useQuery } from "@tanstack/react-query";
import { getOpenWeatherMapWeatherData } from "@/services/open-weather-maps";
import { Colors } from "@/constants/colors";

const WeatherDetails = ({ navigation, route }: WeatherDetailsScreenProps) => {
  let content = <ActivityIndicator size="large" color={Colors.fontPrimary} />;

  const favoriteLocationCtx = useFavoriteLocation();
  const locationName = route.params.location;
  const { data, error, isSuccess, isError, isPending } = useQuery({
    queryKey: ["weatherData", locationName],
    queryFn: () => getOpenWeatherMapWeatherData(locationName),
  });
  const favoriteLocation = favoriteLocationCtx.favoriteLocations?.find(
    (location) => {
      if (data === undefined) {
        return -1;
      }
      return location.id === data.id;
    }
  );
  const isLocationFavorite = favoriteLocation !== undefined;

  const headerButtonPressHandler = () => {
    if (isLocationFavorite) {
      favoriteLocationCtx.removeFavoriteLocation(favoriteLocation.id);
    } else {
      if (data === undefined) return;
      favoriteLocationCtx.addFavoriteLocation({
        location: data.name,
        id: data.id,
      });
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: locationName,
      headerRight: () => {
        return (
          isSuccess && (
            <IconButton
              icon={isLocationFavorite ? "star" : "star-outline"}
              color="white"
              onPress={headerButtonPressHandler}
            />
          )
        );
      },
    });
  }, [navigation, headerButtonPressHandler, isLocationFavorite, isSuccess]);

  if (isSuccess) {
    content = (
      <>
        <Text style={styles.title}>Weather for {data.name}</Text>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Temperature: {Math.round(data.main.temp)}°C</Text>
          <Text style={styles.text}>Perceived temperature {Math.round(data.main.feels_like)}°C</Text>
          <Text style={styles.text}>Pressure {data.main.pressure}hPa</Text>
          <Text style={styles.text}>Humidity: {data.main.humidity}%</Text>
        </View>
      </>
    );
  }
  if (isError) {
    content = <Text style={styles.text}>{error.message}</Text>;
  }
  return (
    <View style={[styles.container, !isSuccess && styles.pending]}>
      {content}
    </View>
  );
};

export default WeatherDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    width:"100%"
  },
  title: {
    color: Colors.fontSecondary,
    textAlign: "center",
    fontSize: 18,
    marginBottom:16
  },
  text: {
    color: Colors.fontSecondary,
  },
  pending: {
    justifyContent: "center",
    alignItems:'center',
  },
  textContainer:{
    // alignItems:'flex-start',
  }
});
