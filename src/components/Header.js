import { useState } from "react";
import { LOGO_URL } from "../utils/constant";

const Header = () => {
  const [btnNameReact, setbtnNameReact] = useState("login");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="restaurant image" />
      </div>
      <div className="header-right">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Catering Services</li>
          <li>Cart</li>
          <li>
            <button
              className="btnLogin"
              onClick={() => {
                btnNameReact === "login" ? setbtnNameReact("Logout") : setbtnNameReact("login");
              }}
            >
              {btnNameReact}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
