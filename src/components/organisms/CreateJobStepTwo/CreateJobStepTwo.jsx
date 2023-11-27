import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { ButtonSolidGlobal, PGlobal, LabelGlobal } from '../../atoms';
import styles from './create-job-step-two.module.scss';
import { LabelInputGlobal, LabelInputRadio } from '../../molecules';

const CreateJobStepTwo = (props) => {
  const { className, onClickSave } = props;

  const CreateJobSchema = yup.object().shape({});

  const {
    control,
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      experience_min: '',
      experience_max: '',
      salary_min: '',
      salary_max: '',
      total_employee: '',
    },
    resolver: yupResolver(CreateJobSchema),
  });

  const onSubmitForm = async (data) => {
    onClickSave(data);
  };

  return (
    <div {...props} className={`${styles.div_create_job_step} flex flex-col w-11/12 sm:w-[450px] rounded-lg m-5 p-5 space-y-4 ${className}`}>
      <div className="flex flex-row justify-between">
        <PGlobal className="text-lg">Create a job</PGlobal>
        <PGlobal className="text-base font-medium">Step 2</PGlobal>
      </div>

      <form className="w-100 space-y-4" id="form_email_password" onSubmit={handleSubmit(onSubmitForm)} onChange={(event) => {}} noValidate>
        <div className="sm:flex sm:flex-row sm:items-end space-y-4 sm:space-x-5">
          <LabelInputGlobal className="basis-1/2" label="Experience" name="experience_min" placeholder="Minimum" control={control} />
          <LabelInputGlobal className="basis-1/2" name="experience_max" placeholder="Maximum" control={control} />
        </div>

        <div className="sm:flex sm:flex-row sm:items-end space-y-4 sm:space-x-5">
          <LabelInputGlobal className="basis-1/2" label="Salary" name="salary_min" placeholder="Minimum" control={control} />
          <LabelInputGlobal className="basis-1/2" name="salary_max" placeholder="Maximum" control={control} />
        </div>

        <LabelInputGlobal label="Total employee" name="total_employee" placeholder="ex. 100" control={control} />

        <div className="flex flex-col space-y-20">
          <div className="space-y-0.5">
            <LabelGlobal>Apply type</LabelGlobal>
            <div className="flex flex-row space-x-5">
              <LabelInputRadio
                name="apply_type"
                idInput="quick_apply"
                label="Quick apply"
                onChange={(event) => {
                  console.log('🚀 ~ file: CreateJobStepTwo.jsx:90 ~ CreateJobStepTwo ~ event:', event.target);
                }}
                colorNameLabel="gray"
              />
              <LabelInputRadio
                name="apply_type"
                idInput="external_apply"
                label="External apply"
                onChange={(event) => {
                  console.log('🚀 ~ file: CreateJobStepTwo.jsx:99 ~ CreateJobStepTwo ~ event:', event.target);
                }}
                colorNameLabel="gray"
              />
            </div>
          </div>
          <div className="flex justify-end">
            <ButtonSolidGlobal>Save</ButtonSolidGlobal>
          </div>
        </div>
      </form>
    </div>
  );
};

CreateJobStepTwo.propTypes = {
  className: PropTypes.string,
  onClickSave: PropTypes.func,
};

CreateJobStepTwo.defaultProps = {
  className: '',
  onClickSave: () => {},
};

export default CreateJobStepTwo;
