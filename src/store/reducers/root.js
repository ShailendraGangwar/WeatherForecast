import { GET_DATA, GET_ERROR } from '../actions/actionTypes';
const initialState = {
    weatherData: [],
    currentCity: ''
};

export const parseWeatherData = (responseJson) => {
    var testWeatherDataArr = [];
    var testArr = Array.from(responseJson);
    responseJson.forEach(function (itemIn) {
        var dateInItem = new Date(itemIn.dt_txt.slice(0, 10)).toDateString();
        var currentDayWeather = [];
        currentDayWeather = testArr.filter(
            (item) => {
                var dayNumberInList = new Date(item.dt_txt.slice(0, 10)).toDateString();
                return dayNumberInList == dateInItem;
            }
        );
        if (currentDayWeather.length !== 0) {
            if (-1 === testWeatherDataArr.findIndex((currentitem) => {
                    var dateKey = new Date(itemIn.dt_txt.slice(0, 10)).toDateString()
                    return currentitem.key === dateKey;
                })
            ) {
                var dateKey = new Date(itemIn.dt_txt.slice(0, 10)).toDateString()
                testWeatherDataArr = testWeatherDataArr.concat({
                    key: dateKey,
                    data:[currentDayWeather]
                })
            }
        }
    });
    return testWeatherDataArr
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DATA:
            return {
                ...state,
                weatherData: parseWeatherData(action.response.list),
                currentCity: action.response.city.name
            };
        case GET_ERROR:
            return {
                ...state,
            }
        default:
            return state;
    }
};

export default reducer;