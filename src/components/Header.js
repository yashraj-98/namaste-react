import { useState, useEffect } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnname, setbtnname] = useState("Login");
  //console.log("Header Render");
  // useEffect(() => {
  //   console.log("useEffect called");
  // }, [btnname]);

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/contact">Contact us</Link>
          </li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              btnname === "Login" ? setbtnname("Logout") : setbtnname("Login");
            }}
          >
            {btnname}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
