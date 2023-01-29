import "./item.scss";
import { Link, NavLink } from "react-router-dom";

const Navbar = ({
  text,
  icon,
  borderTop,
  to,
}) => {
  return (
    <li
      className="nav__item"
    >
      {text === "Tickets" ? (
        <Link to="/ticket" className="nav__link" >
          <img src={icon} alt="icon" />
          {text}
        </Link>
      ) : (
        <Link to="/" className="nav__link" >
          <img src={icon} alt="icon" />
          {text}
        </Link>
      )}
    </li>
  );
};

export default Navbar;
