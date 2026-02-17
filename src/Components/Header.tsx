import React, { useState } from 'react'
import logo from '../assets/Images/logo.png'
import profile from '../assets/Images/Profile.png'
import { 
  HiHome,             
  HiMagnifyingGlass,  
  HiStar,          
  HiPlayCircle,       
  HiTv               
} from 'react-icons/hi2';
import { HiPlus, HiDotsVertical } from 'react-icons/hi';
import HeaderItem from './HeaderItem';



const Header = () => {
  const[toggle, setToogle]= useState(false)
  const menu=[
    {
      name:"HOME",
      icon:HiHome
    },
    {
      name:"Search",
      icon:HiMagnifyingGlass
    },
    {
      name:"WATCH LIST",
      icon:HiPlus
    },
    {
      name:"ORIGINALS",
      icon:HiStar
    },
    
    {
      name:"MOVIES",
      icon:HiPlayCircle
    },
    {
      name:"SERIES",
      icon:HiTv
    }
  ]
  return (
    <>
   <div className=' bg-gray-900 flex items-center justify-between px-5 py-3'>
    <div className='flex items-center gap-10'>
      <img className='w-[90px] h-[50px] md-w-[115px] object-cover  ' src={logo} alt="logo" />
      <div className='hidden md:flex gap-10'>
      {menu.map((item)=>(
        <HeaderItem name={item.name} Icon={item.icon}/>
      ))}
      </div>
      <div className='flex md:hidden gap-8'>
      {menu.map((item, index)=>index<3 &&(
        <HeaderItem name={''} Icon={item.icon}/>
      ))}
      <div className='md:hidden' onClick={()=>setToogle(!toggle)}>
        <HeaderItem name={''} Icon={HiDotsVertical}/>
        {toggle?<div className='absolute mt-3 bg-gray-950 border-[1px] p-3 border-gray-200 px-5 py-3'> 
          {menu.map((item, index)=>index>2 &&(

          <HeaderItem name={item.name} Icon={item.icon}/>
        ))}</div>:null}
      </div>
      </div>
      </div>
        <img className='w-[40px] rounded-full' src={profile} alt="profile" />
      </div>
    </>
  )
}

export default Header