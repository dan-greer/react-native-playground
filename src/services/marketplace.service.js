import axios from 'axios';
const marketplaceUrl = 'https://ednk3d0e5i.execute-api.us-east-2.amazonaws.com/prod';



const getMarketplaceDataApi = () => {
    return new Promise((resolve, reject) => {
        resolve({
            data: {
                body: [
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
                ]
            }
        });
    });
}

export default getMarketpalceData = () => {
    return getMarketplaceDataApi();
}