import React from "react";
import Typed from "react-typed";
import BlogCard from "../Components/BlogCard"
import BlogData from "../Components/BlogData"
import IconCard from "../Components/Iconcard";
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Bolgs = () => {
    useEffect(()=>{
        Aos.init({duration: 1800});
    },[]);
  return (
    <>
    <div id="skill-main">
    <div id="blog" className="my-4 mx-auto blog px-5">
      <Typed
        className="typed d-flex justify-content-center font-weight-bold pb-2"
        strings={["Blogs..."]}
        typeSpeed={40}
      />
      {/* <div className="row">
        {BlogData.map((value, ind) => {
          return (
            <BlogCard
              key={ind}
              title={value.title}
              description={value.description}
              published={value.published}
              read={value.read}
              imgsrc={value.imgsrc}
              link={value.link}
            ></BlogCard>
          );
        })}
      </div> */}
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
    </div>
    </>
  );
};

export default Bolgs;
