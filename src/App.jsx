import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/blog/Home';
import Register from './pages/auth/Register';
import Login from './pages/auth/Login';
import AddBlog from './pages/blog/AddBlog';
import EditBlog from './pages/blog/EditBlog';
import SingleBlog from './pages/blog/SingleBlog';
import {Provider} from 'react-redux'
import store from '../store/store';

function App() {


  return (
    <Provider store={store}>
        <BrowserRouter>
          <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/register' element={ <Register />} />
          <Route path='/login' element={<Login />}   />
          <Route path='/blogs/add' element={<AddBlog />}   />
          <Route path='/blogs/edit/:id' element={<EditBlog />}   />
          <Route path='/blog/:id' element={<SingleBlog />}   />
            
          
          </Routes>
      </BrowserRouter>

      </Provider>
    
  )
}

export default App
