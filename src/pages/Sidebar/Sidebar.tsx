import arrowHeadDownIcon from '/arrow-head-down.png';
import briefcaseIcon from '/briefcase-1.png';
import homeIcon from '/home-1.png';
import logoutIcon from '/logout-icon.svg';
import RenderSidebarContentsAndHeader, {
  RenderSidebarContents,
} from '../../components/RenderSidebarContentsAndHeader';
import { sidebarContentsData } from './sidebarContentsData';
import SearchIcon from '@mui/icons-material/Search';
import '../Dashboard/Dashboard.scss';

const Sidebar = (props: { openSideBar: boolean }) => (
  <div className={'side-bar ' + (props.openSideBar && 'active')}>
    <div className='side-bar-top'>
      <div className='search-box-container'>
        <input type='text' placeholder='Search for anything' />
        <div className='search-icon-container'>
          <SearchIcon />
        </div>
      </div>
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
    <div className='sidebar-bottom'>
      <RenderSidebarContents
        name='Logout'
        imgSrc={logoutIcon}
        imgAlt='logout icon'
        imgClassName='logout-icon'
      />
      <div className='version'>v1.2.0</div>
    </div>
    <div className='empty-div'></div>
  </div>
);

export default Sidebar;
