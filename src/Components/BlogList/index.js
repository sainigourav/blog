import { Link } from 'react-router-dom'
import React from 'react'

const BlogList = ({blogs =[]}) => {
  return (
    <>
	  {
		  blogs.map((data,index) => {
			  return(
				<Link to={`/blog/${data.title}`}>
				<div key={index} id="blogCard">
				<div id="blogTitle">
				{data.title}
				</div> 
				<div id="blogContent">
					<p>{data.content}</p></div> 
				</div> 
				</Link>
			  )
		  })
	  }
    </>
  )
}

export default BlogList