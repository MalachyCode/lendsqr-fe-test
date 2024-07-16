import { UserType } from '../types';
import Detail from './Detail';

const PersonalInformation = (props: { user: UserType }) => (
  <div className='detail-box'>
    <div className='detail-header-container'>
      <h2>Personal Info</h2>
    </div>
    <div className='detail-body'>
      <Detail title='FULL NAME' value={props.user.fullName} className={true} />
      <Detail
        title='PHONE NUMBER'
        value={props.user.phoneNumber}
        className={true}
      />
      <Detail title='EMAIL' value={props.user.email} className={true} />
      <Detail title='BVN' value={props.user.BVN} className={true} />
      <Detail title='GENDER' value={props.user.gender} className={true} />
      <Detail
        title='MARITAL STATUS'
        value={props.user.maritalStatus}
        className={true}
      />
      <Detail title='CHILDREN' value={props.user.children} className={true} />
      <Detail
        title='TYPE OF RESIDENCE'
        value={props.user.typeOfResidence}
        className={true}
      />
    </div>
  </div>
);

export default PersonalInformation;
