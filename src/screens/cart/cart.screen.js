import Container from '../../components/container.component';
import { Text } from 'react-native';
import { useSelector } from 'react-redux';

export default CartScreen = () => {
    const items = useSelector((state) => state.cart.items);
    return(
        <Container>
            <Text>You are on the cart screen!</Text>
            <Text>There are {items.length} items in the cart!</Text>
        </Container>
    );
}