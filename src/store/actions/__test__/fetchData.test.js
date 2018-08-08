import * as types from '../actionTypes';
import * as actions from '../fetchData';

describe('actions', () => {
  it('should create an action to pass a response', () => {
    const response = 'response'
    const expectedAction= {
      type: types.GET_DATA,
      response
    }
    expect(actions.fetchData(response)).toEqual(expectedAction)
  })
})