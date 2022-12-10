import {Link} from 'react-router-dom'
import React from 'react'
import { FaCog, FaLock } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";

const Top = () => {
  const navigate = useNavigate();
  const handleLogout = event => {
    console.log(event.currentTarget.id);
    // the existing token
    console.log("existing token: " + window.localStorage.getItem('token'));
    // setting the token to null
    window.localStorage.setItem("token", "");
    // navigating the user to the login section
    navigate("/Login")
  };
  return (
    <div className='t-container'>
      <div className="t-row">
        <div className="t-link">
          <Link to='/settings' className='t-settings'><FaCog /> Settings</Link>
          <span className='t-logout' id="logoutButton" onClick={handleLogout}><FaLock /> Logout</span>
        </div>
      </div>
    </div>
  )
}

export default Top