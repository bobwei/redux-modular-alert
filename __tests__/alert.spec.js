/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';

import { createReducer, setAlert, clearAlert, Alert } from '../src/index';

describe('alert', () => {
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

  test('display message for a given alertId', () => {
    dispatch(setAlert('alertId', 'success', 'Create Successfully'));
    expect(getState()).toEqual({
      alerts: {
        alertId: {
          bsStyle: 'success',
          message: 'Create Successfully',
        },
      },
    });
    const wrapper = mount(
      <Provider store={store}>
        <Alert alertId="alertId" />
      </Provider>,
    );
    expect(wrapper.text()).toEqual('Create Successfully');
  });

  test('do not display if no message', () => {
    dispatch(clearAlert('alertId'));
    const wrapper = mount(
      <Provider store={store}>
        <Alert alertId="alertId" />
      </Provider>,
    );
    expect(wrapper.html()).toEqual(null);
  });
});
