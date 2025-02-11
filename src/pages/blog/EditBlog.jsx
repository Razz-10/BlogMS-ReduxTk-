import React, { useEffect,useState } from 'react'
import Layout from '../../components/layout/Layout'
import Form from './components/form/form'
import { use, } from 'react'
import {useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { baseUrl } from '../../config'

const EditBlog = () => {
  const navigate = useNavigate()
  const {id}=useParams()
  const[blog,setBlog]=useState({})
  
  const handelEditBlog = async(data)=>{

      try {
      const response =  await axios.patch(`${baseUrl}/blog/${id}`,data,{
        headers:{
          "Content-Type" :'multipart/form-data',
          "Authorization" :localStorage.getItem('token')
        }
      })
      
      if (response.status ===200){
        console.log(response.data)
        navigate('/')
        // navigate('/blog/'+id)
      }
      else{
        alert("something went wrong")
      }
  
    }
    
   catch (error) {
    alert(error?.response?.data?.message)
    
   }
  }
 
  const fetchBlog= async()=>{
    const response = await axios.get(`${baseUrl}/blog/${id}`)
    
  
    if (response.status ===200){
      setBlog(response.data.data)
      

    }

  }
  useEffect(()=>{
    fetchBlog()
  },[id])
 
  return (
    <Layout>
      <Form type='Edit' blog={blog} onSubmit={handelEditBlog}/>
    </Layout>
  )
}

export default EditBlog