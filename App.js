import { NavigationContainer} from '@react-navigation/native';
import { StyleSheet, View } from 'react-native';
import MarketPlaceList from './components/market-place-list.component';
import ItemDetails from './components/item-details.component';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
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
