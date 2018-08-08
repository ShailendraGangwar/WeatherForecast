import { APP_ID, WEATHER_ROOT_URL } from '../constants/constants';

export const fetchWeatherData = (zipCode) => {
    var currentWeatherUrl = `${WEATHER_ROOT_URL}zip=${zipCode},in&appid=${APP_ID}&units=metric`
    return fetch(currentWeatherUrl)
      .then((response) => response.json())
}