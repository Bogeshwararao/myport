import React from 'react'
import Typed from "react-typed";
import main from "../Images/main.png";
import IconCard from "../Components/Iconcard";
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Home = () => {
  useEffect(()=>{
    Aos.init({duration: 1800});
},[]);
  return (
    <>

    <section id="Header" className="d-flex align-items-center">
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row">
              
              <div className=" order-lg-2 header-img pt-4" id='ani-home-img'>
                <img src={main} alt="home" className="img-fluid animated" />
              </div>
              <div className=" order-lg-2 header-img pt-4" >
                <Typed
                  className="typed "
                  strings={["Hi" , "I'am Bogesh."]}
                  typeSpeed={80}
                />
              <div data-aos="fade-up">
                <h2 >A Enthusiastic Web developer.</h2>
                </div>
                <div data-aos="fade-up">
                <h5 className="text-muted" style={{ inlineHeight: "1.5" }}>
                  I am a Second Year Student currently undertaking my
                  Bachelors in Computer Science and Engineering from
                  Sathyabama University. I'm a self-taught web developer. I love
                  contributing to open source communities. I am very much
                  facinated about learning new technologies, and to play
                  around with them.
                </h5>
                </div>
                {/* <div className="mt-3">
                  <NavLink to="/Contact" className="btn-contactMe">
                    Contact Me
                  </NavLink>
                </div> */}
                <br></br>
                <br></br>
                 <h2 data-aos="fade-up" >Contact me.</h2>
                 <br></br>
                      <div className="d-flex justify-content-center">
                        <IconCard  
                iconsrc="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/linkedin.svg"
                link="https://www.linkedin.com/in/bogesh-wararao-760530221/"/>
           
              <IconCard
                iconsrc="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/github.svg"
                link="https://github.com/Bogeshwararao"
              />
              <IconCard
                iconsrc="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/twitter.svg"
                link="https://twitter.com/BogeshW"
              />
              <IconCard
                iconsrc="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/hackerrank.svg"
                link="https://www.hackerrank.com/bogeshwararao121"
              />
              <IconCard
                iconsrc="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/instagram.svg"
                link="https://www.instagram.com/bogeshwararao/"
              />
              <IconCard
                iconsrc="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/leetcode.svg"
                link="https://leetcode.com/bogesh/"
              />
            </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
  )
}

export default Home