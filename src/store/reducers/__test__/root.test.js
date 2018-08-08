import reducer from '../root';
import * as types from '../../actions/actionTypes';
import { parseWeatherData } from '../root';
import { response } from '../../../config/jest/MockResponse';

describe('root reducer', () => {
    it('should return the initial state', () => {
      expect(reducer(undefined, {})).toEqual(
        {
            weatherData: [],
            currentCity: ''
        }
      )
    })

    it('should handle GET_DATA', () => {
      expect(
        reducer([], {
          type: types.GET_DATA,
          response: response
        })
      ).toEqual(
        {
            weatherData: parseWeatherData(response.list),
            currentCity: response.city.name
        }
      )
    })
  })