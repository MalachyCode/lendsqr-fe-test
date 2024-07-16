import { UserType } from '../types';
import Detail from './Detail';

const Socials = (props: { user: UserType }) => (
  <div className='detail-box'>
    <div className='detail-header-container'>
      <h2>Socials</h2>
    </div>
    <div className='detail-body'>
      <Detail title='TWITTER' value={props.user.twitterHandle} />
      <Detail title='FACEBOOK' value={props.user.facebookHandle} />
      <Detail title='INSTAGRAM' value={props.user.intagramHandle} />
    </div>
  </div>
);

export default Socials;
