import { Text } from 'react-native';
import Container from '../../components/container.component';
import MarketPlaceList from '../../components/market-place-list.component';
import Footer from '../../components/footer.component';


export default HomeScreen = ({navigation}) => {
    return(
        <Container>
            <MarketPlaceList navigation={navigation}/>
            <Footer navigation={navigation}/>
        </Container>
    );
}