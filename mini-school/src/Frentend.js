import React, { useEffect } from 'react'
import {Link} from 'react-router-dom'
import './Style.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

import one from './images/bully.jpg'
import two from './images/study1.jpg'
// import three from './images/c.jpg'
import four from './images/c++.jpg'
// import five from './images/java.jpg'
// import six from './images/Html.jpg'
// import seven from './images/Css.jpg'
// import eight from './images/js.jpg'
// import nine from './images/python.jpg'
// import ten from './images/Sql.jpg'


function Frontend() {
  useEffect(()=>{
    Aos.init()
  },[])
  return (
    <>
    
 <header>

    <img src={one} alt="" className='garuda-logo'/>

<i className='bx bx-menu slide' id="toggle-btn" styleSheet="--i:6;"></i>  
<nav className="navbar">
 <Link href="#"  className="a active" styleSheet="--i:1;">Home</Link>
    <Link href="#" className="a"styleSheet="--i:2;">About</Link>
    <Link href="#" className="a"styleSheet="--i:3;">Doc</Link>
    <Link href="#" className="a"styleSheet="--i:4;">What?</Link>
    <Link href="#" className="a"styleSheet="--i:5;">Contact</Link>
</nav>

<i className='bx bxs-moon mode' ></i>
</header>

<section className="home">
    <div className="home-content">
        <h1>Learn programming<br/>for Free</h1>
        <p>Learn to program with our beginner-friendly tutorials<br/> and examples.
            <span>Read tutorials, try examples, write <br/>code</span> and learn to program.
        </p>
       <div className="social-media">
          <Link href="#" className="a" styleSheet="--i:7;"><i className='bx bxl-linkedin'></i></Link>
          <Link href="#" className="a" styleSheet="--i:8;"><i className='bx bxl-instagram'></i></Link>
          <Link href="#" className="a" styleSheet="--i:9;"><i className='bx bxl-linkedin'></i></Link>
          <Link href="#" className="a" styleSheet="--i:10;"><i className='bx bxl-instagram'></i></Link>
        </div>
        <Link href="#" className="btn">Login</Link> 
    </div>
    <div className="home-img">
       <img src={two} alt=""/>
    </div>
</section>

<section class="course" id="course">
<div class="course-content">
    <h3 data-aos="fade-left">Choose what to learn</h3>
    <p  data-aos="fade-right">Start learning the programing languages.</p> 
</div>
    <div class="course-box" data-aos="fade-down">
        {/* <img src={three} alt=""/>*/} 
        <img src={four} alt=""/> 
     {/* <img src={five} alt="" className='thr'/> 
        <img src={six} alt="" className='fou'/>
        <img src={seven} alt=""/>
        <img src={eight} alt="" className='six'/>
        <img src={nine} alt="" className='sev'/>
        <img src={ten} alt=""/> */}
      </div>
</section>


<section className='about'>
  <div className='abo1'>
  <div class="abo1-content">
</div>
    <div class="abo1-box" data-aos="fade-down">

      </div>

  </div>
  <div className='abo2'>

  </div>
  
</section>

<section className="services" id="services">
<h2 class="heading">Why <span>Learning?</span></h2>

<div className='service-container'>
  <div className="services-box" data-aos="fade-left"> 
      <i className='bx bx-code-alt'></i>
      <h3>Programming made easy</h3>
      <p>We focus on simplicity. Programming tutorials and examples written in simple,
         understandable language for beginners.</p>
  </div>

  <div className="services-box"> 
      <i className='bx bx-code-alt' data-aos="fade-up"></i>
      <h3>Content You Can Trust</h3>
      <p>A dedicated group of experts continually 
        working to create programming resources that is accurate and easier to understand.
      </p>
  </div>
  
  <div className="services-box" data-aos="fade-right"> 
      <i className='bx bx-code-alt'></i>
      <h3>Learn by Doing</h3>
      <p>A dedicated group of experts continually 
        working to create programming resources that is accurate and easier to understand.
        </p>
  </div>
  
</div>
</section>
</>
  )
}

export default Frontend