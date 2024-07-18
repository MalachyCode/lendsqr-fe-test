import { useEffect, useState } from 'react';
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
import {
  RenderNavBtns,
  RenderNavIcons,
} from '../../components/RenderNavBtnsAndIcons';
import PersonalInformation from '../../components/PersonalInformation';
import EducationAndEmployment from '../../components/EducationAndEmployment';
import Socials from '../../components/Socials';
import Guarantor from '../../components/Guarantor';
import { useNavigate } from 'react-router-dom';
import { UserType } from '../../types';
// import { user } from './user';

const UserDetailsPage = () => {
  const navigate = useNavigate();
  const [openSideBar, setOpenSideBar] = useState(false);
  const [generalDetails, setGeneralDetails] = useState(false);
  const [documents, setDocuments] = useState(false);
  const [bankDetails, setBankDetails] = useState(false);
  const [loans, setLoans] = useState(false);
  const [savings, setSavings] = useState(false);
  const [appsAndSystems, setAppsAndSystems] = useState(false);
  const [user, setUser] = useState<UserType>();

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('selectedUser');
    if (loggedUserJSON) {
      const retrievedUser = JSON.parse(loggedUserJSON);

      setUser(retrievedUser);
    }
  }, []);

  const navIconsData = [
    {
      iconSrc: generalDetailsIcon,
      iconName: generalDetails,
      functionArg: 'General Details',
    },
    {
      iconSrc: documentsIcon,
      iconName: documents,
      functionArg: 'Documents',
    },
    {
      iconSrc: bankDetailsIcon,
      iconName: bankDetails,
      functionArg: 'Bank Details',
    },
    {
      iconSrc: loanIcon,
      iconName: loans,
      functionArg: 'Loans',
    },
    {
      iconSrc: savingsIcon,
      iconName: savings,
      functionArg: 'Savings',
    },
    {
      iconSrc: appsIcon4,
      iconName: appsAndSystems,
      functionArg: 'Apps and Systems',
    },
  ];

  const navBtnsData = [
    {
      btnName: generalDetails,
      btnTitle: 'General Details',
    },
    {
      btnName: documents,
      btnTitle: 'Documents',
    },
    {
      btnName: bankDetails,
      btnTitle: 'Bank Details',
    },
    {
      btnName: loans,
      btnTitle: 'Loans',
    },
    {
      btnName: savings,
      btnTitle: 'Savings',
    },
    {
      btnName: appsAndSystems,
      btnTitle: 'Apps and Systems',
    },
  ];

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
                <div
                  className='back-button'
                  onClick={() => navigate('/dashboard')}
                >
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
                    <p className='name'>{user?.fullName}</p>
                    <p className='id'>{user?.id}</p>
                  </div>
                </div>
                <div className='middle'>
                  <div className='tier-container'>
                    <p>User's Tier</p>
                    <div className='stars-container'>
                      {user && handleTier(user.tier)}
                    </div>
                  </div>
                </div>
                <div className='right'>
                  <div className='balance-container'>
                    <p>&#8358;{user && formatMoney(+user.balance, 0)}.00</p>
                  </div>
                  <div className='account-details-container'>
                    <p className='account-num'>{user?.accountNumber}/</p>
                    <p className='bank-name'> {user?.bankName}</p>
                  </div>
                </div>
              </div>
              <div className='bottom-half'>
                <div className='nav-btns-container'>
                  {navBtnsData.map((data) => (
                    <RenderNavBtns
                      btnName={data.btnName}
                      btnTitle={data.btnTitle}
                      setGeneralDetails={setGeneralDetails}
                      setAppsAndSystems={setAppsAndSystems}
                      setBankDetails={setBankDetails}
                      setDocuments={setDocuments}
                      setLoans={setLoans}
                      setSavings={setSavings}
                    />
                  ))}
                  <div className='nav-icons-container'>
                    {navIconsData.map((data) => (
                      <RenderNavIcons
                        functionArg={data.functionArg}
                        iconName={data.iconName}
                        iconSrc={data.iconSrc}
                        setGeneralDetails={setGeneralDetails}
                        setAppsAndSystems={setAppsAndSystems}
                        setBankDetails={setBankDetails}
                        setDocuments={setDocuments}
                        setLoans={setLoans}
                        setSavings={setSavings}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className='detailed-details-box'>
              {user && <PersonalInformation user={user} />}
              <span className='seperator'></span>
              {user && <EducationAndEmployment user={user} />}
              <span className='seperator'></span>
              {user && <Socials user={user} />}
              <span className='seperator'></span>
              {user && <Guarantor user={user} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetailsPage;
