import React from 'react'
import logo from '../assets/Images/logo.png'
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
      <img className='w-[80px] md-w-[115px] object-cover ' src={logo} alt="logo" />
      {menu.map((item)=>(
        <HeaderItem name={item.name} Icon={item.icon}/>
      ))}
      </div>
        <img className='w-[40px] rounded-full' src={logo} alt="logo" />

      </div>
    
    </>
  )
}

export default Header