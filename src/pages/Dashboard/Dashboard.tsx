import './Dashboard.scss';
import filterResultsButton from '/filter-results-button.svg';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useState } from 'react';
import RenderUsersInfo from '../../components/RenderUserInfo';
import { usersData } from './usersData';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {
  statusColumnClassname,
  tableBodyContents,
  tableHeaders,
} from './tableData';
import { FilterBoxInputsType } from '../../types';
import nextIcon from '/next-btn.svg';
import previousIcon from '/prev-btn.svg';
import RenderFilterResultsBox from '../../components/FilterResultsBox';
import RenderTableSideMenuBox from '../../components/RenderTableSideMenu';
import Topbar from '../Topbar/TopBar';
import Sidebar from '../Sidebar/Sidebar';

const Dashboard = () => {
  const [openSideBar, setOpenSideBar] = useState(false);
  const [showSideMenuBox, setShowSideMenuBox] = useState(false);
  const [showFilterBox, setShowFilterBox] = useState(false);
  const [organization, setOrganization] = useState('');
  const [status, setStatus] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [date, setDate] = useState('');
  const [selectedRowId, setSelectedRowId] = useState<number>();

  const filterInputsBoxData: Array<FilterBoxInputsType> = [
    {
      id: 1,
      title: 'Username',
      name: 'username',
      type: 'text',
      value: username,
      onChange: (e) => setUsername(e.target.value),
    },
    {
      id: 2,
      title: 'Email',
      name: 'email',
      type: 'text',
      value: email,
      onChange: (e) => setEmail(e.target.value),
    },
    {
      id: 3,
      title: 'Date',
      name: 'date',
      type: 'date',
      value: date,
      onChange: (e) => setDate(e.target.value),
    },
    {
      id: 4,
      title: 'Phone Number',
      name: 'phoneNumber',
      type: 'text',
      value: phoneNumber,
      onChange: (e) => setPhoneNumber(e.target.value),
    },
  ];

  const handleFilter = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({
      organization: organization,
      username: username,
      email: email,
      date: date,
      phoneNumber: phoneNumber,
      staus: status,
    });
  };

  const handleReset = () => {
    setOrganization('');
    setUsername('');
    setEmail('');
    setDate('');
    setPhoneNumber('');
    setStatus('');
  };

  return (
    <div className='dashboard'>
      <Topbar openSideBar={openSideBar} setOpenSideBar={setOpenSideBar} />
      <div className='body'>
        <Sidebar openSideBar={openSideBar} />
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
            <div className='table-container'>
              {/* filter box will be here */}
              <RenderFilterResultsBox
                onOrganizationChange={(e) => setOrganization(e.target.value)}
                onStatusChange={(e) => setStatus(e.target.value)}
                organizationValue={organization}
                statusValue={status}
                filterBoxData={filterInputsBoxData}
                showFilterBox={showFilterBox}
                onFormSubmit={handleFilter}
                onResetClick={handleReset}
              />
              <table className='table'>
                <thead>
                  <tr>
                    {tableHeaders.map((header) => (
                      <td>
                        <div className='column-header' key={header.id}>
                          <span>{header.name}</span>
                          <img
                            src={filterResultsButton}
                            alt='filter-results-button'
                            className='filter-results-btn'
                            onClick={() => setShowFilterBox(!showFilterBox)}
                          />
                        </div>
                      </td>
                    ))}
                    <td className='menu-column'></td>
                  </tr>
                </thead>
                <tbody>
                  {tableBodyContents.map((contentBody) => (
                    <tr key={contentBody.id}>
                      {contentBody.contents.map((content) => (
                        <td key={content.id} className='row'>
                          <div className='column-body' key={content.id}>
                            <span className={statusColumnClassname(content)}>
                              {content.name}
                            </span>
                          </div>
                        </td>
                      ))}
                      <td className='menu-column'>
                        <div
                          className='column-body'
                          onClick={() => {
                            setSelectedRowId(contentBody.id);
                            setShowSideMenuBox(!showSideMenuBox);
                          }}
                          key={7}
                        >
                          <MoreVertIcon className='more-icon' />
                        </div>
                        {/* side menu box her */}

                        <RenderTableSideMenuBox
                          showSideMenuBox={showSideMenuBox}
                          onClick={() => {
                            setShowSideMenuBox(false);
                          }}
                          selectedRowId={selectedRowId ? selectedRowId : 0}
                          contentId={contentBody.id}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className='footer-container'>
              <div className='footer-nav'>
                <div className='left'>
                  <span>Showing</span>
                  <div className='page-number'>
                    100
                    <span>
                      <ArrowDropDownIcon className='icons' />
                    </span>
                  </div>
                  <span className='total-data'>out of 100</span>
                </div>
                <div className='right'>
                  <img src={previousIcon} alt='' />
                  <div className='div'>
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                    <span>...</span>
                    <span>14</span>
                    <span>15</span>
                  </div>
                  <img src={nextIcon} alt='' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
