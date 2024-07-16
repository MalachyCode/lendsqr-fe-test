import { UserType } from '../types';
import Detail from './Detail';

const Guarantor = (props: { user: UserType }) => (
  <div className='detail-box'>
    <div className='detail-header-container'>
      <h2>Guarantor</h2>
    </div>
    <div className='detail-body'>
      <Detail title='FULL NAME' value={props.user.guarantorFullName} />
      <Detail title='PHONE NUMBER' value={props.user.guarantorPhoneNumber} />
      <Detail title='EMAIL ADDRESS' value={props.user.guarantorEmail} />
      <Detail title='RELATIONSHIP' value={props.user.guarantorRelationship} />
    </div>
  </div>
);

export default Guarantor;
