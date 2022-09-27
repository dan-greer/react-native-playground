import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, View, StyleSheet} from 'react-native';
import Item from './item.component';
import getMarketplaceData from '../services/marketplace.service';
import Container from './container.component';

export default MarketPlaceList = (props) => {
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
        props.navigation.navigate('SingleItem', {item: item});
    }
    
    const renderItem = ({item}) => {
        return <Item title={item.title} onPressCallback={onPressCallback}/>
    }
    
    return (
        <View>
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