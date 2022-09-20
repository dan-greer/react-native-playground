import { View, TextInput, Alert, Button, StyleSheet, Image } from 'react-native';
import {useState} from 'react'

export default Login = ({navigation}) => {
    const [userName, setUserName] = useState('Enter user name');
    const [password, setPassword] = useState('Enter password');

    const logUserIn = () => {
        if (userName === 'test-username' && password === 'test-password') {
            navigation.navigate('Marketplace');
        } else {
            Alert.alert('Incorrect username or password!');
        }

    }

    return(
        <View style={styles.container}>
            <Image source={require('./img/logo.jpg')}/>
            <TextInput
                style={styles.input}
                onChangeText={setUserName}
                value={userName}
                autoCorrect={false}
                clearTextOnFocus={true}
                textContentType={'username'}
            />
            <TextInput
                style={styles.input}
                onChangeText={setPassword}
                value={password}
                autoCorrect={false}
                clearTextOnFocus={true}
                textContentType={'password'}
                secureTextEntry={true}
            />
            <Button
                title="Log in"
                onPress={logUserIn}
                style={styles.button}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        height: 80,
        width: 240,
        margin: 12,
        borderWidth: 1,
        padding: 10
    },
    button: {
        flex: 2
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }
});