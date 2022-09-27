import axios from 'axios';
const marketplaceUrl = 'https://ednk3d0e5i.execute-api.us-east-2.amazonaws.com/prod';



const getMarketplaceDataApi = () => {
    return new Promise((resolve, reject) => {
        resolve({
            data: {
                body: [
                    {
                        id: '123',
                        title: 'Nails 100 ct',
                        description: 'Bucket of 100 new roofing nails'
                    }, 
                    {
                        id: '456',
                        title: 'Shingles 50 ct',
                        description: 'Pallet of 50 new shingles'
                    }, 
                    {
                        id: '789',
                        title: 'Roof Tar 5 gal',
                        description: '5 gallon bucket of roofing tar'
                    }
                ]
            }
        });
    });
}

export default getMarketpalceData = () => {
    return getMarketplaceDataApi();
}