import config from './config';


const API_KEY = config.apiKey;
const URL =  country => `https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=${country}&api_key=${API_KEY}&format=json`;

export default function getArtists(country) {
    return fetch(URL(country))
    .then(response => response.json())
    .then(json => json.topartists.artist);
}