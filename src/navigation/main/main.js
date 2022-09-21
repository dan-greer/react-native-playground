import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Auth from '../auth/auth';
import Home from '../home/home';

export default Main = (props) => {
    const [loggedin, setLoggedin] = useState(false);

    const userLoggedIn = () => {
        setLoggedin(true);
    }

    return(  
        <View style={styles.container}>
            {loggedin ? 
                <Home/> 
                : <Auth loginUserCallback={userLoggedIn}/>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#3C474B'
    }
});