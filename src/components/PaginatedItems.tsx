import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import TableCell from './TableCell';
import { tableBodyContents } from '../pages/Dashboard/tableData';
import { useNavigate } from 'react-router-dom';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import RenderTableSideMenuBox from './RenderTableSideMenu';
import { UserType } from '../types';
import nextIcon from '/next-btn.svg';
import previousIcon from '/prev-btn.svg';

// Example items, to simulate fetching from another resources.

const Items = (props: { tableBodyContents: Array<UserType> }) => {
  const navigate = useNavigate();
  const [showSideMenuBox, setShowSideMenuBox] = useState(false);
  const [selectedRowId, setSelectedRowId] = useState<string>();
  const [user, setUser] = useState<UserType>();

  useEffect(() => {
    const retrievedUserFromData = tableBodyContents.find(
      (user) => user.id === selectedRowId
    );
    setUser(retrievedUserFromData);
  }, [selectedRowId]);

  return (
    <>
      {props.tableBodyContents.map((contentBody) => (
        <tr key={contentBody.id}>
          <TableCell name={contentBody.organization} key={contentBody.id} />
          <TableCell name={contentBody.username} key={contentBody.id} />
          <TableCell name={contentBody.email} key={contentBody.id} />
          <TableCell name={contentBody.phoneNumber} key={contentBody.id} />
          <TableCell name={contentBody.dateJoined} key={contentBody.id} />
          <TableCell
            name={contentBody.status}
            status={contentBody.status}
            isStatusCell={true}
            key={contentBody.id}
          />
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
                navigate('/user-info');
                window.localStorage.setItem(
                  'selectedUser',
                  JSON.stringify(user)
                );
                setShowSideMenuBox(false);
              }}
              selectedRowId={selectedRowId ? selectedRowId : ''}
              contentId={contentBody.id}
            />
          </td>
        </tr>
      ))}
    </>
  );
};

const PaginatedItems = (props: { itemsPerPage: number }) => {
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + props.itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);

  const tableContents = tableBodyContents.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(tableBodyContents.length / props.itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event: { selected: number }) => {
    const newOffset =
      (event.selected * props.itemsPerPage) % tableBodyContents.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items tableBodyContents={tableContents} />
      <div className='footer-container'>
        <div className='footer-nav'>
          <div className='left'>
            <span>Showing</span>
            <div className='page-number'>{itemOffset}</div>
            <span className='total-data'>out of {pageCount}</span>
          </div>
          <div className='right'>
            <ReactPaginate
              breakLabel='...'
              nextLabel={<img className='next' src={nextIcon} alt='' />}
              onPageChange={handlePageClick}
              pageRangeDisplayed={5}
              pageCount={pageCount}
              previousLabel={<img className='prev' src={previousIcon} alt='' />}
              renderOnZeroPageCount={null}
              containerClassName='pagination'
              pageLinkClassName='page-link-class'
              activeLinkClassName='active'
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PaginatedItems;
