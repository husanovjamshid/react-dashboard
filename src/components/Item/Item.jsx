import './item.scss';

const Navbar = ({ text, icon, color, backgroundColor, borderLeft, borderTop }) => {
  return (
    <li
      className='nav__item'
      style={{ backgroundColor, borderLeft, borderTop }}
    >
      <a
        href='./index.html'
        className='nav__link'
        style={{ color }} 
      >
        <img
          src={icon}
          alt='icon'
        />
        {text}
      </a>
    </li>
  );
};

export default Navbar;
