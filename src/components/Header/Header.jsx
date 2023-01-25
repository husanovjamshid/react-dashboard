import Logo from '../../assets/images/logo.svg';
import './header.scss';

const Header = ({ children }) => {
  return (
    <header className='site-header'>
      <div className='site-header__inner'>
        <a href='./index.html'>
          <img
            src={Logo}
            alt='Logo'
          />
        </a>
        <nav className='nav'>
          <ul className='nav__list'>{children}</ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
