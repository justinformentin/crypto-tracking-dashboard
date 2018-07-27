/**
 * @module utils/redditApi 
 * @desc 
 */
import axios from 'axios';

const BASE_URL = 'https://www.reddit.com';

export function searchQuery(query) {

	const RESOURCE = 'search';
	const request = axios.get(`${BASE_URL}/${RESOURCE}.json?q=${query}&sort=top&t=day`); // TODO: Axios can handle a param obj instead of template literal query strings; refactor this to convert each param into an obj prop

	return request;
}
