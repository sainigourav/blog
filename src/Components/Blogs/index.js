import React , { useState, useEffect} from 'react'
import BlogList from '../BlogList'

const Blogs = (props) => {
	let [blogs,setBlogs] = useState([])
	let [blogsDefault,setBlogsDefault] = useState([])
	let [keyword,setKeyword] = useState('')
	const barStyle = {width: '20rem', background:'#f2f1f9', border:'none', padding:'0.5rem'}
	
		useEffect(()=>{
			setBlogs(props.allBlogs)
			setBlogsDefault(props.allBlogs)
		
	},
	// eslint-disable-next-line
	[])

	const inputHandler = (e) =>{
		setKeyword(e.target.value)
			const lowercaseKeyword = e.target.value.toLowerCase()
		blogs = blogsDefault.filter(blog => {
			return Object.keys(blog).some(key=> blog[key].toLowerCase().includes(lowercaseKeyword))
		})
		setBlogs(blogs)
	}
	
  return (
    <>
	<div id='search'>
	<h2>Your all blogs appear here</h2>
	  <input 
		style={barStyle}
		value={keyword}
		placeholder={'search blog'}
		onChange={inputHandler}
	/>
	</div>
	{
		blogs.length !== 0 ? <>
      <div id="blogCardContainer">
          <BlogList blogs={blogs} />
        </div>
		</>
		:
		<div className='alert alert-danger' role='alert'>Oops! No blog found</div>
	}
	
    </>
  )
}

export default Blogs