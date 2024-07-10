import { FilterBoxInputsType } from '../types';

const RenderFilterBoxInputs = (props: FilterBoxInputsType) => (
  <div className='form-option'>
    <span>{props.title}</span>
    <input
      name={props.name}
      id={props.name}
      type={props.type}
      onChange={props.onChange}
      value={props.value}
      className={`${props.name} input`}
    />
  </div>
);

export default RenderFilterBoxInputs;
