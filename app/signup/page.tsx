'use client';

import Link from "next/link";
import React, { useEffect, useState } from "react";
import {useRouter} from 'next/navigation';

export  default function SignupPage(){
    const[user,setUser]=React.useState({
        email:"",
        username:"",
        password:""
    })
    const router=useRouter();
    const [loading,setLoading]=useState(false)
    const[buttonDisabled,setbuttonDisabled]=useState(false);
    const[message,setmessage]=useState(false);

    const onSignup = async () => {
      try {
        setLoading(true);
    
        const response = await fetch(`http://localhost:3000/api/signup`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(user),
        });
    
        if (!response.ok) {
          const errorData = await response.json();
          console.log('Signup failed:', errorData);
          setmessage(true)
          return("user already exist");
        }
    
        console.log('Signup success');
        router.push('/login');
      } catch (error: any) {
        console.error('Signup error:', error.message || error);
      } finally {
        setLoading(false);
      }
    };
    

    useEffect(()=>{

      if(user.email.length>0 && user.password.length>0 && user.username.length>0){
        setbuttonDisabled(false);
      }
      else{
        setbuttonDisabled(true);
      }

    },[user])


    return(
        <div className="flex min-h-screen bg-gray-100">
        <div className="w-1/2 flex items-center justify-center p-8">
            <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
            <h1 className=" bg-green-500 px-5">{message? "User already exist": null}</h1>
            <h1 className="text-3xl font-bold text-gray-800 mb-6">{loading ? "loading":"Sign Up"}</h1>

            <label htmlFor="username" className="block text-gray-700 font-semibold mb-1">Username</label>
            <input
                type="text"
                id="username"
                value={user.username}
                placeholder="Enter your username"
                onChange={(e) => setUser({ ...user, username: e.target.value })}
                className="w-full px-4 py-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

      <label htmlFor="password" className="block text-gray-700 font-semibold mb-1">Password</label>
      <input
        type="password"
        id="password"
        value={user.password}
        placeholder="Enter your password"
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        className="w-full px-4 py-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <label htmlFor="email" className="block text-gray-700 font-semibold mb-1">Email</label>
      <input
        type="email"
        id="email"
        value={user.email}
        placeholder="Enter your email"
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        className="w-full px-4 py-2 mb-6 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200" onClick={onSignup}>{buttonDisabled? "NO SignUp":"Create Account"}</button>
      <p className="text-sm text-center mt-4">
                Have an account?{' '}
            <Link href="/login" className="text-blue-600 hover:underline font-medium">
                 Login
            </Link>
      </p>
    </div>
  </div>

  <div className="w-1/2 hidden md:block">
    <img
      src="../../main_log.png"
      alt="Sign Up Illustration"
      className="w-full h-full object-cover"
    />
  </div>
</div>)}