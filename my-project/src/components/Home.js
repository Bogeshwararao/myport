import React from 'react';
import prof from "../assets/OIP.jpg";
const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f] py-15'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full py-10'>
                   
      {/*image*/}
      <br></br>
        <div className='py-5rounded-full mb-0 py-15'>
        <img src={prof}  alt = "port" class="rounded-full"></img>
        </div>
        {/*introduction*/}
        <br></br>
        <p className='text-red-700 '>Hi, my name is ,
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
         BogeshwaraRao
        </h1>
        </p>
        
        <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-red-700 py-3'>
              About
            </p>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
        I’m a Computer Engineering student at Sathyabama University. Basically,
        I’m from Rajaumundry,
        I’m familiar with Html, Css, Javascript, React js, Python,  and Java. 
        I’m a Technical Team Member @ACM-SIST student Chapter.
        </p>
    
      </div>
    </div>
  );
};

export default Home;