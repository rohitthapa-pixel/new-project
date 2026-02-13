import React from 'react'

const HeaderItem = ({name, Icon}) => {
  return (
    <div className='flex item-center gap-3 text-[18px] text-white font-semibold cursor-pointer hover:underline underline-offset-8'>
        <Icon/>
        <h2>{name}</h2>
    </div>
  )
}

export default HeaderItem