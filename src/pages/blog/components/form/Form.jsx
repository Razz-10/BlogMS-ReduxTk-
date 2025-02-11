import React, { useEffect, useState } from 'react'

const Form = ({type,onSubmit,blog}) => {

	const [data,setData]=useState({
		title:'',
		subtitle:'',
		description:'',
		category:'',
		image:''
	})
	useEffect(()=>{
		if(type === 'Edit' && blog){

			setData({
				title: blog.title ||'',
				subtitle: blog.subtitle ||'',
				description: blog.description ||'',
				category: blog.category ||'',
				image: blog.imageUrl ||'',
			});
	}
},[type,blog]);

	const handelChange = (e)=>{
		const {name,value} = e.target
		setData({
			...data,
			[name]: name === 'image' ?e.target.files[0] :value
		})

	}

	const handelSubmit =(e)=>{
		e.preventDefault()
		onSubmit(data)
	}
  return (

    
<div className="flex justify-center items-center w-full h-screen">

	
		<div className="w-full  p-20 my-4 ml-22 md:px-12 lg:w-9/12 lg:pl-25 lg:pr-25  rounded-2xl shadow-2xl bg-gray-300">
		<div className='w-3/4 mx-40'>
			<div className="flex">
				<h1 className="font-bold uppercase text-5xl">{type} <br /> Blog</h1>
			</div>
			<form onSubmit={handelSubmit}>
			<div className="grid grid-cols-1 gap-10 md:grid-cols-2 mt-5 text-xl">
				<input className="w-full h-20 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text" placeholder="Title*" name='title' onChange={handelChange}
				value={data.title}
				 />
				<input className="w-full h-20  bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text" placeholder="Sub-Title*" name='subtitle'  onChange={handelChange}
				value={data.subtitle}
				/>
				<input className="w-full h-20 bg-gray-100 text-gray-900 mt-2 p-6 rounded-lg focus:outline-none focus:shadow-outline"
				type="file" placeholder="" name='image' onChange={handelChange}
				
				/>
				<input className="w-full h-20 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text" placeholder="Category" name='category' onChange={handelChange}
				value={data.category}	
				/>
        </div>
				<div className="my-7">
					<textarea placeholder="Description*" name='description' className="w-full h-40 max-h-65 text-xl bg-gray-100 text-gray-900 mt-2 p-4 rounded-lg focus:outline-none focus:shadow-outline" onChange={handelChange} 
					value={data.description}
					>	
					</textarea>
				</div>
				<div className="my-3 w-1/2 lg:w-1/4">
					<button className="uppercase text-sm font-bold tracking-wide bg-blue-900 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
            		{type}
          			</button>
				</div>
			</form>
			</div>
		</div>
    
    
</div>


  )
}

export default Form