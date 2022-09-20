import { View, TextInput, Button, Image, Text, Alert, Keyboard, Pressable } from 'react-native';
import {useState} from 'react';
import styles from './auth.styles';

export default Auth = (props) => {
    const [userName, setUserName] = useState('Enter user name');
    const [password, setPassword] = useState('Enter password');

    const logUserIn = () => {
        if (userName === 'test-username' && password === 'test-password') {
            props.loginUserCallback();
        } else {
            Alert.alert('Incorrect username or password!');
        }
    }

    return(
        <Pressable onPress={() => Keyboard.dismiss()}>
            <View style={styles.container}>
                <Text>It's not delivery...</Text>
                <Image source={require('./img/logo.jpg')}/>
                <TextInput
                    style={styles.input}
                    onChangeText={setUserName}
                    value={userName}
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
                    onPress={logUserIn}
                    style={styles.button}
                />
            </View>
        </Pressable>
    );
}