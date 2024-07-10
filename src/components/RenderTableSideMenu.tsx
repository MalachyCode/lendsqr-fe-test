import { sideMenuOptions } from '../pages/Dashboard/filrtBoxAndSideMenuData';

const RenderTableSideMenuBox = (props: {
  showSideMenuBox: boolean;
  onClick: () => void;
}) => (
  <div
    className={'table-side-menu-box ' + (props.showSideMenuBox && 'active')}
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