import React, { Children } from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';
import { LabelGlobal, InputGlobal } from '../../atoms';

const LabelInputRadio = (props) => {
  const { className, classNameInput, name, idInput, classNameLabel, colorNameLabel, htmlFor, label, ...inputProps } = props;

  return (
    <div className={`flex space-x-1 ${className}`}>
      <InputGlobal {...inputProps} className={`w-4 h-4 ${classNameInput}`} name={name} id={idInput} />

      {label && (
        <LabelGlobal className={`${classNameLabel}`} colorName={colorNameLabel} htmlFor={!isEmpty(htmlFor) ? htmlFor : idInput}>
          {label}
        </LabelGlobal>
      )}
    </div>
  );
};

LabelInputRadio.propTypes = {
  className: PropTypes.string,
  classNameInput: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  idInput: PropTypes.string.isRequired,
  classNameLabel: PropTypes.string,
  colorNameLabel: PropTypes.string,
  htmlFor: PropTypes.string,
  label: PropTypes.string,
};

LabelInputRadio.defaultProps = {
  className: '',
  classNameInput: '',
  onChange: () => {},
  type: 'radio',
  classNameLabel: '',
  colorNameLabel: '',
  htmlFor: '',
  label: '',
};

export default LabelInputRadio;
