import { UsersDataInfoType } from '../types';

const RenderUsersInfo = (usersData: UsersDataInfoType) => (
  <div className='users-info-box'>
    <div className='icon-box'>
      <img src={usersData.icon} alt='' />
    </div>
    <div className='name-box'>
      <p>{usersData.name}</p>
    </div>
    <div className='total-box'>
      <p>{usersData.total}</p>
    </div>
  </div>
);

export default RenderUsersInfo;
