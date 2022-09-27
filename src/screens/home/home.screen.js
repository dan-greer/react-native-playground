import { View, StyleSheet } from 'react-native';
import Container from '../../components/container.component';
import MarketPlaceList from '../../components/market-place-list.component';
import Footer from '../../components/footer.component';


export default HomeScreen = ({navigation}) => {
    return(
        <Container>
            <View style={styles.borderedContainer}>
                <MarketPlaceList navigation={navigation}/>
                <Footer navigation={navigation}/>
            </View>
        </Container>
    );
}

const styles = StyleSheet.create({
    borderedContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#C0E0DE',
        borderWidth: 5,
        borderRadius: 15,
        borderColor: 'white',
        paddingVertical: 35,
        paddingHorizontal: 75,
        marginTop: 35,
        marginBottom: 15
    }
});