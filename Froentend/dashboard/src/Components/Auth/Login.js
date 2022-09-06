import React, { useState } from 'react';
import {
  auth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from '../../firebase';

import { useDispatch } from 'react-redux';
import { login } from '../ReduxSlice/interestSlice';
import { Link, useNavigate } from 'react-router-dom';
import styles from "./Auth.module.css";

function Login() {
  
// use state constants for the the form inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [name, setName] = useState('');
  // const [profilePic, setProfilePic] = useState('');
  const dispatch = useDispatch();
  const [errorMsg, setErrorMsg] = useState("");

  const loginToApp = (e) => {
    e.preventDefault();

    // Sign in an existing user with Firebase
    signInWithEmailAndPassword(auth, email, password)
    // returns  an auth object after a successful authentication
    // userAuth.user contains all our user details
      .then((userAuth) => {
      // store the user's information in the redux state
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            photoUrl: userAuth.user.photoURL,
          })
        );
      })
// display the error if any
      .catch((err) => {
        // alert(err);
        setErrorMsg(err.message);
      });
  };



  return (
    <div className={styles.container}>
    <span className={styles.mainHeading}>career map</span>
    <div className={styles.innerBox}>
      {/* <h1 className={styles.heading}>Signup</h1> */}
      
      <form className={styles.FormContainer}>
      <h1 className={styles.heading}>LogIn</h1>
      <div className={styles.inputDiv}>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Email'
          type='email'
          className={styles.inputField}
          />
          </div>
          
          <div className={styles.inputDiv}>
        <input 
          value={password} 
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Password'
          type='password'
          className={styles.inputField}
          />
          </div>
          <div className={styles.inputDiv} >
            
        <button type='submit' onClick={loginToApp}>
          Log In
        </button>
          </div>

          <div className={styles.footer}>
      
      <b className={styles.error}>{errorMsg}</b>
        <p>
          Already have an account?{" "}
          <span>
            <Link to="/Signup">SignUp</Link>
          </span>
          </p>
          </div>
     
      </form>
      
   
      </div>
    </div>
  
    
    
  );
}

export default Login;