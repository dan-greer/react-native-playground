import { StyleSheet, View } from 'react-native';
import MarketPlaceList from './components/market-place-list.component';

export default function App() {
  return (
    <View style={styles.container}>
      <MarketPlaceList/>
    </View>
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
