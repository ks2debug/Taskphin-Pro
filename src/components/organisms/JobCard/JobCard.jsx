import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { lazyload } from 'react-lazyload';
import { isEmpty, isEqual, isNull, isUndefined } from 'lodash';
import { ButtonSolidGlobal, ButtonOutlineGlobal, PGlobal, ImgGlobal } from '../../atoms';
import { Images } from '../../../utils';
import styles from './job-card.module.scss';

const JobCard = (props, ref) => {
  const { className, tableRowData, onClickApplyNow, onClickExternalApply } = props;

  return (
    <>
      {!isNull(tableRowData) && !isUndefined(tableRowData) && !isEmpty(tableRowData) && (
        <div ref={ref} {...props} className={`${styles.div_job_card} w-full sm:w-[450px] flex flex-row items-start rounded-lg m-5 px-3 py-2 space-x-1.5 ${className}`}>
          <ImgGlobal src={Images.netflix} />
          <div className="space-y-3">
            <div>
              <PGlobal className="text-lg">{tableRowData.title}</PGlobal>
              <PGlobal>{tableRowData.company_name}</PGlobal>
              <PGlobal colorName="gray">{tableRowData.location}</PGlobal>
            </div>
            <div className="space-y-1">
              <PGlobal>{tableRowData.time}</PGlobal>
              <PGlobal>{tableRowData.experience_required}</PGlobal>
              <PGlobal>{tableRowData.package}</PGlobal>
              <PGlobal>{tableRowData.company_size}</PGlobal>
            </div>
            {tableRowData.apply_now ? <ButtonSolidGlobal onClick={onClickApplyNow}>Apply Now</ButtonSolidGlobal> : <ButtonOutlineGlobal onClick={onClickExternalApply}>External Apply</ButtonOutlineGlobal>}
          </div>
        </div>
      )}
    </>
  );
};

JobCard.propTypes = {
  className: PropTypes.string,
  tableRowData: PropTypes.object.isRequired,
  onClickApplyNow: PropTypes.func,
  onClickExternalApply: PropTypes.func,
};

JobCard.defaultProps = {
  className: '',
  onClickApplyNow: () => {},
  onClickExternalApply: () => {},
};

const LazyJobCard = lazyload({
  height: 100,
  once: true,
  offset: 100,
})(React.forwardRef(JobCard));

// export default JobCard;
export default memo(LazyJobCard, (prevProps, currentProps) => {
  return isEqual(prevProps.tableRowData, currentProps.tableRowData);
});
