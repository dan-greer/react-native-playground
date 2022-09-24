import {View, Text} from 'react-native';

export default ItemScreen = ({navigation, route}) => {
    return (
        <View>
            <Text>On the {route.params.item.title} view!</Text>
        </View>
    );
}