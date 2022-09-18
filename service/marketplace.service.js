import axios from 'axios';
const marketplaceUrl = 'https://ednk3d0e5i.execute-api.us-east-2.amazonaws.com/prod';



const getMarketplaceDataApi = () => {
    return axios.get(`${marketplaceUrl}`);
}

export default getMarketpalceData = () => {
    return getMarketplaceDataApi();
}