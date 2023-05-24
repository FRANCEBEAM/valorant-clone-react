import React from 'react';
import { FaBars } from 'react-icons/fa';
import { GrClose } from 'react-icons/gr';
import { MdClose } from 'react-icons/md'
import { MdOutlineLanguage } from 'react-icons/md'

const RightNavbar = ({clickBars, handleClickBars}) => {
  return (
    <>
        <div className='flex items-center gap-5'>
            <div className='hover:bg-gray-700 p-2.5 rounded-lg cursor-pointer'>
                <MdOutlineLanguage size={30} color='white' />
            </div>
            <div className='bg-gray-700 p-4 rounded-[18px] transition-all ease-in duration-500 cursor-pointer' onClick={handleClickBars}>
               <FaBars size={20} color='white' />
            </div>
        </div>

        <div className={clickBars ? 'w-full h-[100%] bg-bg-valblack absolute left-0 p-4 py-4' : "hidden"}>
            <div className="flex items-center justify-between">
                <div className='fill-black group hover:fill-val-red flex cursor-pointer' onClick={handleClickBars}>
                <div className='cursor-pointer'>
                    <div className='fill-white'>
                        <svg xmlns="http://www.w3.org/2000/svg" height="35" viewBox="0 0 100 100" width="35"><path d="M99.25 48.66V10.28c0-.59-.75-.86-1.12-.39l-41.92 52.4a.627.627 0 00.49 1.02h30.29c.82 0 1.59-.37 2.1-1.01l9.57-11.96c.38-.48.59-1.07.59-1.68zM1.17 50.34L32.66 89.7c.51.64 1.28 1.01 2.1 1.01h30.29c.53 0 .82-.61.49-1.02L1.7 9.89c-.37-.46-1.12-.2-1.12.39v38.38c0 .61.21 1.2.59 1.68z"></path></svg>
                    </div>
                </div>
                </div>
                <div className='bg-gray-700 p-3 rounded-[18px] cursor-pointer' onClick={handleClickBars}>
                    <MdClose className="text-white" size={26}/>
                </div>
            </div>
        </div>

        <div className={clickBars ? 'bg-bg-valblack w-full h-[900px] top-[80px] p-4 py-5 transition-all ease-in-out justify-between absolute right-0 transition-all ease-in-out' : "right-[-100%]"}>

        </div>
    </>
  )
}

export default RightNavbar