import React from 'react'
import SkillCard from '../Components/Skillcard'
import IconCard from '../Components/Iconcard'
import Typed from "react-typed";
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Skills = () => {
  useEffect(()=>{
    Aos.init({duration: 1800});
},[]);
  return (
    <section id="skill" className="Container-fluid mb-5">
      <div className="row">
        <div className="col-10 mx-auto">
        <div className="my-5">
        <Typed
          className="typed d-flex justify-content-center font-weight-bold"
          strings={["My Skills..."]}
          typeSpeed={40}
        />
      </div>
          <h2 >Programming Languages:</h2>
          <div className="pt-2 pt-lg-1 d-flex mr-auto flex-row">
            <SkillCard iconsrc="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/c.svg" />
            <SkillCard iconsrc="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original-wordmark.svg" />
            <SkillCard iconsrc="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original-wordmark.svg" />
            <SkillCard iconsrc="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/javascript.svg" />
            <SkillCard iconsrc="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" />
            <SkillCard iconsrc="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" />

           
  
          </div>
          {/*  */}

          <h2 >FrameWorks:</h2>
          <div className="pt-2 pt-lg-1 d-flex mr-auto flex-row">
            <SkillCard iconsrc="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/bootstrap.svg" />
            <SkillCard iconsrc="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/react.svg" />
            <SkillCard iconsrc="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" />
            <SkillCard iconsrc="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" />
            
          </div>

          {/*  */}
          <h2 >Tools and Technologies:</h2>
          <div className="col-md-10 pt-2 pt-lg-1 d-flex mr-auto flex-row" >
            {/* <SkillCard iconsrc="https://raw.githubusercontent.com/prplx/svg-logos/5585531d45d294869c4eaab4d7cf2e9c167710a9/svg/materialize.svg" /> */}
       
            <SkillCard iconsrc="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg" />
       <SkillCard iconsrc="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" />
            <SkillCard iconsrc="https://www.vectorlogo.zone/logos/getbootstrap/getbootstrap-icon.svg" />
            <SkillCard iconsrc="https://raw.githubusercontent.com/github/explore/78df643247d429f6cc873026c0622819ad797942/topics/github/github.png" />
          </div>
        </div>
      </div>
              <div className="justify-content-center  order-lg-2 header-img pt-4">
                        <h2 data-aos="fade-up">Contact me.</h2>
                      </div>
                   <div className="d-flex justify-content-center  order-lg-2 header-img pt-4" data-aos="fade-up">
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
    </section>
  )
}

export default Skills