import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, createStackNavigator } from '@react-navigation/native-stack';
import AuthScreen from './src/screens/auth/auth.screen';
import HomeScreen from './src/screens/home/home.screen';
import ItemScreen from './src/screens/item/item-details.screen';

const Stack = createNativeStackNavigator();



export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="Auth"
          component={AuthScreen}
        />
        <Stack.Screen 
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          name="SingleItem"
          component={ItemScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
