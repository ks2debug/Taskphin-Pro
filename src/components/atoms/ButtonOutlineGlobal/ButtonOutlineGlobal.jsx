import React from 'react';
import PropTypes from 'prop-types';

const ButtonOutlineGlobal = (props) => {
  const { className } = props;

  return <button {...props} className={`button_outline ${className}`} />;
};

ButtonOutlineGlobal.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
};

ButtonOutlineGlobal.defaultProps = {
  className: '',
  type: 'button',
  onClick: () => {},
};

export default ButtonOutlineGlobal;
