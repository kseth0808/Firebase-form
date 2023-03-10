import React, { useState } from 'react';
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Navigate, useNavigate } from 'react-router-dom';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  let navigate = useNavigate();
  const SignIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential)=>{
      console.log(userCredential);
      navigate("/LogedIn");
    })
    .catch((error)=>{
      console.log(error);
    });
  }

  return (
    <div className="sign-form-container">
      <form onSubmit={SignIn}>
        <h1>Log In</h1>
        <input type="email" placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default LoginForm;
