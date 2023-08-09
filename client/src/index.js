import React from 'react';
import ReactDOM from 'react-dom/client';
import './Pages/style.css'
import App from './App';
import Login from './Pages/Login';
import Register from './Pages/Register'
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home from './nDashboard/Home';
import UserSetting from './nDashboard/user-setting';
import BookTicket from './nDashboard/payment';
import History from './nDashboard/purchase-history';
import Dashboard from './nDashboard/dashboard';
import Ticket from './nDashboard/components/ticketType';
import EventOption from './nDashboard/components/eventOption';
import Checkout from './nDashboard/components/checkout';
import Logout from './nDashboard/logout';
import Pay from './nDashboard/components/pay';
import Refund from './nDashboard/refund';
import Success from './nDashboard/success';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<App />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/dashboard' element={<Dashboard/>}>
          <Route path='' element={<Home/>}/>
          <Route path='book-ticket' element={<BookTicket/>}>
              <Route path='' element={<Ticket/>}/>
              <Route path='choose-event' element={<EventOption/>}/>
              <Route path='check-out' element={<Checkout/>}/>
              <Route path='payment' element={<Pay/>}/>
              <Route path='success' element={<Success/>}/>
          </Route>
          <Route path='history' element={<History/>}/>
          <Route path='refund' element={<Refund/>}/>
          <Route path='user-setting' element={<UserSetting/>}/>
        </Route>
        <Route path='/logout' element={<Logout/>}/>
      </Routes>
    </Router>
  </React.StrictMode>
);


