
'use client';
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {useRouter} from 'next/navigation';
// import Image from 'next/image';

export  default function LoginPage(){
    const[user,setUser]=useState({
        email:"",
        username:"",
        password:""
    })
    const router=useRouter();
    const[buttonDisabled,setbuttonDisabled]=useState(false);
    const [loading,setLoading]=useState(false);

    useEffect(()=>{
    
          if(user.password.length>0 && user.username.length>0){
            setbuttonDisabled(false);
          }
          else{
            setbuttonDisabled(true);
          }
    
        },[user])

        const onLogin = async () => {
          try {
            setLoading(true);
        
            const response = await fetch(`http://localhost:3000/api/login`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(user),
            });
        
            if (!response.ok) {
              const errorData = await response.json();
              console.log('Signup failed:', errorData);
              return("user not exist");
            }
        
            console.log('Login success');
            router.push('/trials');
          } catch (error) {
            if(error  instanceof Error )
              {
                console.error('Login error:', error.message || error);
              }
          } finally {
            setLoading(false);
          }
        };

    return(
        <div className="flex min-h-screen bg-gray-100">
        <div className="w-1/2 flex items-center justify-center p-8">
            <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">{loading? "processing":"Login"}</h1>

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
      <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200" onClick={onLogin}>{buttonDisabled?"No Login":"Login"}</button>
      <p className="text-sm text-center mt-4">
                {"Don't have an account"}?{' '}
            <Link href="/signup" className="text-blue-600 hover:underline font-medium">
                 Sign Up
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