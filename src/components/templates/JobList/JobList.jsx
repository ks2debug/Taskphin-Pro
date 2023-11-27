import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { isEmpty, isEqual, isNull, isUndefined } from 'lodash';
import toastHot from 'react-hot-toast';
import { JobCard } from '../../organisms';
import { Constants, Images } from '../../../utils';
import styles from './job-list.module.scss';

const JobList = (props) => {
  const { className, jobListData } = props;

  return (
    <div {...props} className={`flex flex-wrap justify-center ${className}`}>
      {!isNull(jobListData) && !isUndefined(jobListData) && !isEmpty(jobListData) ? (
        jobListData.map((value, index, array) => {
          return (
            <JobCard
              key={value.id}
              tableRowData={value}
              onClickApplyNow={() => {
                toastHot.success(jobListData[index].title);
              }}
              onClickExternalApply={() => {
                toastHot.success(jobListData[index].title);
              }}
            />
          );
        })
      ) : (
        <div className="my-3">
          <strong>{jobListData.length === 0 ? Constants.NO_DATA_TO_DISPLAY : ''}</strong>
        </div>
      )}
    </div>
  );
};

JobList.propTypes = {
  className: PropTypes.string,
  jobListData: PropTypes.array.isRequired,
};

JobList.defaultProps = {
  className: '',
};

export default memo(JobList, (prevProps, currentProps) => {
  return isEqual(prevProps.jobListData, currentProps.jobListData);
});
