import React from 'react'
import { Link } from 'react-router-dom'

const Card = ( {blog} ) => {
  return (
    <Link to={`/blog/${blog._id}`}>
    <div className="flex px-3 py-3 mb-4">
    <div className="max-w-sm rounded-xl overflow-hidden shadow-lg">
        <img className="w-full" src={blog.imageUrl} alt="Sunset in the mountains" />
        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{blog.title}</div>
            <p className="text-gray-700   text-base">
                {blog.description}
            </p>
        </div>
        <div className="px-6 py-4">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{blog.category}</span>
        
        </div>
    </div>
</div>
    </Link>
    
  )
}

export default Card