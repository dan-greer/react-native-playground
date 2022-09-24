import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, View, StyleSheet} from 'react-native';
import Item from './item.component';
import getMarketplaceData from '../services/marketplace.service';
import Container from './container.component';

export default MarketPlaceList = ({navigation}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        loadMarketplaceData();
    }, []);

    const loadMarketplaceData = () => {
        getMarketplaceData()
        .then((response) => {
            setData(response.data.body);
            setIsLoading(false);
        })
        .catch((error) => {
            console.log(error);
        });
    }

    
    const onPressCallback = (item) => {
        console.log(item);
        navigation.navigate('SingleItem', {item: item});
    }
    
    const renderItem = ({item}) => {
        return <Item title={item.title} navigator={navigation} onPressCallback={onPressCallback}/>
    }
    
    return (
        <View style={styles.container}>
            { isLoading ? 
                <ActivityIndicator/> : 
                <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}/>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#C0E0DE',
        borderWidth: 5,
        borderRadius: 15,
        borderColor: 'white',
        marginVertical: 35
    }
});