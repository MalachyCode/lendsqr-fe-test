import { sideMenuOptions } from '../pages/Dashboard/filterBoxAndSideMenuData';

const RenderTableSideMenuBox = (props: {
  showSideMenuBox: boolean;
  onClick: () => void;
  selectedRowId: string;
  contentId: string;
}) => (
  <div
    className={
      'table-side-menu-box ' +
      (props.showSideMenuBox && props.selectedRowId === props.contentId
        ? 'active'
        : '')
    }
    onClick={props.onClick}
  >
    {sideMenuOptions.map((option) => (
      <div className='option' key={option.id}>
        <div className='option-icon'>
          <img src={option.icon} alt='' />
        </div>
        <div className='option-name'>{option.name}</div>
      </div>
    ))}
  </div>
);

export default RenderTableSideMenuBox;
