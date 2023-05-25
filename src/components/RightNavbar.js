import React from 'react';
import { FaBars } from 'react-icons/fa';
import { GrClose } from 'react-icons/gr';
import { MdClose } from 'react-icons/md';
import { FiArrowUpRight } from 'react-icons/fi';
import { FaCaretDown, FaCaretUp } from 'react-icons/fa';
import { MdOutlineLanguage } from 'react-icons/md';
import { IoSearchOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const RightNavbar = ({clickBars, handleClickBars, clickGame, handleClickGame, clickSupport, handleClickSupport, clickSocials, handleSocialsClick}) => {
  return (
    <>
        <div className='flex items-center'>
            <div className='hidden lg:flex lg:bg-gray-600 lg:p-2 rounded-[18px]'>
                <IoSearchOutline size={30} color='white'/>
            </div>
            <div className='hover:bg-gray-700 p-2.5 rounded-lg cursor-pointer mx-1'>
                <MdOutlineLanguage size={30} color='white' />
            </div>
            <div className='hidden lg:block lg:text-xs'>
                <button className="w-full font-ffmark font-bold tracking-widest bg-bg-valred uppercase p-4 rounded-xl hover:bg-bg-valred/80 lg:p-2 lg:px-3">Play Now</button>
            </div>
            <div className='bg-gray-700 p-4 rounded-[18px] transition-all ease-in duration-500 cursor-pointer lg:hidden' onClick={handleClickBars}>
               <FaBars size={20} color='white' />
            </div>
        </div>

        <div className={clickBars ? 'w-full h-[100%] bg-bg-valblack absolute p-4 py-5 right-0 sm:w-[650px] sm:right-0 ' : "absolute right-[-100%]"}>
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



            <div className={clickBars ? 'bg-bg-valblack w-full h-[900px] top-[80px] p-4 py-5 transition-all ease-in-out justify-between absolute right-0 overflow-scroll' : "absolute right-[-100%]"}>
            <div className='relative'>

                <form>
                    <IoSearchOutline className='absolute mt-2 ml-3' size={26} color='white'/>
                    <MdClose className="text-white/40 absolute right-0 mr-3 mt-2" size={26}/>
                    <input className="w-full py-2.5 p-14 bg-gray-600 rounded-2xl" type="text" />
                </form>

                {/* GAME info */}
                <div className={clickBars ? 'w-full relative mt-7 py-2 font-bold uppercase font-ffmark text-base tracking-wide': "hidden"}>

                    <div className='hover:bg-gray-600 text-white p-3 rounded-lg cursor-pointer flex justify-between' onClick={handleClickGame}>
                            <div>Game Info</div>
                            <div className='flex lg:hidden'>
                                {clickGame ? <FaCaretUp className="text-val-fade" size={20} /> :  <FaCaretDown className="text-val-fade" size={20} />}
                            </div>
                    </div>

                    <div className={clickGame ? "block text-white/70 text-sm" : "hidden"}>
                        <ul>
                            <li className='p-3 py-3 hover:bg-gray-600 rounded-lg'>
                                <Link to='/'>
                                    Agents
                                </Link>
                            </li>
                            <li className='p-3 py-3 hover:bg-gray-600 rounded-lg'>
                                <Link to='/'>
                                    Maps
                                </Link>
                            </li>
                            <li className='p-3 py-3 hover:bg-gray-600 rounded-lg'>
                                <Link to='/'>
                                    Arsenal
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* MEDIA */}
                <div className={'w-full relative py-2 font-bold uppercase font-ffmark text-base tracking-wide'}>

                    <div className='hover:bg-gray-600 text-white p-3 rounded-lg cursor-pointer flex justify-between'>
                        <div>
                            <Link to='/'>
                                Media
                            </Link>
                        </div>
                    </div>
                </div>

                {/* NEWS */}
                <div className={'w-full relative py-2 font-bold uppercase font-ffmark text-base tracking-wide'}>

                    <div className='hover:bg-gray-600 text-white p-3 rounded-lg cursor-pointer flex justify-between'>
                        <div>
                            <Link to='/'>
                                News
                            </Link>
                        </div>
                    </div>
                </div>

                {/* LEADERBOARDS */}
                <div className={'w-full relative py-2 font-bold uppercase font-ffmark text-base tracking-wide'}>

                    <div className='hover:bg-gray-600 text-white p-3 rounded-lg cursor-pointer flex justify-between'>
                        <div>
                            <Link to='/'>
                                Leaderboards
                            </Link>
                        </div>
                    </div>
                </div>

                {/* SUPPORT */}
                <div className={clickBars ? 'w-full relative py-2 font-bold uppercase font-ffmark text-base tracking-wide': "hidden"}>

                    <div className='hover:bg-gray-600 text-white p-3 rounded-lg cursor-pointer flex justify-between' onClick={handleClickSupport}>
                            <div>Support</div>
                            <div className='flex lg:hidden'>
                                {clickSupport ? <FaCaretUp className="text-val-fade" size={20} /> :  <FaCaretDown className="text-val-fade" size={20} />}
                            </div>
                    </div>

                    <div className={clickSupport ? "block text-white/70 text-sm" : "hidden"}>
                        <ul>
                            <li className='p-3 py-3 hover:bg-gray-600 rounded-lg text-sm'>
                                <Link to='/'>
                                    Specs
                                </Link>
                            </li>
                            <li className='p-3 py-3 hover:bg-gray-600 rounded-lg'>
                                <Link to='/'>
                                    Support
                                </Link>
                            </li>
                            <li className='p-3 py-3 hover:bg-gray-600 rounded-lg'>
                                <Link to='/'>
                                    Community Code
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* SOCIALS */}
                <div className={clickBars ? 'w-full relative py-2 font-bold uppercase font-ffmark text-base tracking-wide': "hidden"}>

                    <div className='hover:bg-gray-600 text-white p-3 rounded-lg cursor-pointer flex justify-between' onClick={handleSocialsClick}>
                            <div>Our Socials</div>
                            <div className='flex lg:hidden'>
                                {clickSocials ? <FaCaretUp className="text-val-fade" size={20} /> :  <FaCaretDown className="text-val-fade" size={20} />}
                            </div>
                    </div>

                    <div className={clickSocials ? "block text-white/70 text-sm" : "hidden"}>
                        <ul>
                            <li className='p-3 py-3 hover:bg-gray-600 rounded-lg text-sm'>
                                <Link to='/'>
                                    Twitter
                                </Link>
                            </li>
                            <li className='p-3 py-3 hover:bg-gray-600 rounded-lg'>
                                <Link to='/'>
                                    Youtube
                                </Link>
                            </li>
                            <li className='p-3 py-3 hover:bg-gray-600 rounded-lg'>
                                <Link to='/'>
                                    Instagram
                                </Link>
                            </li>
                            <li className='p-3 py-3 hover:bg-gray-600 rounded-lg'>
                                <Link to='/'>
                                    Facebook
                                </Link>
                            </li>
                            <li className='p-3 py-3 hover:bg-gray-600 rounded-lg'>
                                <Link to='/'>
                                    Discord
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* ESPORTS */}
                <div className={'w-full relative py-2 font-bold uppercase font-ffmark text-base tracking-wide'}>

                    <div className='hover:bg-gray-600 text-white p-3 rounded-lg cursor-pointer'>
                        <div className='flex items-center justify-between'>
                            <Link to='/'>
                                Esports
                            </Link>
                            <div className="flex">
                                <FiArrowUpRight className="text-val-fade" size={20}/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='pt-14'>
                    <button className="w-full font-ffmark font-bold tracking-widest bg-bg-valred uppercase p-4 rounded-xl hover:bg-bg-valred/80 lg:p-2 lg:px-4">Play Now</button>
                </div>

            </div>
        </div>
        </div>


    </>
  )
}

export default RightNavbar