import React from 'react';
import PropTypes from 'prop-types';

const InputGlobal = (props) => {
  const { className } = props;

  return <input {...props} className={`input_global ${className}`} />;
};

InputGlobal.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
};

InputGlobal.defaultProps = {
  className: '',
  onChange: () => {},
  type: '',
  id: '',
  placeholder: '',
  required: false,
};

export default InputGlobal;
