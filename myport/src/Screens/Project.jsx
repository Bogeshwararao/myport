import React from "react";
import ProjectCard from "../Components/ProjectCard";
import ProjectData from "../Components/ProjectData";
import Typed from "react-typed";
import IconCard from "../Components/Iconcard";
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Projects = () => {
  useEffect(()=>{
    Aos.init({duration: 1800});
},[]);
  return (
    < >
    <div className="Project">
      <div className="my-5">
        <Typed
          className="typed d-flex justify-content-center font-weight-bold"
          strings={["Projects..."]}
          typeSpeed={40}
        />
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              {ProjectData.map((value, ind) => {
                return (
                  <ProjectCard
                    key={ind}
                    title={value.title}
                    description={value.description}
                    repo={value.repo}
                    imgsrc={value.imgsrc}
                    livehere={value.livehere}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
       <div className="justify-content-center  order-lg-2 header-img pt-4">
                        <h2 >Contact me.</h2>
                      </div>
                   <div className="d-flex justify-content-center  order-lg-2 header-img pt-4">
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
    </>
  );
};

export default Projects;
