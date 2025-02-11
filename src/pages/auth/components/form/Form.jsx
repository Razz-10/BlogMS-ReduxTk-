import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const Form = ({type,user,onSubmit}) => {

    const [data,setData]=useState({
        email :'',
        username :'',
        password:''
    })

    const handelChange =(e)=>{
        const{name,value} =e.target
        setData({
            ...data,
            [name]:value
        })
    }
    const handelSubmit=(e)=>{
        e.preventDefault();
        onSubmit(data)

    }
//    console.log(data)

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
    <div className="relative py-3 sm:max-w-xl sm:mx-auto">
      <div
        className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
      </div>
      <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
  
        <div className="max-w-md mx-auto">
          <div>
            <h1 className="text-2xl font-semibold">{type =='login'? 'Login Here to continue ...' : 'Register Here to continue ...'}</h1>
          </div>
          {type ==='login' && `Hello,${user?.username}` }
         
          <form onSubmit={handelSubmit}>
          <div className="divide-y divide-gray-200">
            <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
              <div className="relative">
                <input autoComplete="off" id="email" name="email" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email address" onChange={handelChange} required />
                <label htmlFor="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email Address</label>
              </div>
              { 
                type ==='register' && (
                
                <div className="relative">
                <input autoComplete="off" id="username" name="username" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="UserName" onChange={handelChange}  required />
                <label htmlFor="username" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">User Name</label>
              </div>
              )
              }
              
              <div className="relative">
                <input autoComplete="off" id="password" name="password" type="password" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" onChange={handelChange} required />
                <label htmlFor="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
              </div>
              <div className="relative">
                <button className="bg-cyan-500 text-white rounded-md px-2 py-1">Submit</button>
              </div>
            </div>
          </div>
          </form>
        </div>
  
        <div className="w-full flex justify-center text-sky-600 font-bold">
            { type ==='register'?
            <Link to='/login'>Go to Login</Link>:
            <Link to='/register'>Go to register</Link>
            }
          
        </div>
  
      </div>
    </div>
  </div>
       
  )
}

export default Form