import {View, Text, StyleSheet, Pressable, Alert} from 'react-native';

export default Item = (props) => {

    return (
        <Pressable onPress={event => props.onPressCallback(props)}>
            <View style={styles.item}>
                <Text>{props.title}</Text>
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