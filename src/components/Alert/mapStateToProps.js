import { createSelector } from 'reselect';
import getAlert from '../../selectors/getAlert';

const mapStateToProps = createSelector(
  (state, { alertId }) => getAlert(alertId)(state),
  props => ({
    ...props,
  }),
);

export default mapStateToProps;
