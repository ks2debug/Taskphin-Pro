import React, { useState } from 'react';
import { toast as toastToastify } from 'react-toastify';
import styles from './dashboard.module.scss';
import { ButtonSolidGlobal } from '../../atoms';
import { JobList } from '../../templates';
import jobListData from '../../../testingStuff/jobListData.json';
import { CreateJobStepOne, CreateJobStepTwo } from '../../organisms';

const Dashboard = (props) => {
  const [currentDiv, setCurrentDiv] = useState(3);

  return (
    <div className="uti-container">
      <CreateJobStepOne
        className={`${currentDiv === 1 ? 'block' : 'hidden'}`}
        onClickNext={(data) => {
          toastToastify.success(JSON.stringify(data));
          setCurrentDiv(2);
        }}
      />

      <CreateJobStepTwo
        className={`${currentDiv === 2 ? 'block' : 'hidden'}`}
        onClickSave={(data) => {
          toastToastify.success(JSON.stringify(data));
          setCurrentDiv(3);
        }}
      />

      <ButtonSolidGlobal
        className={`${currentDiv === 3 ? 'block' : 'hidden'} my-3`}
        onClick={() => {
          setCurrentDiv(1);
        }}>
        Show Create Job Form
      </ButtonSolidGlobal>

      <div className={`${styles.div_job_list} ${currentDiv === 3 ? 'block' : 'hidden'}`}>
        <JobList jobListData={jobListData.data} />
      </div>
    </div>
  );
};

export default Dashboard;
