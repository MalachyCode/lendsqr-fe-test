import { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Topbar from '../Topbar/TopBar';
import backIcon from '/back-icon.svg';
import userAvatar from '/user-avatar.svg';
import starIconFilled from '/star-icon-filled.svg';
import starIconClear from '/star-icon-clear.svg';
import './UserDetailsPage.scss';
import { formatMoney } from '../../functions/formatMoney';

const UserDetailsPage = () => {
  const [openSideBar, setOpenSideBar] = useState(false);

  const user = {
    username: 'Grace Effiom',
    id: 'LSQFf587g90',
    tier: 1,
    balance: 200000,
    accountNumber: 9912345678,
    bankName: 'Providus Bank',
  };

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
              <div className='top-half'>
                <img src={userAvatar} alt='' className='user-icon' />
                <div className='left'>
                  <div className='name-container'>
                    <p className='name'>{user.username}</p>
                    <p className='id'>{user.id}</p>
                  </div>
                </div>
                <div className='middle'>
                  <div className='tier-container'>
                    <p>User's Tier</p>
                    <div className='stars-container'>
                      <img src={starIconFilled} alt='' />
                      <img src={starIconClear} alt='' />
                      <img src={starIconClear} alt='' />
                    </div>
                  </div>
                </div>
                <div className='right'>
                  <div className='balance-container'>
                    <p>&#8358;{formatMoney(+user.balance, 0)}.00</p>
                  </div>
                  <div className='account-details-container'>
                    <p className='account-num'>{user.accountNumber}/</p>
                    <p className='bank-name'> {user.bankName}</p>
                  </div>
                </div>
              </div>
              <div className='bottom-half'>
                <div className='nav-btns-container'>
                  <div className='nav-btn'>General Details</div>
                  <div className='nav-btn'>Documents</div>
                  <div className='nav-btn'>Bank Details</div>
                  <div className='nav-btn'>Loans</div>
                  <div className='nav-btn'>Savings</div>
                  <div className='nav-btn'>Apps and Systems</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetailsPage;
