import React from "react";
import sun from "../assets/sun.mp4"
import { BsArrowRightCircle } from "react-icons/bs";
import ProgressBar from "@ramonak/react-progress-bar";



function VideoPlayer({ number, title, paragraph, src }) {
  

  return ( 
  <div className="mt-7 mr-11 mb-5 hover:scale-105 duration-500 py-2 cursor-pointer  flex md:flex-row lg:flex-row flex-col  " id="mudu">
       <div className="flex items-center justify-start w-12 h-12 rounded-full bg-[#FD7373] text-white font-bold text-xl text-center px-5  z-30 absolute ">
        {number}
      </div>
    <div className="flex flex-col items-start justify-center ml-9 mt-7 bg-[#222222] rounded-lg">
   
    <div className="relative w-[100%] h-50 mx-auto mb-3 rounded-t-lg">
    <video  width="100%" height="100%" controls="controls" id="rendu" src={sun}  className="object-cover mb-5 rounded-t-lg"> 
    Video tag is not supported in this browser.
  </video>

      </div>
      <div className="text-left rounded-lg pl-4 pb-4">
      <p className="text-sm font-out pb-2 text-gray-600">{paragraph}</p>
        <h3 className="text-lg font-out text-white capitalize font-semibold leading-[1rem] tracking-[0.01em]">{title}</h3>
        
    <div className="hii">
        <ProgressBar className="pt-2 "
       
            completed={85}
            height={8}
            labelAlignment="none"
            labelColor="
            #BDB8B8"
            bgColor="
             #75F489"
            baseBgColor="#414141
            "
            labelSize="10px"
            animateOnRender
          />
          </div>
      
      </div>
    </div>
    <div className="flex flex-col"> </div>
    </div>
  );
}

function Vedios() {
  return (
    <div className="flex justify-center gap-4  " id="mudu">
      <VideoPlayer
        number="1"
        title=" photoshop by tanmay Designer "
        paragraph="Lesson 2"
        src={sun}
       
       
      />
      <VideoPlayer
        number="2"
        title=" photoshop by tanmay Designer "
        paragraph="Lesson 2"
        src={sun}
      />
      <VideoPlayer
        number="3"
        title=" photoshop by tanmay Designer "
        paragraph="Lesson 2"
        src={sun}
      />
        <div className="flex flex-col my-auto pr-5" id="circle">
    <p className='text-white ml-2 '><BsArrowRightCircle size='2.5rem'/></p>
    <p className="text-white pt-4 text-[0.7rem]" >see more</p>
    </div>
    </div>
  );
}

export default Vedios;
