import React, { useEffect } from "react";

import Layout from "../../components/layout/Layout";
import Form from "./components/form/form";
import axios from "axios";
import { baseUrl } from "../../config";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addBlog, setStatus } from "../../../store/blogSlice";
import STATUSES from "../../globals/status/statuses";



const AddBlog =()=>{
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {status} =useSelector((state)=>state.blog)

    const handelCreateBlog=(data)=>{
        dispatch(addBlog(data));
        

    };
    useEffect(()=>{
        
        if (status === STATUSES.SUCCESS){
            
            navigate('/');

            dispatch(setStatus(null))
        }


    },[status])

    return(
       <Layout>

        <Form type='Add' onSubmit={handelCreateBlog} />

       </Layout>

        
    )
}
export default AddBlog