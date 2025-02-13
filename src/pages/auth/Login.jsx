import React, { useEffect } from 'react'
import Form from './components/form/form'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { baseUrl } from '../../config'
import { useDispatch, useSelector } from 'react-redux'
import STATUSES from '../../globals/status/statuses'
import { setStatus,login } from '../../../store/authSlice'

const Login = () => {
   
    const navigate= useNavigate()
    const dispatch = useDispatch()



    const {user,status,token} =useSelector((state)=>state.auth)


    const handelLogin=(data)=>{
        dispatch(login(data))
        
    }
   useEffect(()=>{

    if(status === STATUSES.SUCCESS){
      navigate('/')
      dispatch(setStatus(null))
      localStorage.setItem('jwt',token)
    }

   },[status])

  return (

    <Form  type ='login' user={user} onSubmit={handelLogin}/>
    
  )
}

export default Login