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
        justifyContent: 'center',
        marginBottom: 25,
        borderWidth: 5,
        borderColor: 'white',
        borderRadius: 15
    },
    sideways: {
        flexDirection: 'row',
        paddingHorizontal: 140,
        paddingVertical: 15,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        backgroundColor: '#162521',
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