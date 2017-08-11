/* eslint-disable import/prefer-default-export */
import { createAction } from 'redux-actions';

const modulePrefix = '@@redux-modular-alerts/';

export const setAlert = createAction(
  `${modulePrefix}setAlert`,
  undefined,
  (alertId, bsStyle, message) => ({ alertId, bsStyle, message }),
);

export const clearAlert = createAction(
  `${modulePrefix}clearAlert`,
  undefined,
  alertId => ({ alertId }),
);
