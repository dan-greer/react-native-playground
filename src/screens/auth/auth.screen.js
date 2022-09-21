import { View, TextInput, Pressable, Image, Text, StyleSheet } from 'react-native';
import { useState } from 'react';

export default AuthenticationScreen = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const onLoginPressed = () => {
        props.logUserInCallback(username, password);
    }


    return(
        <View style={styles.container}>
            <Text style={styles.headerText}>Delivery</Text>
            <Text style={styles.labelText}>Username</Text>
            <TextInput
                style={styles.input}
                onChangeText={setUsername}
                value={username}
                autoCorrect={false}
                clearTextOnFocus={true}
                textContentType={'username'}
                autoCapitalize={false}
            />
            <Text style={styles.labelText}>Password</Text>
            <TextInput
                style={styles.input}
                onChangeText={setPassword}
                value={password}
                autoCorrect={false}
                clearTextOnFocus={true}
                textContentType={'password'}
                secureTextEntry={true}
            />
            <Pressable
                onPress={onLoginPressed}
                style={styles.button}>
                    <Text style={styles.loginText}>Log in</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        height: 60,
        width: 260,
        margin: 12,
        borderWidth: 1,
        padding: 15,
        borderWidth: 1,
        borderRadius: 15,
        color: '#162521'
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        backgroundColor: '#162521',
        paddingVertical: 12,
        paddingHorizontal: 32
    },
    loginText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white'
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 28,
        color: '#162521',
        marginBottom: 15
    },
    labelText: {
        color: '#162521',

    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#C0E0DE',
        borderWidth: 5,
        borderRadius: 15,
        borderColor: 'white',
        paddingVertical: 35,
        paddingHorizontal: 15
    }
});