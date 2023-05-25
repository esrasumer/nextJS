import React from 'react'
import {BiSearch} from 'react-icons/bi'

const Header = () => {
  return (
    <div className='flex items-center gap-3 h-20 p-5'>
        <div className='bg-amber-600 p-3 text-2xl font-bold'>Movie App</div>
        <div className='flex items-center gap-2 border'>
            <input type="text" />
            <BiSearch size={25} />
        </div>
    </div>
  )
}

export default Header;