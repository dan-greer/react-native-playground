import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, View} from 'react-native';
import Item from './item.component';
import getMarketplaceData from '../service/marketplace.service';

export default MarketPlaceList = ({navigation}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState([
        {
            id: '123',
            title: 'First Item'
        }, 
        {
            id: '456',
            title: 'Second Item'
        }, 
        {
            id: '789',
            title: 'Third Item'
        }
    ]);

    // useEffect(() => {
    //     loadMarketplaceData();
    // }, []);

    // const loadMarketplaceData = () => {
    //     getMarketplaceData()
    //     .then((response) => {
    //         setData(response.data.body);
    //         setIsLoading(false);
    //     })
    //     .catch((error) => {
    //         console.log(error);
    //     });
    // }

    
    const onPressCallback = (item) => {
        console.log(item);
        navigation.navigate('Item View', {item: item});
    }
    
    const renderItem = ({item}) => {
        return <Item title={item.title} navigator={navigation} onPressCallback={onPressCallback}/>
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