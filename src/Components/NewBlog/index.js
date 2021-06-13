import React , { useState} from 'react'

const NewBlog = (props) => {
	
	let [title,setTitle] = useState('')
	let [content,setContent] = useState('')
	
	const CreateBlogHandler = () =>{
		if(title !== '' && content !== '')
		{

			props.allBlogs.push({title, content})
			props.allTitle.push(title)
			setTitle('')
			setContent('')
		}
	}
	const blogTitle = (e) =>{
		setTitle(e.target.value)
	}
	const blogContent = (e) =>{
		setContent(e.target.value)
	}
	
    return (
        <>
            <div id="newBlogContainer">
            <div id="newBlogMain">
                <div id="newBlogTitle">
                    <label>Blog Title</label><br />
                    <textarea value={title} onChange={blogTitle} id="blogTitleText" cols="50" rows="2" placeholder="Blog title" autoComplete="off" required></textarea>
                </div>
                <div id="newBlogContainer">
                    <label>Blog Content</label><br />
                    <textarea value={content} onChange={blogContent} id="blogContentText" cols="50" rows="10" placeholder="Blog content" autoComplete="off" required></textarea>
                </div>
                <div>
                    <button onClick={CreateBlogHandler} className='btn btn-primary'>Create Blog</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default NewBlog
