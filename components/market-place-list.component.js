import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, View} from 'react-native';
import Item from './item.component';
import DATA from '../shared/statics';
import getMarketplaceData from '../service/marketplace.service';

export default MarketPlaceList = () => {
    const [isLoading, setIsLoading] = useState(true);
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