import { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Topbar from '../Topbar/TopBar';
import backIcon from '/back-icon.svg';
import userAvatar from '/user-avatar.svg';
import starIconFilled from '/star-icon-filled.svg';
import starIconClear from '/star-icon-clear.svg';
import './UserDetailsPage.scss';
import { formatMoney } from '../../functions/formatMoney';
import savingsIcon from '/savings-svgrepo-com.svg';
import appsIcon4 from '/apps-svgrepo-com(3).svg';
import loanIcon from '/bank-banking-business-4-svgrepo-com.svg';
import bankDetailsIcon from '/cheque-svgrepo-com.svg';
import generalDetailsIcon from '/contact-details-svgrepo-com.svg';
import documentsIcon from '/documents-record-document-report-svgrepo-com.svg';

const UserDetailsPage = () => {
  const [openSideBar, setOpenSideBar] = useState(false);
  const [generalDetails, setGeneralDetails] = useState(false);
  const [documents, setDocuments] = useState(false);
  const [bankDetails, setBankDetails] = useState(false);
  const [loans, setLoans] = useState(false);
  const [savings, setSavings] = useState(false);
  const [appsAndSystems, setAppsAndSystems] = useState(false);

  const user = {
    username: 'Grace Effiom',
    id: 'LSQFf587g90',
    tier: 1,
    balance: 200000,
    accountNumber: 9912345678,
    bankName: 'Providus Bank',
  };

  const controlPageToDisplay = (pageName: string) => {
    if (pageName === 'General Details') {
      setGeneralDetails(true);
      setDocuments(false);
      setBankDetails(false);
      setLoans(false);
      setSavings(false);
      setAppsAndSystems(false);
    } else if (pageName === 'Documents') {
      setGeneralDetails(false);
      setDocuments(true);
      setBankDetails(false);
      setLoans(false);
      setSavings(false);
      setAppsAndSystems(false);
    } else if (pageName === 'Bank Details') {
      setGeneralDetails(false);
      setDocuments(false);
      setBankDetails(true);
      setLoans(false);
      setSavings(false);
      setAppsAndSystems(false);
    } else if (pageName === 'Loans') {
      setGeneralDetails(false);
      setDocuments(false);
      setBankDetails(false);
      setLoans(true);
      setSavings(false);
      setAppsAndSystems(false);
    } else if (pageName === 'Savings') {
      setGeneralDetails(false);
      setDocuments(false);
      setBankDetails(false);
      setLoans(false);
      setSavings(true);
      setAppsAndSystems(false);
    } else {
      setGeneralDetails(false);
      setDocuments(false);
      setBankDetails(false);
      setLoans(false);
      setSavings(false);
      setAppsAndSystems(true);
    }
  };

  const handleTier = (tier: number) => {
    if (tier === 1) {
      return (
        <div className='stars-container'>
          <img src={starIconFilled} alt='' />
          <img src={starIconClear} alt='' />
          <img src={starIconClear} alt='' />
        </div>
      );
    } else if (tier === 2) {
      return (
        <div className='stars-container'>
          <img src={starIconFilled} alt='' />
          <img src={starIconFilled} alt='' />
          <img src={starIconClear} alt='' />
        </div>
      );
    } else if (tier === 3) {
      return (
        <div className='stars-container'>
          <img src={starIconFilled} alt='' />
          <img src={starIconFilled} alt='' />
          <img src={starIconFilled} alt='' />
        </div>
      );
    } else {
      return (
        <div className='stars-container'>
          <img src={starIconClear} alt='' />
          <img src={starIconClear} alt='' />
          <img src={starIconClear} alt='' />
        </div>
      );
    }
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
                      {handleTier(user.tier)}
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
                  <div
                    onClick={() => controlPageToDisplay('General Details')}
                    className={'nav-btn ' + (generalDetails && 'active')}
                  >
                    General Details
                  </div>
                  <div
                    onClick={() => controlPageToDisplay('Documents')}
                    className={'nav-btn ' + (documents && 'active')}
                  >
                    Documents
                  </div>
                  <div
                    onClick={() => controlPageToDisplay('Bank Details')}
                    className={'nav-btn ' + (bankDetails && 'active')}
                  >
                    Bank Details
                  </div>
                  <div
                    onClick={() => controlPageToDisplay('Loans')}
                    className={'nav-btn ' + (loans && 'active')}
                  >
                    Loans
                  </div>
                  <div
                    onClick={() => controlPageToDisplay('Savings')}
                    className={'nav-btn ' + (savings && 'active')}
                  >
                    Savings
                  </div>
                  <div
                    onClick={() => controlPageToDisplay('Apps and Systems')}
                    className={'nav-btn ' + (appsAndSystems && 'active')}
                  >
                    Apps and Systems
                  </div>
                  <div className='nav-icons-container'>
                    <img
                      src={generalDetailsIcon}
                      alt=''
                      className={'nav-btn ' + (generalDetails && 'active')}
                      onClick={() => controlPageToDisplay('General Details')}
                    />
                    <img
                      src={documentsIcon}
                      alt=''
                      className={'' + (documents && 'active')}
                      onClick={() => controlPageToDisplay('Documents')}
                    />
                    <img
                      src={bankDetailsIcon}
                      alt=''
                      className={'' + (bankDetails && 'active')}
                      onClick={() => controlPageToDisplay('Bank Details')}
                    />
                    <img
                      src={loanIcon}
                      alt=''
                      className={'' + (loans && 'active')}
                      onClick={() => controlPageToDisplay('Loans')}
                    />
                    <img
                      src={savingsIcon}
                      alt=''
                      className={'' + (savings && 'active')}
                      onClick={() => controlPageToDisplay('Savings')}
                    />
                    <img
                      src={appsIcon4}
                      alt=''
                      className={'' + (appsAndSystems && 'active')}
                      onClick={() => controlPageToDisplay('Apps and Systems')}
                    />
                  </div>
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
