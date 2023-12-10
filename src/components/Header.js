import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [btnname, setbtnname] = useState("Login");
  //console.log("Header Render");
  // useEffect(() => {
  //   console.log("useEffect called");
  // }, [btnname]);
  const { loggedInUser } = useContext(UserContext);

  return (
    <div className="flex justify-between bg-violet-100 shadow-lg">
      <div className="logo-container">
        <img className="w-[7rem] p-5 m-5 " src={LOGO_URL}></img>
      </div>
      <div className="flex items-center">
        <ul className="flex p-5 m-5">
          <li className="p-3">
            <Link to="/">Home</Link>
          </li>
          <li className="p-3">
            <Link to="/about">About us</Link>
          </li>
          <li className="p-3">
            <Link to="/contact">Contact us</Link>
          </li>
          <li className="p-3">Cart</li>
          <button
            className="login p-3"
            onClick={() => {
              btnname === "Login" ? setbtnname("Logout") : setbtnname("Login");
            }}
          >
            {btnname}
          </button>
          <li>{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
