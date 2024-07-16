import { formatMoney } from '../functions/formatMoney';
import { UserType } from '../types';
import Detail from './Detail';

const EducationAndEmployment = (props: { user: UserType }) => (
  <div className='detail-box'>
    <div className='detail-header-container'>
      <h2>Education and Employment</h2>
    </div>
    <div className='detail-body'>
      <Detail title='LEVEL OF EDUCATION' value={props.user.levelOfEducation} />
      <Detail title='EMPLOYMENT STATUS' value={props.user.employmentStatus} />
      <Detail
        title='SECTOR OF EMPLOYMENT'
        value={props.user.sectorOfEmployment}
      />
      <Detail
        title='DURATION OF EMPLOYMENT'
        value={props.user.durationOfEmployment}
      />
      <Detail title='OFFICE EMAIL' value={props.user.officeEmail} />
      <Detail
        title='MONTHLY INCOME'
        value={`${formatMoney(
          +props.user.monthlyIncomeMin,
          0
        )}.00 - ${formatMoney(+props.user.monthlyIncomeMax, 0)}.00`}
      />
      <Detail
        title='LOAN REPAYMENT'
        value={`${formatMoney(+props.user.loanRepayment, 0)}`}
      />
    </div>
  </div>
);

export default EducationAndEmployment;
