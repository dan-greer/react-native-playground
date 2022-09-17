export default getMarketplaceDataApi = () => {
    return fetch('http://localhost:3000/marketplace')
        .then((res) => res.json())
        .then((json) => {
            return json;
        })
        .catch((error) => {
            console.error(error);
        }) ;
}