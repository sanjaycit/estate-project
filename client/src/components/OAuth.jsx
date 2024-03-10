import React from 'react'
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from '../firebase';
import {useDispatch} from 'react-redux';
import { signInSuccess } from '../app/users/userSlice';
import { useNavigate } from 'react-router-dom';
const OAuth = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate();
    const handleGoogleClick=async ()=>{
        try{
          const provider=new GoogleAuthProvider();
          const auth=getAuth(app);
          const result=await signInWithPopup(auth,provider);
          const res=await fetch('/api/auth/google',{
            method:'POST',
            headers:{
              'Content-type':'application/json',
            },
            body:JSON.stringify({name:result.user.displayName,email:result.user.email,photo:result.user.photoURL}),
          });
          const data=await res.json();
          console.log(data);
          dispatch(signInSuccess(data));
          navigate("/");
        }catch(error){
            console.log(error);
        }
    }
  return (
    <button type='button' onClick={handleGoogleClick}  className='bg-gray-400 p-3 rounded-lg text-slate-100 font-bold hover:opacity-90'>Continue With Google</button>
   
  )
}

export default OAuth;