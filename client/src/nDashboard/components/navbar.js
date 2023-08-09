import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCaretDown,
  faTimes,

} from "@fortawesome/free-solid-svg-icons";

function Navbar({ Toggle , menu,username,Logout}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };


  return (
    <div className="top-navbar">
      <div className="menu-icon" onClick={Toggle}>
        {!menu ? (
          <FontAwesomeIcon icon={faBars} />
        ) : (
          <FontAwesomeIcon icon={faTimes} />
        )}
      </div>
      <div className="dropdown-menu" onClick={toggleDropdown}>
        <div className="menu-label">
          <span>{username}</span>
          <FontAwesomeIcon icon={faCaretDown} />
        </div>
        <ul
          className={
            isOpen ? "dropdown-menu-items active" : "dropdown-menu-items"
          }
        >
          <Link to="" className="item">
            Home
          </Link>
          <Link to="book-ticket" className="item">
            Book Ticket
          </Link>
          <Link to="history" className="item">
            Payment History
          </Link>
          <Link to="refund" className="item">
            Refund
          </Link>
          <Link to="user-setting" className="item">
            User Setting
          </Link>
          <Link  className="item" onClick={Logout}>
            Logout
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
