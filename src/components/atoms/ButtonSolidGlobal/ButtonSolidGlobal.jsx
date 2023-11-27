import React from 'react';
import PropTypes from 'prop-types';

const ButtonSolidGlobal = (props) => {
  const { className } = props;

  return <button {...props} className={`button_solid ${className}`} />;
};

ButtonSolidGlobal.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
};

ButtonSolidGlobal.defaultProps = {
  className: '',
  onClick: () => {},
};

export default ButtonSolidGlobal;
