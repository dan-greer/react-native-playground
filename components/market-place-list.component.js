import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, View} from 'react-native';
import Item from './item.component';
import DATA from '../shared/statics';
import getMarketplaceDataApi from '../service/marketplace.service';

export default MarketPlaceList = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);

    fetch('http://localhost:3000/marketplace')

    useEffect(() => {
        setData(getMarketplaceDataApi())
    }, []);
    
    const renderItem = ({item}) => {
        return <Item title={item.title}/>
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