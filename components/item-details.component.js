import {View, Text} from 'react-native';

export default ItemDetails = ({navigation, route}) => {
    return (
        <View>
            <Text>On the {route.params.item.title} view!</Text>
        </View>
    );
}