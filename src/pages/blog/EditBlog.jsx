import React, { useEffect,useState } from 'react'
import Layout from '../../components/layout/Layout'
import Form from './components/form/form'
import { use, } from 'react'
import {useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { baseUrl } from '../../config'
import { useDispatch, useSelector } from 'react-redux'
import { editBlog,setStatus } from '../../../store/blogSlice'
import STATUSES from '../../globals/status/statuses'


const EditBlog = () => {
  const navigate = useNavigate()
  const {id}=useParams()
  const dispatch = useDispatch()
  const {status,blog} = useSelector((state)=>state.blog)
  
  
  const handelEditBlog = (data)=>{

     dispatch(editBlog(data,id))

     if (status === STATUSES.SUCCESS){
      // navigate('/blog/'+id)
    
      navigate('/')

      dispatch(setStatus(null))
     }
      
     
      
      
    
  
    }
    

  
 
  // const fetchBlog= async()=>{
  //   const response = await axios.get(`${baseUrl}/blog/${id}`)
    
  
  //   if (response.status ===200){
  //     setBlog(response.data.data)
      

  //   }

  // }
  // useEffect(()=>{
  //   fetchBlog()
  // },[id])
 
  return (
    <Layout>
      <Form type='Edit' blog={blog} onSubmit={handelEditBlog}/>
    </Layout>
  )
}

export default EditBlog