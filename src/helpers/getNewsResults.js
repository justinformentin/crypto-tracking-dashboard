import axios from 'axios';


export default function getNewsResults(cryptoName) {
    const request = axios.get(`https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fcointelegraph.com%2Frss%2Ftag%2F${cryptoName}&api_key=q9cayrt4ahrde14ijfdelmhwmlw7odstwermcwqh&count=30`);

	return request; 
}