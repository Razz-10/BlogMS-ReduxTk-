import STATUSES from "../src/globals/status/statuses";
import API from "../src/http";
import { createSlice } from "@reduxjs/toolkit";

const blogSlice = createSlice({
    name: 'blog',
    initialState :{

        blogs :[],
        blog :{},
        status : null,
        
    },
    reducers:{

        setStatus(state,action){
            state.status = action.payload
        },
        setBlogs(state,action){
            state.blogs = action.payload
        },
        
        setBlog(state,action){
            state.blog = action.payload
        }
        
    },
});


export const {setStatus,setBlogs,setBlog}= blogSlice.actions
export default blogSlice.reducer

export function addBlog(data){
    return async function addBlogThunk(dispatch){
        dispatch(setStatus(STATUSES.LOADING));
        try {
            const response = await API.post('blog',data,
                {
                    headers:{
                        'Content-Type' :'multipart/form-data'
                        
                }
            }
            );
            if(response.status === 201){
                console.log('createblog sucess')

                dispatch(setBlogs(response.data.data))
                
                dispatch(setStatus(STATUSES.SUCCESS))
            }
            else{
                dispatch(setStatus(STATUSES.ERROR))
            }
        } catch (error) {
            dispatch(setStatus(STATUSES.ERROR))
        }
    }
}
export function fetchBlog(data){
    return async function fetchBlogThunk(dispatch){
        dispatch(setStatus(STATUSES.LOADING));
        
        try {
            const response = await API.get('blog')
            if(response.status === 200 && response.data.data.length >0 ){
                const blogs =response.data.data;

                dispatch(setBlogs(blogs))
               
                // dispatch(setBlogs(response.data.data))
                dispatch(setStatus(STATUSES.SUCCESS))
                
                
            }
            else{
                dispatch(setStatus(STATUSES.ERROR))
            }
        } catch (error) {
            dispatch(setStatus(STATUSES.ERROR))
        }
    }
}
export function singleBlog(id){
    return async function singleBlogThunk(dispatch){
        dispatch(setStatus(STATUSES.LOADING));
        try {
            const response = await API.get(`blog/${id}`)
            if (response.status === 200){
                
                dispatch(setStatus(STATUSES.SUCCESS))
                dispatch(setBlog(response.data.data))
    
            }
            else {
                dispatch(setStatus(STATUSES.ERROR))
            }
            
        } catch (error) {
            dispatch(setStatus(STATUSES.ERROR))

            
        }

    }
}


export function deleteBlog(id){
    return async function deleteBlogThunk(dispatch,getState){
        dispatch(setStatus(STATUSES.LOADING))
        try {

            const response = await API.delete(`blog/${id}`)

            if (response.status ===200){
                //getting currentlist of blogs from redux state
                
                const currentBlogs = getState().blog.blogs;
                
                // Remove the deleted blog from the list
                const updatedBlogs = currentBlogs.filter(blog=>blog.id !==id);

                dispatch(setBlogs(updatedBlogs));

                dispatch(setStatus(STATUSES.SUCCESS))
                

            }
         
            
        } catch (error) {
            
             dispatch(setStatus(STATUSES.ERROR))
            
        }
 

    }
}
export function editBlog(data,id){
    return async function editBlogThunk(dispatch){
        dispatch(setStatus(STATUSES.LOADING))

        try {

            const response = await API.patch(`blog/${id}`,data,{
                headers :{
                    "Content-Type" :'multipart/form-data',
                }
            })
            if (response.status === 200){
                
                dispatch(setBlog(data))

                dispatch(setStatus(STATUSES.SUCCESS))


                
            }
            else {
               
                alert("YOu are not a author")
            }

            
        } catch (error) {
            console.log(error)
            dispatch(setStatus(STATUSES.ERROR))
            
        }
    }
}