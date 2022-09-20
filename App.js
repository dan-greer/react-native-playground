import { NavigationContainer} from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import MarketPlaceList from './app/components/market-place-list.component';
import ItemDetails from './app/components/item-details.component';
import Login from './app/components/login.component';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{title: 'It\'s not delivery...'}}
        />
        <Stack.Screen 
          name="Marketplace"
          component={MarketPlaceList}
          options={{title: 'Marketplace'}}
        />
        <Stack.Screen
          name="Item View"
          component={ItemDetails}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
