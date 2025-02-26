import React, { useEffect } from 'react'
import Form from './components/form/form'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { baseUrl } from '../../config'
import { register, setStatus } from '../../../store/authSlice'
import { useDispatch,useSelector } from 'react-redux'
import STATUSES from '../../globals/status/statuses'

const Register = () => {
    const dispatch =useDispatch()
    const navigate= useNavigate()
    const {status} = useSelector((state)=>state.auth)
    
    const handelRegister= (data)=>{
        dispatch(register(data))
    }
    useEffect(()=>{
           //check status value from authSlice.js
       
        if(status === STATUSES.SUCCESS){
             setTimeout(()=>navigate('/login'),0)
            // navigate('/login')
             dispatch(setStatus(null))


        }
        else{
            navigate('/register')
        }

    },[status])

  return (
    
   
    <Form type='register' onSubmit ={handelRegister} />
  )
}

export default Register