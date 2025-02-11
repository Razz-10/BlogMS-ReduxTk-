import React from "react";

import Layout from "../../components/layout/Layout";
import Form from "./components/form/form";
import axios from "axios";
import { baseUrl } from "../../config";
import { useNavigate } from "react-router-dom";


const AddBlog =()=>{
    const navigate = useNavigate()
    const handelCreateBlog=(data)=>{
        
        try {
            const response = axios.post(`${baseUrl}/blog`,data,{
                headers : {
                    "Content-Type" :"multipart/form-data",
                    "Authorization" :localStorage.getItem('token')
    
                }
            })
            if (response.status = 201){
                navigate('/')
    
            }else{
                alert("something went wrong")
            }
            
        } catch (error) {
            alert(error?.response?.data?.message)
            
        }

    }

    return(
       <Layout>

        <Form type='Add' onSubmit={handelCreateBlog} />

       </Layout>

        
    )
}
export default AddBlog