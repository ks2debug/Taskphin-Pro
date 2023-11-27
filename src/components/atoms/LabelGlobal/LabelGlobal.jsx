import React, { Children } from 'react';
import PropTypes from 'prop-types';

const LabelGlobal = (props) => {
  const { className, colorName, children, required } = props;

  return (
    <label {...props} className={`label_global ${colorName === 'gray' ? 'label_gray' : ''} ${className}`}>
      {children}
      {required && <span className="label_required_star">*</span>}
    </label>
  );
};

LabelGlobal.propTypes = {
  className: PropTypes.string,
  colorName: PropTypes.oneOf(['gray']),
  children: PropTypes.string,
  htmlFor: PropTypes.string,

  required: PropTypes.bool,
};

LabelGlobal.defaultProps = {
  className: '',
  colorName: '',
  children: '',
  htmlFor: '',
  required: false,
};

export default LabelGlobal;
