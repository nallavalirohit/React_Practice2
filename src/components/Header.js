import { LOGO_URL } from "../utils/constant";

const Header = () => {
    return (
      <div className="header">
          <div className="logo-container">
        <img
          className="logo"
          src= {LOGO_URL}
          alt="restaurant image"
        /></div>
        <div className="header-right">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Catering Services</li>
        </ul>
        </div>
      </div>
    );
  };

  export default Header;