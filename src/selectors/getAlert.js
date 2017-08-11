import R from 'ramda';

import REDUCER_KEY from '../constants/REDUCER_KEY';

const getAlert = (alertId, state, { reducerKey = REDUCER_KEY } = {}) =>
  R.path([reducerKey, alertId])(state);

export default R.curry(getAlert);
