import React from 'react'
import { Switch, Route} from 'react-router-dom'
import './style.css'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Blogs from './Components/Blogs'
import NewBlog from './Components/NewBlog'
import SingleBlog from './Components/SingleBlog'
import Home from './Components/Home'

function App() {
	
	var allBlogs = [];
	var allTitle = [];
	
  return (
    <>
      <Header/>
        <Switch>
			<Route exact path='/' component={Home} />
            <Route exact path='/blogs' render={() => <Blogs allTitle={allTitle} allBlogs={allBlogs}/>} />
            <Route exact path='/blog/new' render={() => <NewBlog allTitle={allTitle} allBlogs={allBlogs}/>}  />
			<Route exact path='/blog/:blog_name' render={(props) => <SingleBlog blog_name = {props.match.params.blog_name} allBlogs={allBlogs}/>} />
        </Switch>
      <Footer/>
    </>
  
  );
}

export default App;
