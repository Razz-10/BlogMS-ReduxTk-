import axios from "axios";

const API = axios.create({
    baseURL :'https://react30.onrender.com/api/user/',
    headers :{
        'content-type':'application/json',
        'Accept':'application/json',
        'Authorization' : localStorage.getItem("jwt")
    }   
})
export default API