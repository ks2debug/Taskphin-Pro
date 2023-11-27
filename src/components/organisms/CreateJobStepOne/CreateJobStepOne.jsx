import React from 'react';
import PropTypes from 'prop-types';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { ButtonSolidGlobal, ButtonOutlineGlobal, PGlobal, ImgGlobal, InputGlobal } from '../../atoms';
import styles from './create-job-step-one.module.scss';
import { LabelInputGlobal } from '../../molecules';

const CreateJobStepOne = (props) => {
  const { className, onClickNext } = props;

  const CreateJobSchema = yup.object().shape({});

  const {
    control,
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      job_title: '',
      company_name: '',
      industry: '',
      location: '',
      remote_type: '',
    },
    resolver: yupResolver(CreateJobSchema),
  });

  const onSubmitForm = async (data) => {
    onClickNext(data);
  };

  return (
    <div {...props} className={`${styles.div_create_job_step} flex flex-col w-11/12 sm:w-[450px] rounded-lg m-5 p-5 space-y-4 ${className}`}>
      <div className="flex flex-row justify-between">
        <PGlobal className="text-lg">Create a job</PGlobal>
        <PGlobal className="text-base font-medium">Step 1</PGlobal>
      </div>

      <form className="w-100 space-y-4" id="form_email_password" onSubmit={handleSubmit(onSubmitForm)} onChange={(event) => {}} noValidate>
        <LabelInputGlobal label="Job title" requiredLabel name="job_title" placeholder="ex. UX UI Designer" control={control} />

        <LabelInputGlobal label="Company name" requiredLabel name="company_name" placeholder="ex. Google" control={control} />
        <LabelInputGlobal label="Industry" requiredLabel name="industry" placeholder="ex. Information Technology " control={control} />

        <div className="flex flex-col space-y-20">
          <div className="sm:flex sm:flex-row space-y-4 sm:space-y-0 sm:space-x-5">
            <LabelInputGlobal className="sm:basis-1/2" label="Location" name="location" placeholder="ex. Chennai" control={control} />
            <LabelInputGlobal className="sm:basis-1/2" label="Remote type" name="remote_type" placeholder="ex. In-office" control={control} />
          </div>
          <div className="flex justify-end">
            <ButtonSolidGlobal>Next</ButtonSolidGlobal>
          </div>
        </div>
      </form>
    </div>
  );
};

CreateJobStepOne.propTypes = {
  className: PropTypes.string,
  onClickNext: PropTypes.func,
};

CreateJobStepOne.defaultProps = {
  className: '',
  onClickNext: () => {},
};

export default CreateJobStepOne;
