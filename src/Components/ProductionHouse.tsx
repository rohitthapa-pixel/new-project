import React from 'react'
import starwar from './../assets/Images/starwar.png'
import nationalg from './../assets/Images/nationalG.png'
import pixar from './../assets/Images/pixar.png'
import disney from './../assets/Images/disney.png'
import marvel from './../assets/Images/marvel.png'
import starwarV from './../assets/Images/videos/star-wars.mp4'
import marvelV from './../assets/Images/videos/marvel.mp4'
import disneyV from './../assets/Images/videos/disney.mp4'
import pixarV from './../assets/Images/videos/pixar.mp4'
import nationalgV from './../assets/Images/videos/national-geographic.mp4'

const ProductionHouse = () => {
    const productionHouseList =[
        {
            id:1,
            image:disney,
            video:disneyV

        },
        {
            id:2,
            image:marvel,
            video:marvelV

        },
        {
            id:3,
            image:pixar,
            video:pixarV

        },
        {
            id:4,
            image:nationalg,
            video:nationalgV

        },
        {
            id:5,
            image:starwar,
            video:starwarV

        },
    ]
  return (
    <div className='bg-gray-950 flex gap-2 md:gap-5 p-2 px-5 md:px-16 shadow-xl shadow-black'>
        {productionHouseList.map((item)=>(
            <div className='border-[2px]  border-gray-600 rounded-lg hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer'>
                     <video src={item.video}
                autoPlay
                muted
                loop
                playsInline
                 className='absolute top-0 rounded-md z-0 opacity-0 hover:opacity-50'/>

                <img src={item.image} className='w-full z-[1]'/>
           
            </div>
        ))}
    </div>
  )
}

export default ProductionHouse