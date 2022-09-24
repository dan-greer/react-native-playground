import {View, Text, StyleSheet} from 'react-native';

export default ItemScreen = ({navigation, route}) => {
    return (
        <View style={styles.itemContainer}>
            <Text>On the {route.params.item.title} view!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    itemContainer: {
        marginHorizontal: 55
    }
});