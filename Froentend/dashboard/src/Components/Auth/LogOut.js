import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../../firebase';
import { logout, selectUser } from '../ReduxSlice/interestSlice';
import React from 'react';
import { useNavigate } from 'react-router-dom';
function LogOut() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutOfApp = () => {
    // dispatch to the store with the logout action
    dispatch(logout());
    // sign out function from firebase
    auth.signOut();
    navigate("/Login")
  };

//   const user = useSelector(selectUser);

  return (
    <div className='header' style={{marginBottom:"20px", width:"50%", display:"flex", justifyContent:"center"}}>
         
        <button style={{width:"50%", color:"#0d56a7", borderRadius:"20px"}} onClick={logoutOfApp}>Logout</button>
         
    </div>
  );
}

export default LogOut;