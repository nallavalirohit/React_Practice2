import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnNameReact, setbtnNameReact] = useState("login");

  console.log("header rendered");

  useEffect(()=>{
    console.log("header useEffect fired");
  },[btnNameReact]);

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="restaurant image" />
      </div>
      <div className="header-right">
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About Us</Link></li>
          <li><Link to='/contact'>Contact Us</Link></li>
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
