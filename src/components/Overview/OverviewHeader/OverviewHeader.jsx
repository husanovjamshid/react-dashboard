import NotificationIcon from '../../../assets/images/notification-icon.svg';
import SearchIcon from '../../../assets/images/search-icon.svg';
import UserImg from '../../../assets/images/account__user.png';
import './overview-header.scss';

const OverviewHeader = () => {
  return (
    <div className='overview-header'>
      <div className='overview-header__inner'>
        <h1 className='overview-header__title'>Overview</h1>
        <div className='overview-header__account account'>
          <button className='account__notification-btn'>
            <img
              src={SearchIcon}
              alt='NotificationIcon'
            />
          </button>
          <button className='account__search-btn'>
            <img
              src={NotificationIcon}
              alt='SearchIcon'
            />
          </button>
          <div>
            <p className='account__user-name'>Jones Ferdinand</p>
            <button>
              <img
                src={UserImg}
                alt='User-Account-Img'
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewHeader;
