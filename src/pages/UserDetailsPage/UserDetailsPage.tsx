import { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Topbar from '../Topbar/TopBar';
import backIcon from '/back-icon.svg';
import userAvatar from '/user-avatar.svg';
import './UserDetailsPage.scss';

const UserDetailsPage = () => {
  const [openSideBar, setOpenSideBar] = useState(false);

  return (
    <div className='dashboard'>
      <Topbar openSideBar={openSideBar} setOpenSideBar={setOpenSideBar} />
      <div className='body'>
        <Sidebar openSideBar={openSideBar} />
        <div className='main-body'>
          <div className='container'>
            <div className='page-head'>
              <div className='left'>
                <div className='back-button'>
                  <img src={backIcon} alt='' />
                  <p>Back to Users</p>
                </div>
                <h3>User Details</h3>
              </div>
              <div className='right'>
                <div className='buttons-container'>
                  <div className='blacklist-btn'>BLACKLIST USER</div>
                  <div className='activate-btn'>ACTIVATE USER</div>
                </div>
              </div>
            </div>
            <div className='user-summary'>
              <img src={userAvatar} alt='' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetailsPage;
