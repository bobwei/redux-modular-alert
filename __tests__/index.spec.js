import { createStore, combineReducers } from 'redux';

import { createReducer, setAlert, clearAlert, getAlert } from '../src/index';

describe('can createReducer and update state with actions', () => {
  const rootReducer = combineReducers({
    alerts: createReducer(),
  });
  const store = createStore(rootReducer);
  const { getState, dispatch } = store;

  test('initialState', () => {
    expect(getState()).toEqual({
      alerts: {},
    });
  });

  test('setAlert', () => {
    dispatch(setAlert('alertId', 'success', 'Hello World'));
    expect(getState()).toEqual({
      alerts: {
        alertId: {
          bsStyle: 'success',
          message: 'Hello World',
        },
      },
    });
  });

  test('clearAlert', () => {
    dispatch(clearAlert('alertId'));
    expect(getState()).toEqual({
      alerts: {},
    });
  });

  test('getAlert', () => {
    dispatch(setAlert('alertId', 'success', 'Hello World 2'));
    const selector = getAlert('alertId');
    expect(selector(getState())).toEqual({
      bsStyle: 'success',
      message: 'Hello World 2',
    });
  });
});
