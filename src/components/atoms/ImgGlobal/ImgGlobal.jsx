/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import PropTypes from 'prop-types';

const ImgGlobal = (props) => {
  const { className } = props;

  return <img {...props} className={`image  ${className}`} />;
};

ImgGlobal.propTypes = {
  className: PropTypes.string,
  src: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  alt: PropTypes.string,
};

ImgGlobal.defaultProps = {
  className: '',
  alt: 'Image',
};

export default ImgGlobal;
