import React, { useState } from 'react'
import { Link ,useNavigate} from 'react-router-dom'
export const SignUp = () => {
  const [formData,setFormData]=useState({});
  const [error,setError]=useState(null);
  const [loading,setLoading]=useState(false);
  const navigate=useNavigate();
  const handleChange=(e)=>{
    setFormData(
      {
        ...formData,
        [e.target.id]:e.target.value,
      }
    )
  
  }
  console.log(formData);
  const handleSubmit=async (e)=>{
    try{
      setLoading(true);
      e.preventDefault();
      const res=await fetch(' /api/auth/signup',{
        method:'POST',
        headers:{
          'Content-Type':'application/json',
        },
        body:JSON.stringify(formData),
      });
      console.log(res);
      const data=await res.json();
     console.log("data",data);
     if(data.success===false){
      setError(data.message);
      setLoading(false);
      return;
     }
     setError(null);
     setLoading(false);
     navigate("/sign-in");
    }catch(error){
      setError(error.message);
      setLoading(false);
    } 
  }
  // console.log(data);

  return (

    <div className='max-w-lg mx-auto  p-3'>
      <h1 className='text-xl font-semibold text-center text-slate-900 my-7'>Sign Up</h1>
      <form action="" className='flex flex-col gap-4' onSubmit={handleSubmit}>
        <input type="text" placeholder='username' className='border rounded-lg p-3' id='username' onChange={handleChange}/>
        <input type="email" placeholder='email' className='border rounded-lg p-3' id='email'onChange={handleChange}/>
        <input type="password" placeholder='password' className='border rounded-lg p-3' id='password' onChange={handleChange} />
        <button disabled={loading} className='bg-green-400 p-3 rounded-lg text-slate-100 font-bold hover:opacity-90' type='submit'>{loading ?"Loading..." :"Sign up"}</button>
      </form>
      <div className='flex gap-2 mt-4'>
        <p>Have an account already?</p>
        <Link to={"/sign-in"}>
          <span className='text-blue-700'>click here</span>
        </Link>
      </div>
     {error && <p className='text-red-500 text-sm'>{error}</p>}
    </div>
  )
}
