import React, { Children } from 'react';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import { isEmpty } from 'lodash';
import { LabelGlobal, InputGlobal } from '../../atoms';

const LabelInputGlobal = (props) => {
  const { className, classNameLabel, htmlFor, requiredLabel, label, classNameInput, name, nameController, idInput, control, ...inputProps } = props;

  return (
    <div className={`space-y-0.5 ${className}`}>
      {control && (
        <>
          {label && (
            <LabelGlobal className={`${classNameLabel}`} htmlFor={htmlFor} required={requiredLabel}>
              {label}
            </LabelGlobal>
          )}

          <Controller name={!isEmpty(nameController) ? nameController : name} control={control} render={({ field }) => <InputGlobal {...inputProps} className={`${classNameInput}`} name={name} id={!isEmpty(idInput) ? idInput : htmlFor} {...field} />} />
        </>
      )}
    </div>
  );
};

LabelInputGlobal.propTypes = {
  className: PropTypes.string,
  classNameLabel: PropTypes.string,
  htmlFor: PropTypes.string,
  requiredLabel: PropTypes.bool,
  label: PropTypes.string,
  classNameInput: PropTypes.string,
  name: PropTypes.string.isRequired,
  nameController: PropTypes.string,
  idInput: PropTypes.string,
  control: PropTypes.any.isRequired,
};

LabelInputGlobal.defaultProps = {
  className: '',
  classNameLabel: '',
  htmlFor: '',
  requiredLabel: false,
  label: '',
  classNameInput: '',
  // name:'',
  nameController: '',
  idInput: '',
  // control: undefined,
};

export default LabelInputGlobal;
