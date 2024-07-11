import Logo from '/lendsqr-logo.png';
import LogoImg from '/lendsr-Union.png';
import businessAvatar from '/businessAvatar.png';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import React from 'react';

const Topbar = (props: {
  setOpenSideBar: React.Dispatch<React.SetStateAction<boolean>>;
  openSideBar: boolean;
}) => (
  <div className='top'>
    <div className='hamburger-container'>
      <MenuIcon
        className='hamburger'
        onClick={() => props.setOpenSideBar(!props.openSideBar)}
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
);

export default Topbar;
