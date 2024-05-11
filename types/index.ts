import { BottomTabNavigationProp, BottomTabScreenProps } from "@react-navigation/bottom-tabs"
import { CompositeScreenProps as CompositeProps, CompositeScreenProps, NavigationProp, RouteProp } from "@react-navigation/native"
import { NativeStackNavigationProp, NativeStackScreenProps } from "@react-navigation/native-stack"

export type RootStackParamList = {
    BottomTabsScreen: BottomTabsParamList
    WeatherDetails: undefined
}

export type BottomTabsParamList = {
    Home: undefined
    Favorites: undefined
}


export type HomeScreenProps = CompositeScreenProps<BottomTabScreenProps<BottomTabsParamList, 'Home'>, NativeStackScreenProps<RootStackParamList>>;
export type FavoritesScreenProps = CompositeScreenProps<BottomTabScreenProps<BottomTabsParamList, 'Favorites'>, NativeStackScreenProps<RootStackParamList>>;



export type BottomTabsNavigation = BottomTabNavigationProp<BottomTabsParamList>
export type StackNavigation = NativeStackNavigationProp<RootStackParamList>