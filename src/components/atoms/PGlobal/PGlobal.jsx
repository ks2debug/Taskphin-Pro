import React from 'react';
import PropTypes from 'prop-types';

const PGlobal = (props) => {
  const { className, colorName } = props;

  return <p {...props} className={`p_global ${colorName === 'gray' ? 'p_gray' : ''} ${className}`} />;
};

PGlobal.propTypes = {
  className: PropTypes.string,
  colorName: PropTypes.oneOf(['gray']),
};

PGlobal.defaultProps = {
  className: '',
  colorName: '',
};

export default PGlobal;
