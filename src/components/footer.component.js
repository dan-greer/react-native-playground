import { View, Pressable, Text, Image, StyleSheet } from 'react-native';

export default Footer = (props) => {

    return(
        <View style={styles.container}>
            <Pressable style={styles.sideways} onPress={() => props.navigation.navigate('Cart')}>
                <Text style={styles.cartText}>Cart</Text>
                <Image source={require('./img/shoppingcart.png')} style={styles.image}/>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    sideways: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        backgroundColor: '#162521',
        paddingVertical: 12,
        paddingHorizontal: 32,
        flexDirection: 'row'
    },
    cartText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white'
    },
    image: {
        height: 25,
        width: 25,
        marginLeft: 15
    }
});