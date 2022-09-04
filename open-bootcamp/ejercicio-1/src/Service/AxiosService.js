import APIRequest from '../Utils/config/Axios.config.js';

export function getRandomJoke() {
  return APIRequest.get('random');
}