import { Text } from 'react-native';
import Container from '../../components/container.component';
import MarketPlaceList from '../../components/market-place-list.component';
import CartButton from '../../components/cart-button.component';


export default HomeScreen = ({navigation}) => {
    return(
        <Container>
            <MarketPlaceList />
            <CartButton navigation={navigation}/>
        </Container>
    );
}