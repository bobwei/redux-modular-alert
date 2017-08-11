import React from 'react';
import PropTypes from 'prop-types';
import Alert from 'react-bootstrap/lib/Alert';
import connect from 'react-redux/lib/connect/connect';
import R from 'ramda';
import compose from 'recompose/compose';
import mapProps from 'recompose/mapProps';
import setPropTypes from 'recompose/setPropTypes';
import branch from 'recompose/branch';
import renderNothing from 'recompose/renderNothing';
import lifecycle from 'recompose/lifecycle';
import defaultProps from 'recompose/defaultProps';

import { clearAlert } from '../../actions';
import mapStateToProps from './mapStateToProps';

const Component = ({ message, ...props }) =>
  <Alert {...props}>
    {message}
  </Alert>;

Component.propTypes = {
  message: PropTypes.string,
};

Component.defaultProps = {
  message: '',
};

export default compose(
  defaultProps({
    autoHideInSec: -1,
  }),
  setPropTypes({
    alertId: PropTypes.string.isRequired,
    autoHideInSec: PropTypes.number,
  }),
  connect(mapStateToProps),
  branch(R.compose(R.isNil, R.prop('message')), renderNothing),
  lifecycle({
    componentDidMount() {
      const { autoHideInSec, dispatch, alertId } = this.props;
      if (autoHideInSec >= 0) {
        setTimeout(() => dispatch(clearAlert(alertId)), autoHideInSec * 1000);
      }
    },
  }),
  mapProps(R.omit(['alertId', 'dispatch', 'autoHideInSec'])),
)(Component);
