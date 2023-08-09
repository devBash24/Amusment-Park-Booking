import React from 'react'
import {useNavigate} from 'react-router-dom';

function Logout() {
    const navigate = useNavigate();
    window.onload = () => {
        navigate('/');

    }

  return (
    <div></div>
  )
}

export default Logout