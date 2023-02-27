import React,{useState } from 'react';
import { RiMenu3Line, RiCloseLin, RiCloseLine } from 'react-icons/ri';
import logo from '../assets/logo.png';
import { BsArrowLeftCircle,BsSearch } from "react-icons/bs";
import { BiUser,BiBell,BiCartAlt } from "react-icons/bi";



const Menu = () => (
    <>
           <p><a href="#home">Home</a></p>
            <p><a href="#whpt3">What is  AI</a></p>
            <p><a href="#possibility">Open AI</a></p>
                  
    </>
  )
  const Navbar = () => {
    let Links =[
        {name: "Home",link:"/"},
        {name: "My Courses",link:"/"},
        {name: "Browse Courses",link:"/"},
        
    ];
    const [toogleMenu,setToogleMenu] = useState(false);
    return (
      <div className="flex justify-between items-center px-8 py-6 bg-[#131313]" id='gpt3__navbar'>
        <div className="flex flex-1 justify-start items-center">
          <div className="mr-8 flex">
            <img src={logo} alt="logo"  className="w-11 h-8 "/>
           
          </div>
          <div className="flex   flex-row " id='gpt3__navbar-links_container'>
          <p className='text-white ml-2 '><BsArrowLeftCircle size='1.5rem'/></p>
          {
                    Links.map((link)=>(
                        <p key={link.name} className="text-gray-500 font-pop font-semibold text-base my-0 mx-4 cursor-pointer">
                            <a href={link.link} className=" hover:text-white" >{link.name}</a>
                        </p>
                    ))
                }
          </div>
        </div>
        <div className="flex justify-end items-center  ">
        <div class="w-9 h-9 bg-gray-600 hover:bg-white rounded-full justify-center text-center mx-2"><BsSearch  size="1.5rem"  className='m-auto pt-2 alert-notice cursor-pointer text-white hover:text-black '/></div>
       
        <div class="w-9 h-9 bg-gray-600 hover:bg-white rounded-full justify-center text-center mx-2"><BiBell  size="1.75rem"  className='m-auto pt-2 cursor-pointer  text-white hover:text-black '/></div>
        <div class="w-9 h-9 bg-gray-600 hover:bg-white rounded-full justify-center text-center mx-2"><BiCartAlt  size="1.75rem"  className='m-auto pt-2 cursor-pointer  text-white hover:text-black '/></div>
        <div class="w-9 h-9 bg-gray-600 hover:bg-white rounded-full justify-center text-center mx-2"><BiUser  size="1.75rem"  className='m-auto pt-2 cursor-pointer  text-white hover:text-black  '/></div>
      
        </div>
        <div className="hidden ml-4 relative cursor-pointer" id='gpt3__navbar-menu'>
           {toogleMenu
           ? <RiCloseLine color='#fff' size={27} onClick = {() => setToogleMenu(false)}/>
          : <RiMenu3Line color='#fff' size={27} onClick = {() => setToogleMenu(true)}/>
           }
           {toogleMenu && (
            <div className="flex justify-end items-end flex-col  text-end bg-black px-4 py-4 absolute top-10 right-0 mt-4 min-w-[210px] rounded-[4px] shadow-[0px_0px_0px_rgba(0,0,0,0.2)] scale-up-center"
            id='gpt3__navbar-menu_container'>
              <div className="">
              {
                    Links.map((link)=>(
                        <p key={link.name} className="text-gray-500 font-pop font-semibold text-base my-0 mx-4 py-3  justify-center cursor-pointer">
                            <a href={link.link} className="py-7" >{link.name}</a>
                        </p>
                    ))
                }
              </div>
            </div>
           )}
        </div>
      </div>
    )
  }
  
  export default Navbar