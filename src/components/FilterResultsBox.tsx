import {
  organizationSelectOptionsData,
  statusSelectOptionsData,
} from '../pages/Dashboard/filterBoxAndSideMenuData';
import { FilterResultsBoxType } from '../types';
import RenderFilterBoxInputs from './RenderFilterBoxInputs';

const RenderFilterResultsBox = (props: FilterResultsBoxType) => (
  <div className={'filter-results-box ' + (props.showFilterBox && 'active')}>
    <form onSubmit={props.onFormSubmit}>
      <div className='form-option'>
        <span>Organization</span>
        <select
          name='organization'
          id='organization'
          onChange={props.onOrganizationChange}
          value={props.organizationValue}
          className='organization select'
        >
          {organizationSelectOptionsData.map((data) => (
            <option value={data.value} key={data.id}>
              {data.title}
            </option>
          ))}
        </select>
      </div>

      {props.filterBoxData.map((data) => (
        <RenderFilterBoxInputs
          title={data.title}
          name={data.name}
          onChange={data.onChange}
          type={data.type}
          value={data.value}
          key={data.id}
        />
      ))}

      <div className='form-option'>
        <span>Status</span>
        <select
          name='status'
          id='status'
          onChange={props.onStatusChange}
          value={props.statusValue}
          className='status select'
        >
          {statusSelectOptionsData.map((data) => (
            <option value={data.value} key={data.id}>
              {data.title}
            </option>
          ))}
        </select>
      </div>

      <div className='btns-container'>
        <button className='reset-btn' onClick={props.onResetClick}>
          Reset
        </button>
        <button type='submit' className='filter-btn'>
          Filter
        </button>
      </div>
    </form>
  </div>
);

export default RenderFilterResultsBox;
