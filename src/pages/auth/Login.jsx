import React, { useEffect } from 'react'
import Form from './components/form/form'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { baseUrl } from '../../config'
import { useSelector } from 'react-redux'
import STATUSES from '../../globals/status/statuses'

const Login = () => {
   
    const navigate= useNavigate()



    const {user,status} =useSelector((state)=>state.auth)


    const handelLogin=(data)=>{
        dispatch(login(data))
        
    }
   useEffect(()=>{

    if(status === STATUSES.SUCCESS){
        return navigate('/')
    }

   },[status])

  return (

    <Form  type ='login' user={user} onSubmit={handelLogin}/>
    
  )
}

export default Login