import React , {useEffect, useState} from 'react'

const SingleBlog = (props) => {
	
	let [title,setTitle] = useState('')
	let [content,setContent] = useState('')
	
	useEffect(()=>{
		for(var i=0;i<props.allBlogs.length;i++)
		{
			if(props.allBlogs[i].title === props.blog_name)
			{
				setTitle(props.allBlogs[i].title)
				setContent(props.allBlogs[i].content)
			}
		}
	},[props])
	
    return (
        <>
            <div id='singleBlog'>
           <h1>Your Blog</h1>
       </div>
       <div id="singleBlogMain">
           <div>
               <h3>{title}</h3>
           </div>
           <div id="singleBlogContent">
               <p>{content}</p>
           </div>
       </div>
        </>
    )
}

export default SingleBlog
