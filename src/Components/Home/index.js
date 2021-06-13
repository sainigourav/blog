import React from 'react'
import Img1 from '../Images/resumep1.jpg'
import Img2 from '../Images/resumep2.jpg'

const Home = () => {
  return (
    <>
	<div id='resume'>
	  <img src={Img1} alt='gourav_saini_resume_page1' />
	  <img src={Img2} alt='gourav_saini_resume_page2' />
	</div>
    </>
  )
}

export default Home