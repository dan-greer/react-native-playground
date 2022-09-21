import { View, TextInput, Button, Image, Text, StyleSheet } from 'react-native';
import { useState } from 'react';

export default AuthorizationScreen = (props) => {
    const [username, setUsername] = useState('Enter your username');
    const [password, setPassword] = useState('Enter your password');

    const onLoginPressed = () => {
        props.logUserInCallback(username, password);
    }


    return(
        <View style={styles.container}>
            <Text>It's not delivery...</Text>
            <Image source={require('./img/logo.jpg')}/>
            <TextInput
                style={styles.input}
                onChangeText={setUsername}
                value={username}
                autoCorrect={false}
                clearTextOnFocus={true}
                textContentType={'username'}
                autoCapitalize={false}
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
                onPress={onLoginPressed}
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