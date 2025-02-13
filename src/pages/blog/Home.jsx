import React, { useEffect, useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import Layout from '../../components/layout/Layout'
import Card from './components/card/Card'
import axios from 'axios'
import { baseUrl } from '../../config'
import { fetchBlog,setStatus } from '../../../store/blogSlice'
import { useDispatch, useSelector } from 'react-redux'
import STATUSES from '../../globals/status/statuses'

const Home = () => {

const dispatch =useDispatch()
const {status,blogs} = useSelector((state)=>state.blog)


  useEffect(()=>{
    dispatch(fetchBlog())

    // console.log( ` this is after dispatch fetch blog ${status}`)
    

  },[dispatch])
  
  useEffect(()=>{

    if (status === STATUSES.SUCCESS){
      dispatch(setStatus(null))
    }
  },[dispatch,status])
  
  
  
  if (status === STATUSES.ERROR) {
    console.log("error")
  }
 

  return (
   <Layout>
    <div className='flex flex-wrap justify-center space-x-5 mt-3 mb-2'>
        { status === STATUSES.LOADING ? (
          <div>Loading Blogs...</div> )
          // : blogs.length > 0 ? (blogs.map((blog)=>
          : Array.isArray(blogs) && blogs.length > 0 ? (blogs.map((blog)=>
            (<Card key ={blog._id} blog ={blog} />)
        )) : (
          <div>No Blogs found</div>
        )
        
        }
       
    </div>
   </Layout>
  )
}

export default Home