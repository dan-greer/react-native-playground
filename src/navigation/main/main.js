import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Auth from '../auth/auth';

export default Main = (props) => {
    const [loggedin, setLoggedin] = useState(false);
    // needs to determine if account is logged in or not
    // if logged in, display the main marketplace page
    // if not logged in, display the login page

    const userLoggedIn = () => {
        setLoggedin(true);
    }

    return(  
        <View style={styles.container}>
            {loggedin ? 
                <Text>You are logged in!</Text> 
                : <Auth loginUserCallback={userLoggedIn}/>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    }
});