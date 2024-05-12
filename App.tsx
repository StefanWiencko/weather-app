import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { BottomTabsParamList, RootStackParamList } from '@/types';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from "@expo/vector-icons"
import Home from '@/screens/Home';
import Favorites from '@/screens/FavoriteLocations';
import WeatherDetails from '@/screens/WeatherDetails';
import { Colors } from '@/constants/colors';
import FavoriteLocationsProvider from '@/store/favorite-locations-context';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const Stack = createNativeStackNavigator<RootStackParamList>()
const BottomTabs = createBottomTabNavigator<BottomTabsParamList>()

const queryClient = new QueryClient()

const BottomTabsNavigation = () => {
  return <BottomTabs.Navigator
    detachInactiveScreens={false}
    screenOptions={{
      headerStyle: { backgroundColor: Colors.accent500 },
      headerTintColor: "white",
      tabBarStyle: { backgroundColor: Colors.accent500 },
      tabBarInactiveTintColor: "white",
      tabBarActiveTintColor: Colors.accent500,
      tabBarActiveBackgroundColor: Colors.accent200,

    }}>
    <BottomTabs.Screen
      name='Home'
      component={Home}
      options={{
        tabBarIcon: ({ color, size }) => <Ionicons name='home' color={color} size={size} />

      }} />
    <BottomTabs.Screen
      name='Favorites'
      component={Favorites}
      options={{
        tabBarIcon: ({ color, size }) => <Ionicons name='star' color={color} size={size} />
      }} />

  </BottomTabs.Navigator>
}
export default function App() {
  return (<>
    <StatusBar style='light' />
    <QueryClientProvider client={queryClient}>
      <FavoriteLocationsProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{
            headerStyle: { backgroundColor: Colors.primary700 },
            headerTintColor: "#fff",
            contentStyle: { backgroundColor: Colors.primary500 },
            presentation: 'card'
          }}>
            <Stack.Screen
              name='BottomTabsScreen'
              component={BottomTabsNavigation}
              options={{
                headerShown: false,
              }} />
            <Stack.Screen
              name='WeatherDetails'
              component={WeatherDetails}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </FavoriteLocationsProvider>
    </QueryClientProvider>
  </>
  );
}

const styles = StyleSheet.create({
  container: {

  }
});
