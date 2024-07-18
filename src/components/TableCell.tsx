import { statusColumnClassname } from '../pages/Dashboard/tableData';

const TableCell = (props: {
  name: string;
  isStatusCell?: boolean;
  status?: string;
  key: string;
}) => (
  <td key={props.key} className='row'>
    <div className='column-body'>
      <span
        className={
          props.isStatusCell && props.status
            ? statusColumnClassname(props.status)
            : ''
        }
      >
        {props.name}
      </span>
    </div>
  </td>
);
export default TableCell;
