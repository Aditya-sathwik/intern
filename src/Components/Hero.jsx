import React from 'react';
import img1 from '../assets/hero.png';
import stars from "../assets/stars.png"
import ProgressBar from "@ramonak/react-progress-bar";


const Hero = () => {
  return (
    <div className="flex md:flex-row lg:flex-row bg-[#131313] text-white ml-5 flex-col" id='heros ' >
      <div className="flex flex-1 justify-start items-center pr-8 bg-[#131313]">
        <img src={img1} alt="possibility image" className='w-[100%] h-[100%] sm:w-[80%] sm:h-[60%] md:w-[100%]  md:h-[100%]  lg:w-[100%]  lg:h-[100%]  '  />
      </div>
      <div className="flex flex-1 flex-col justify-start items-start mr-20 text-gray-400">
        <div className="flex flex-col  ">
        <h1 className='font-out font-semibold text-3xl leading-[3rem] tracking-[0.01em] capitalize text-white md:text-4xl'>photoshop by tanmay Designer </h1>
        <p className='font-out font-medium  capitalize my-3 text-gray-400'>photoshop .levels</p>
        </div>
        <div className="flex flex-row my-3 text-base">
            <p className='text-base pr-2'>4.8</p>
            <img src={stars} alt=" star" className='w-20 h-3.5 mt-1 '  />
            <p className='px-2'>(878)</p>

        </div>
        <div className="flex flex-row md:text-sm my-3 text-[0.5rem]">
            <p className='pr-2'>Video Duration :  10 min</p>
            <p className='px-2'>Level  : Beginner</p>
            <p className='px-2'>Course by  : Andria  </p>
        </div>
        <div>
            <p className='capitalize text-base font-light my-3'>Lorem ipsum dolor sit amet, consectetur adipiscing <br/> elit. Aliquam porta euismod pretium. Suspendisse a <br/>magna ac mi<span className='text-yellow-300'>  ...more</span></p>
 

        </div>
        <div className="flex flex-col w-[50%] h-[0px] " id='pick'>
        <ProgressBar
            completed={75}
            height={8}
            labelAlignment="outside"
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
  )
}

export default Hero