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
  setPropTypes({
    alertId: PropTypes.string.isRequired,
  }),
  connect(mapStateToProps),
  mapProps(R.omit(['alertId', 'dispatch'])),
  branch(R.compose(R.isNil, R.prop('message')), renderNothing),
)(Component);
