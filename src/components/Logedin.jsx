import React, { useState } from 'react';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';

function Logedin() {
  const navigate = useNavigate();
  const [isAuth, setisAuth] = useState(false);
  
  const signout = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setisAuth(false);
      navigate('/');
    });
  };

  return (
    <div className='LogedIn'>
      <h1>Welcome</h1>
      <button onClick={signout}>Sign Out</button>
    </div>
  );
}

export default Logedin;
