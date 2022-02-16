import React, { useState } from 'react';
import { auth, GoogleAuthProvider, provider, signInWithPopup } from '../firebase';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveUser, setUserLogOutState, selectUserEmail, selectUserName } from '../features/userSlice';
import { LoginForm, RegisterForm } from './../components/LoginPageComponents';
import '../css/loginform.css';


const Login = () => {
  const dispatch = useDispatch();

  const userName = useSelector(selectUserName);
  const userEmail = useSelector(selectUserEmail);


  return (
    <div className='login-wrapper'>
      <LoginForm />

    </div>
  )
}

export default Login;





  // const handleSignOut = () => {
  //   auth.signOut().then(() => {
  //     // dispatches action to set user state back to null
  //     dispatch(setUserLogOutState);
  //   }).catch((err) => {
  //     // err message
  //     console.error(err.message)
  //   });
  // }

  // const handleSignIn = () => {
  //   signInWithPopup(auth, provider)
  //     .then((result) => {
  //       // This gives you a Google Access Token. You can use it to access the Google API.
  //       const credential = GoogleAuthProvider.credentialFromResult(result);
  //       const token = credential.accessToken;
  //       // The signed-in user info.
  //       const user = result.user;

  //       console.log(user, token, credential)
  //       // ...
  //     }).catch((error) => {
  //       // Handle Errors here.
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       // The email of the user's account used.
  //       const email = error.email;
  //       // The AuthCredential type that was used.
  //       const credential = GoogleAuthProvider.credentialFromError(error);
  //       // ...
  //     });
  // }