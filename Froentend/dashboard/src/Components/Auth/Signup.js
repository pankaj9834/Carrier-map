import React, { useState } from 'react';
import {
  auth,
  createUserWithEmailAndPassword,
  updateProfile,
  
} from '../../firebase';

import { useDispatch } from 'react-redux';
import { login } from '../ReduxSlice/interestSlice';
import { Link } from 'react-router-dom';
import styles from "./Auth.module.css";

function Signup() {

// use state constants for the the form inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  // const [profilePic, setProfilePic] = useState('');
  const dispatch = useDispatch();
  const [errorMsg, setErrorMsg] = useState("");
  


  
// A quick check on the name field to make it mandatory
  const register = (e) => {
    e.preventDefault();
    if (!name) {
      return alert('Please enter a full name');
    }

    // Create a new user with Firebase
    createUserWithEmailAndPassword(auth, email, password)
      .then((userAuth) => {
      // Update the newly created user with a display name and a picture
        updateProfile(userAuth.user, {
          displayName: name,
          // photoURL: profilePic,
        })
          .then(
            // Dispatch the user information for persistence in the redux state
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                // photoUrl: profilePic,
              })
            )
          )
          .catch((err) => {
            console.log('user not updated');
            setErrorMsg(err.message);
          });
      })
      .catch((err) => {
        alert(err);
        setErrorMsg(err.message);
      });
  };

  return (
    <div className={styles.container}>
      <span className={styles.mainHeading}>career map</span>
      <div className={styles.innerBox}>
        {/* <h1 className={styles.heading}>Signup</h1> */}
        
        <form className={styles.FormContainer}>
        <h1 className={styles.heading}>Signup</h1>
          <div className={styles.inputDiv} >
          
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder='User name'
            type='text'
            className={styles.inputField}
            />
            </div>

            {/* <div className={styles.inputDiv} >
          <input
            value={profilePic}
            onChange={(e) => setProfilePic(e.target.value)}
            placeholder='Profile picture URL (optional)'
            type='text'
            className={styles.inputField}
            />
            </div> */}

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
              
          <button type='submit' onClick={register}>
            Sign Up
          </button>
            </div>

            <div className={styles.footer}>
        
        <b className={styles.error}>{errorMsg}</b>
          <p>
            Already have an account?{" "}
            <span>
              <Link to="/Login">Login</Link>
            </span>
            </p>
            </div>
       
        </form>
        
     
        </div>
      </div>
    
    
  );
}

export default Signup;