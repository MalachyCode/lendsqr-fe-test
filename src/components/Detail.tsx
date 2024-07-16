const Detail = (props: {
  title: string;
  value: string;
  className?: boolean;
}) => (
  <div className={'detail ' + (props.className && 'personal-info')}>
    <p className='name'>{props.title}</p>
    <p className='value'>{props.value}</p>
  </div>
);

export default Detail;
