import R from 'ramda';

import { clearAlert } from '../../actions';

const mapDispatchToProps = (dispatch, { alertId }) => ({
  clearAlert: R.compose(dispatch, clearAlert, R.always(alertId)),
});

export default mapDispatchToProps;
