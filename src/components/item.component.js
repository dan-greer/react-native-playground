import {View, Text, StyleSheet, Pressable, Alert} from 'react-native';

export default Item = (props) => {

    return (
        <Pressable onPress={event => props.onPressCallback(props.item)}>
            <View style={styles.item}>
                <Text style={styles.itemTitle}>{props.item.title}</Text>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    item: {
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
      borderWidth: 5,
      borderColor: '#3C474B',
      borderRadius: 15
    },
    itemTitle: {
        paddingHorizontal: 20
      }
  });