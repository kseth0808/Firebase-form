import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../firebase';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  const [isAuth, setIsAuth] = useState(false);

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        localStorage.setItem('isAuth', true);
        setIsAuth(true);
        navigate('/LogedIn');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
    <nav className='navbar'>
      <ul>
        <Link to={"/"}>Home</Link>
        <Link to={"/LoginForm"}>LoginForm</Link>
        <Link to={"/SignUp"}>SignUp</Link>
      </ul>
    </nav>
    <div className="home">
    <button onClick={signInWithGoogle} className="login-with-google-btn">Sign with Google</button>
    </div>
    </div>
  );
}

export default Home;

