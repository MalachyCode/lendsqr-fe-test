import './Dashboard.scss';
import Logo from '/lendsqr-logo.png';
import LogoImg from '/lendsr-Union.png';
import arrowHeadDownIcon from '/arrow-head-down.png';
import briefcaseIcon from '/briefcase-1.png';
import homeIcon from '/home-1.png';
import businessAvatar from '/businessAvatar.png';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import RenderSidebarContentsAndHeader, {
  RenderSidebarContents,
} from '../../components/RenderSidebarContentsAndHeader';
import RenderUsersInfo from '../../components/RenderUserInfo';
import { usersData } from './usersData';
import { sidebarContentsData } from './sidebarContentsData';

const Dashboard = () => {
  const [openSideBar, setOpenSideBar] = useState(false);

  return (
    <div className='dashboard'>
      <div className='top'>
        <div className='hamburger-container'>
          <MenuIcon
            className='hamburger'
            onClick={() => setOpenSideBar(true)}
          />
        </div>
        <div className='top-left'>
          <div className='logo'>
            <img src={LogoImg} alt='LogoImg' className='logo-img' />
            <img src={Logo} alt='Logo' className='logo-name' />
          </div>
        </div>
        <div className='top-center'>
          <div className='search-box-container'>
            <input type='text' placeholder='Search for anything' />
            <div className='search-icon-container'>
              <SearchIcon />
            </div>
          </div>
        </div>
        <div className='top-right'>
          <div className='container'>
            <p className='docs'>Docs</p>
            <NotificationsNoneIcon className='icons' />
            <div className='business-container'>
              <div className='business-image-container'>
                <img src={businessAvatar} alt='' />
              </div>
              <p>Adedeji</p>
              <ArrowDropDownIcon className='icons' />
            </div>
          </div>
        </div>
      </div>
      <div className='body'>
        <div className={'side-bar ' + (openSideBar && 'active')}>
          <CloseIcon
            className='close-icon'
            onClick={() => setOpenSideBar(false)}
          />
          <div className='side-bar-top'>
            <div className='switch-organisation-option'>
              <div className='left'>
                <img
                  src={briefcaseIcon}
                  alt='briefcaseIcon'
                  className='briefcase-icon'
                />
              </div>
              <div className='center'>
                <p>Switch Organization</p>
              </div>
              <div className='right'>
                <img
                  src={arrowHeadDownIcon}
                  alt='arrow head down icon'
                  className='arrow-head-down-icon'
                />
              </div>
            </div>
            <RenderSidebarContents
              name='Dashboard'
              imgSrc={homeIcon}
              imgAlt='home icon'
              imgClassName='home-icon'
            />
          </div>
          {sidebarContentsData.map((content) => (
            <RenderSidebarContentsAndHeader
              headerName={content.headerName}
              contentsData={content.contentsData}
            />
          ))}
        </div>
        <div className='main-body'>
          <div className='container'>
            <h3>Users</h3>
            <div className='users-info-box-container'>
              {usersData.map((userData) => (
                <RenderUsersInfo
                  icon={userData.icon}
                  name={userData.name}
                  total={userData.total}
                />
              ))}
            </div>
            <div className='table-container'></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
