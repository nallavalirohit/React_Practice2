import { useContext, useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setbtnNameReact] = useState("login");

  // console.log("header rendered");

  const {loggedInUser} = useContext(UserContext);

  // console.log(loggedInUser);

  useEffect(()=>{
    console.log("header useEffect fired");
  },[btnNameReact]);

  const onlineStatus = useOnlineStatus();

  //subscribing to the store using a selector
  const cartItems = useSelector((store) => store.cart.items);

  console.log(cartItems);

  return (
    <div className="flex justify-between">
      <div className="logo-container">
        <img className="w-40" src={LOGO_URL} alt="restaurant image" />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status: {onlineStatus? "🟢" : "🔴"}</li>
          <li className="px-4"><Link to='/'>Home</Link></li>
          <li className="px-4"><Link to='/about'>About Us</Link></li>
          <li className="px-4"><Link to='/contact'>Contact Us</Link></li>
          <li className="px-4"><Link to='/grocery'>Grocery</Link></li>
          <li className="px-4"><Link to='/cart'>Cart({cartItems.length})</Link></li>
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
          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
