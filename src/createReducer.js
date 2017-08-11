import R from 'ramda';
import { handleActions } from 'redux-actions';

import initialState from './initialState';
import { setAlert, clearAlert } from './actions';

const createReducer = () =>
  handleActions(
    {
      [setAlert]: (state, { meta: { alertId, bsStyle, message } }) =>
        R.assocPath([alertId], { bsStyle, message })(state),
      [clearAlert]: (state, { meta: { alertId } }) =>
        R.dissocPath([alertId])(state),
    },
    initialState,
  );

export default createReducer;
