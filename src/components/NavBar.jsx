import React, { useState } from 'react'


const NavBar = () => {
    let navItems = [
        {
            name:"Home" , link :"/"
        }
        ,
        {
            name:"Home" , link :"/"
        }
        ,
        {
            name:"Home" , link :"/"
        }
        ,
        {
            name:"Home" , link :"/"
        }
    ]

    const [open,setOpen] = useState('false')
  return (
      <div className='shadow-md w-full fixed top-0 left-0'>
          <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7 '>
              <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-grey-800'>
                  <span className='text-3xl mr-1 pt-2  text-green-800'>
                      <ion-icon name="code-slash-outline"></ion-icon>
                      
                  </span>
                  Designer
              </div>
              <div  onClick ={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
                  <ion-icon  name={open ? 'close' : 'menu'}></ion-icon>
              </div>
              <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1]  left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ?'top-20':'top-[-460px]'}`}>
                  {
                      navItems.map((nav) => (
                          <li key={nav.name} className='md:ml-8 tex-xl md:my-0 my-7'>
                              <a href={nav.link} className='text-gray-800 hover:text-gray-400 duration-500'>{nav.name}</a>
                          </li>
                          
                      ))
                  }
                  <button className='bg-indigo-600 text-white font-[Poppins] py-2 px-6 rounded md:ml-8 hover:bg-indigo-400' >
                      Get Started
                      
                 </button>
                  
              </ul>
          </div>
    </div>
  )
}

export default NavBar