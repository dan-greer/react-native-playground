import { Pressable, Image, StyleSheet } from 'react-native'

export default CartButton = (props) => {
    return(
        <Pressable style={styles.image} onPress={() => props.navigation.navigate('CartScreen')}>
            <Image source={'./img/shoppingcart.png'} style={styles.image}/>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    image: {
        height: 25,
        width: 25
    }
});