import { BottomTabNavigationProp, BottomTabScreenProps } from "@react-navigation/bottom-tabs"
import { CompositeScreenProps as CompositeProps, CompositeScreenProps, NavigationProp, RouteProp } from "@react-navigation/native"
import { NativeStackNavigationProp, NativeStackScreenProps } from "@react-navigation/native-stack"

export type RootStackParamList = {
    BottomTabsScreen: BottomTabsParamList
    WeatherDetails: { location: string }
}

export type BottomTabsParamList = {
    Home: undefined
    Favorites: undefined
}

export type Location = { location: string, id: number }

export type OpenWeatherMapsApiResponse = {
    coord: {
        lon: number,
        lat: number
    },
    weather: [
        {
            id: number,
            main: string,
            description: string,
            icon: string
        }
    ],
    base: string,
    main: {
        temp: number,
        feels_like: number,
        temp_min: number,
        temp_max: number,
        pressure: number,
        humidity: number
    },
    visibility: number,
    wind: {
        speed: number,
        deg: number
    },
    clouds: {
        all: number
    },
    dt: number,
    sys: {
        type: number,
        id: number,
        country: string,
        sunrise: number,
        sunset: number
    },
    timezone: number,
    id: number,
    name: string,
    cod: number
}
export type OpenWeatherMapsError = {
    code: number
    message: string
}
export type HomeScreenProps = CompositeScreenProps<BottomTabScreenProps<BottomTabsParamList, 'Home'>, NativeStackScreenProps<RootStackParamList>>;
export type FavoritesScreenProps = CompositeScreenProps<BottomTabScreenProps<BottomTabsParamList, 'Favorites'>, NativeStackScreenProps<RootStackParamList>>;
export type WeatherDetailsScreenProps = NativeStackScreenProps<RootStackParamList, "WeatherDetails">


export type BottomTabsNavigation = BottomTabNavigationProp<BottomTabsParamList>
export type StackNavigation = NativeStackNavigationProp<RootStackParamList>