import React from 'react';
import { Link } from 'react-router-dom'
import { FaCaretDown, FaCaretUp } from 'react-icons/fa';


const MainNav = () => {
  return (
    <>
        <div className='hidden lg:flex'>
            <ul className='lg:flex lg:text-white lg:gap-4 lg:text-sm font-semibold lg:uppercase lg:items-center lg:tracking-wider'>
                <li className='lg:flex'>
                    Game Info
                    <div className='lg:flex lg:items-center ml-2'>
                        <FaCaretDown className="text-val-fade" size={16} />
                    </div>
                </li>
                <li className='lg:flex'>
                    <Link>
                        Media   
                    </Link>
                </li>
                <li className='lg:flex'>
                    <Link>
                        News
                    </Link>
                </li>
                <li className='lg:flex'>
                    <Link>
                        Support
                    </Link>
                    <div className='lg:flex lg:items-center ml-2'>
                        <FaCaretDown className="text-val-fade" size={16} />
                    </div>
                </li>
                <li className='lg:flex'>
                    <Link>
                        More
                    </Link>
                    <div className='lg:flex lg:items-center ml-2'>
                        <FaCaretDown className="text-val-fade" size={16} />
                    </div>
                </li>
            </ul>
        </div>
    </>
  )
}

export default MainNav