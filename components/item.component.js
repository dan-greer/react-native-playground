import {View, Text, StyleSheet, Pressable, Alert} from 'react-native';

export default Item = ({title}) => {

    const onPressCallback = () => {
        Alert.alert("You pressed an item!",
         "The item you pressed: " + title
         );
    }

    return (
        <Pressable onPress={onPressCallback}>
            <View style={styles.item}>
                <Text>{title}</Text>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    item: {
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16
    }
  });