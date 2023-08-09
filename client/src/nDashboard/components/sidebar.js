import React from "react";
import { Link } from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHouse,faShoppingCart,faGear,faArrowRightFromBracket as logIcon,faUndo,faHistory} from '@fortawesome/free-solid-svg-icons';

function Sidebar({menu,username,Logout}) {
  return (!menu &&
    <div className="dash-sidebar">
      <div className="logo-container">
        <i>LOGO</i>
        <br />
        <span>{username}</span>
      </div>
      <div className="dash-navbar">
        <ul className="nav-menu">
          <div className="nav-item">
          <FontAwesomeIcon icon={faHouse}/>
            
          <Link to=''className="li" ><span>Home</span></Link>

          </div>
          <div className="nav-item">
          <FontAwesomeIcon icon={faShoppingCart}/>
          <Link to='book-ticket' className="li"> <span>Book Ticket</span></Link>
           
          </div>
          <div className="nav-item">
          <FontAwesomeIcon icon={faHistory}/>
          <Link to='history' className="li"><span>Payment History</span></Link>
            
          </div>

          <div className="nav-item">
          <FontAwesomeIcon icon={faUndo}/>
          <Link to='refund' className="li"><span>Refund</span></Link>
          </div>
          <div className="nav-item">
          <FontAwesomeIcon icon={faGear}/>
          <Link to='user-setting' className="li"><span>User Settings</span></Link>
          
          </div>
          <div className="nav-item">
          <FontAwesomeIcon icon={logIcon}/>
          <Link  className="li" onClick={Logout}><span>Logout</span></Link>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
