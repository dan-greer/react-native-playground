import { Alert } from 'react-native';
import AuthenticationScreen from '../../screens/auth/auth.screen';

export default Auth = (props) => {

    const logUserIn = (username, password) => {
        if (username === 'test-username' && password === 'test-password') {
            props.loginUserCallback();
        } else {
            Alert.alert('Incorrect username or password!');
        }
    }

    return(
        <AuthenticationScreen logUserInCallback = {logUserIn}/>
    );
}