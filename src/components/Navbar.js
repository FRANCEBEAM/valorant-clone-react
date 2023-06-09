import React, {useState}  from 'react'
import { FaCaretDown, FaCaretUp, FaBars, FaTimes, FaSearch} from 'react-icons/fa';
import { IoSearchOutline } from 'react-icons/io5';
import { IoCloseOutline } from 'react-icons/io5'
import { MdOutlineLanguage } from 'react-icons/md'
import { Link } from 'react-router-dom';
import { Games, Forges, Esports , Entertainments, Business } from './gamesRequest'
import { FiArrowUpRight } from 'react-icons/fi'

function Navbar() {
    // left-navbar
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    // left-navbar active games category
    const [gamesClick, setGamesclick] = useState(false);
    const handleGamesClick = () => setGamesclick(!gamesClick)

     // left-navbar active forge category
    const [forgeClick, setForgeClick] = useState(false);
    const handleForgeClick = () => setForgeClick(!forgeClick);

    //left-navbar active esports category
    const [esportsClick, setEsportsClick] = useState(false);
    const handleEsportsClick = () => setEsportsClick(!esportsClick)

    //left-navbar active entertainment category
    const [entertainmentClick, setEntertainmentClick] = useState(false);
    const handleEntertainmentClick = () => setEntertainmentClick(!entertainmentClick)

    //left-navbar active Business category
    const [businessClick, setBusinessClick] = useState(false);
    const handleBusinessClick = () => setBusinessClick(!businessClick)
    
    //Right-navbar bars
    const [clickbars, setClickbars] = useState(false)
    const handleClickBars = () => setClickbars(!clickbars)

    //Right-navbar game info
    const [infoClick, setInfoClick] = useState(false);
    const handleInfoClick = () => setInfoClick(!infoClick)

    //Right-navbar support
    const [clickSupport, setSupportClick] = useState(false);
    const handleClickSupport = () => setSupportClick(!clickSupport)

    //right-navbar oursocials
    const [clickSocials, setSocialsClick] = useState(false)
    const handleSocialsClick = () => setSocialsClick(!clickSocials)

  return (
    <>
        <header>
            <div className="w-full bg-bg-valblack fixed p-4 py-4 flex items-center z-[100] justify-between lg:items-center">
                <div className='left-nav flex items-center lg:hidden'>
                    <div className={click ? "flex cursor-pointer group hover:fill-val-red" : "flex cursor-pointer group fill-white hover:fill-val-red"} onClick={handleClick}>
                        <svg  width="95" height="27" class="_32ANSIZormifc9Vc6VVwrx" viewBox="0 0 587.93 165"><title>mainLogoRiotFist21</title><path d="M98.77.33L0 46.07l24.61 93.66 18.73-2.3-5.15-58.89 6.15-2.74L54.96 136l32.01-3.93-5.69-65 6.09-2.71 11.68 66.23 32.38-3.98-6.23-71.25 6.16-2.74 12.77 72.43 32.01-3.93V19.71L98.77.33zm2.32 142.05l1.63 9.22 73.42 12.24v-30.68l-75.01 9.22h-.04zm144.49-19.22v12.63h15.57a14.84 14.84 0 01-1.92 7.31 13 13 0 01-5.6 5.11 20 20 0 01-8.9 1.8 17.53 17.53 0 01-10-2.8 17.87 17.87 0 01-6.44-8.14 33.06 33.06 0 01-2.27-12.93 31.81 31.81 0 012.32-12.81 18.14 18.14 0 016.5-8 17.27 17.27 0 019.82-2.78 19.31 19.31 0 015.36.71 14.15 14.15 0 014.33 2.09 12.92 12.92 0 013.18 3.29 15.61 15.61 0 012 4.44h17.27a27.22 27.22 0 00-3.46-10.28 28.84 28.84 0 00-7.05-8.1 32.6 32.6 0 00-9.91-5.29 37.91 37.91 0 00-12.06-1.86 37.32 37.32 0 00-14 2.6 32.6 32.6 0 00-11.36 7.61 35 35 0 00-7.61 12.21 46.15 46.15 0 00-2.73 16.44q0 11.94 4.54 20.59a32.4 32.4 0 0012.69 13.27 39.84 39.84 0 0035.84.84 28.39 28.39 0 0011.67-11q4.25-7.19 4.24-17.2v-9.76zm215.03 40.81V88.53h51.67v13.96h-34.62v16.76h27.99v13.96h-27.99v16.8h34.7v13.96h-51.75zm101.83-53.3a9 9 0 00-3.54-6.64c-2.09-1.59-5-2.38-8.69-2.38a16.63 16.63 0 00-6.26 1 8.62 8.62 0 00-3.83 2.78 6.74 6.74 0 00-1.33 4 6.2 6.2 0 00.79 3.29 7.27 7.27 0 002.4 2.45 16.54 16.54 0 003.7 1.79 40.14 40.14 0 004.64 1.31l6.63 1.54a47.19 47.19 0 019.45 3.08 27.46 27.46 0 017.2 4.68 18.84 18.84 0 014.58 6.39 20.37 20.37 0 011.61 8.29 20.65 20.65 0 01-3.54 12.11 22.56 22.56 0 01-10.15 7.85 41.31 41.31 0 01-15.93 2.76 42.69 42.69 0 01-16.17-2.81 23.22 23.22 0 01-10.72-8.48q-3.83-5.66-4-14.12h16.43a10.68 10.68 0 007.05 9.94 19.37 19.37 0 007.24 1.26 18.44 18.44 0 006.66-1.09 10 10 0 004.33-3 7.22 7.22 0 001.57-4.48 6.16 6.16 0 00-1.42-4 10.86 10.86 0 00-4.14-2.81 42.07 42.07 0 00-6.89-2.14l-8.07-1.95q-9.65-2.3-15.23-7.26t-5.54-13.44a19.86 19.86 0 013.72-12.12 24.74 24.74 0 0110.33-8.11 36.74 36.74 0 0115-2.91 35.62 35.62 0 0114.92 2.91 23.43 23.43 0 019.91 8.14 21.54 21.54 0 013.6 12.12zm-113.99 53.3h-16.87v-57.35l-1.73-.02-17.04 57.37h-16.86l-16.58-57.37-2.15.02v57.35h-16.87V88.53h28.67l14.48 50.56h1.75l14.48-50.56h28.72v75.44zm-114.66 0h18.27l-25.33-75.43h-23.15l-25.37 75.43h18.3l4.93-16.54h27.42zm-28.43-29.7l8.22-27.65h3.1l8.26 27.65zm278.58-37.76a4 4 0 01-3.67-2.44 4 4 0 010-3.1 4 4 0 01.85-1.27 4.25 4.25 0 011.27-.86 4.15 4.15 0 013.1 0 4.13 4.13 0 011.27.86 4.08 4.08 0 01.86 1.27 4 4 0 010 3.1 4.08 4.08 0 01-.86 1.27 4 4 0 01-1.27.86 4 4 0 01-1.55.31zm0-1.09a2.84 2.84 0 001.47-.39 2.94 2.94 0 001.05-1 2.93 2.93 0 000-2.92 3 3 0 00-1.06-1 2.93 2.93 0 00-2.92 0 3 3 0 00-1 1 2.86 2.86 0 000 2.92 3 3 0 001 1 2.83 2.83 0 001.46.39zm-1.46-1.15V90.6h1.78a1.52 1.52 0 01.69.15 1.13 1.13 0 01.47.42 1.24 1.24 0 01.17.66 1.16 1.16 0 01-.18.66 1 1 0 01-.48.41 1.56 1.56 0 01-.7.14h-1.2v-.72h1a.52.52 0 00.36-.12.5.5 0 00.14-.37.47.47 0 00-.14-.37.52.52 0 00-.36-.12h-.55v2.93zm2.39-1.68l.82 1.68h-1.11l-.75-1.68zM282.41 1.03h17.05v75.44h-17.05zm98.02 37.72q0 12.42-4.71 21a32.67 32.67 0 01-12.79 13.17 38.57 38.57 0 01-36.31 0 32.75 32.75 0 01-12.79-13.2q-4.71-8.66-4.71-21t4.71-21.05a32.67 32.67 0 0112.75-13.14 38.65 38.65 0 0136.31 0 32.67 32.67 0 0112.79 13.17q4.71 8.64 4.71 21.05m-17.35 0a33.35 33.35 0 00-2.23-13 17.47 17.47 0 00-6.33-8 18.57 18.57 0 00-19.45 0 17.57 17.57 0 00-6.35 8 38.59 38.59 0 000 26 17.49 17.49 0 006.35 8 18.57 18.57 0 0019.45 0 17.39 17.39 0 006.33-8 33.4 33.4 0 002.23-13M246.58 50.17l8.76 26.3h18.71l-9.74-28.33h-13.23l-.79-2.44c2.52-.49 6.83-1.25 10.65-3.85a20 20 0 008.75-16.39 24.15 24.15 0 00-3.26-12.75 21.9 21.9 0 00-9.36-8.64 32.56 32.56 0 00-14.64-3H212v75.4h17.06v-26.3zm-.32-15.61a19.35 19.35 0 01-7.26 1.18h-9.94V14.88h9.91a18.68 18.68 0 017.25 1.24 9.12 9.12 0 014.4 3.7 10 10 0 011.5 5.64 9.65 9.65 0 01-1.48 5.55 8.86 8.86 0 01-4.38 3.55M382.04 1.03v14h29.3l.8 2.45c-2.48.48-6.67 1.22-10.43 3.7v55.31h16.87v-61.5h19.62v-14z"></path></svg> 
                        <div>
                            {click ? <FaCaretUp className="text-val-fade ml-3 group-hover:text-val-red" size={20} /> : <FaCaretDown className="text-val-fade ml-3 group-hover:text-val-red" size={20}/>}
                        </div> 
                    </div>

                    <div className="ml-6 cursor-pointer fill-white">
                        <svg xmlns="http://www.w3.org/2000/svg" height="35" viewBox="0 0 100 100" width="35"><path d="M99.25 48.66V10.28c0-.59-.75-.86-1.12-.39l-41.92 52.4a.627.627 0 00.49 1.02h30.29c.82 0 1.59-.37 2.1-1.01l9.57-11.96c.38-.48.59-1.07.59-1.68zM1.17 50.34L32.66 89.7c.51.64 1.28 1.01 2.1 1.01h30.29c.53 0 .82-.61.49-1.02L1.7 9.89c-.37-.46-1.12-.2-1.12.39v38.38c0 .61.21 1.2.59 1.68z"></path></svg>
                    </div>
                    
                    <ul className={click ? "w-[488px] h-100  absolute top-0 bg-white p-4 font-ffmark left-0 transition-all ease-in-out duration-500": "left-[-100%] absolute w-full z-[100]"}>

                    <div className={click ? "flex justify-between py-3 items-align" : "hidden"}>

                    <div className={click ? "flex cursor-pointer group hover:fill-val-red" : "hidden"} onClick={handleClick}>
                        <svg  width="95" height="27" class="_32ANSIZormifc9Vc6VVwrx" viewBox="0 0 587.93 165"><title>mainLogoRiotFist21</title><path d="M98.77.33L0 46.07l24.61 93.66 18.73-2.3-5.15-58.89 6.15-2.74L54.96 136l32.01-3.93-5.69-65 6.09-2.71 11.68 66.23 32.38-3.98-6.23-71.25 6.16-2.74 12.77 72.43 32.01-3.93V19.71L98.77.33zm2.32 142.05l1.63 9.22 73.42 12.24v-30.68l-75.01 9.22h-.04zm144.49-19.22v12.63h15.57a14.84 14.84 0 01-1.92 7.31 13 13 0 01-5.6 5.11 20 20 0 01-8.9 1.8 17.53 17.53 0 01-10-2.8 17.87 17.87 0 01-6.44-8.14 33.06 33.06 0 01-2.27-12.93 31.81 31.81 0 012.32-12.81 18.14 18.14 0 016.5-8 17.27 17.27 0 019.82-2.78 19.31 19.31 0 015.36.71 14.15 14.15 0 014.33 2.09 12.92 12.92 0 013.18 3.29 15.61 15.61 0 012 4.44h17.27a27.22 27.22 0 00-3.46-10.28 28.84 28.84 0 00-7.05-8.1 32.6 32.6 0 00-9.91-5.29 37.91 37.91 0 00-12.06-1.86 37.32 37.32 0 00-14 2.6 32.6 32.6 0 00-11.36 7.61 35 35 0 00-7.61 12.21 46.15 46.15 0 00-2.73 16.44q0 11.94 4.54 20.59a32.4 32.4 0 0012.69 13.27 39.84 39.84 0 0035.84.84 28.39 28.39 0 0011.67-11q4.25-7.19 4.24-17.2v-9.76zm215.03 40.81V88.53h51.67v13.96h-34.62v16.76h27.99v13.96h-27.99v16.8h34.7v13.96h-51.75zm101.83-53.3a9 9 0 00-3.54-6.64c-2.09-1.59-5-2.38-8.69-2.38a16.63 16.63 0 00-6.26 1 8.62 8.62 0 00-3.83 2.78 6.74 6.74 0 00-1.33 4 6.2 6.2 0 00.79 3.29 7.27 7.27 0 002.4 2.45 16.54 16.54 0 003.7 1.79 40.14 40.14 0 004.64 1.31l6.63 1.54a47.19 47.19 0 019.45 3.08 27.46 27.46 0 017.2 4.68 18.84 18.84 0 014.58 6.39 20.37 20.37 0 011.61 8.29 20.65 20.65 0 01-3.54 12.11 22.56 22.56 0 01-10.15 7.85 41.31 41.31 0 01-15.93 2.76 42.69 42.69 0 01-16.17-2.81 23.22 23.22 0 01-10.72-8.48q-3.83-5.66-4-14.12h16.43a10.68 10.68 0 007.05 9.94 19.37 19.37 0 007.24 1.26 18.44 18.44 0 006.66-1.09 10 10 0 004.33-3 7.22 7.22 0 001.57-4.48 6.16 6.16 0 00-1.42-4 10.86 10.86 0 00-4.14-2.81 42.07 42.07 0 00-6.89-2.14l-8.07-1.95q-9.65-2.3-15.23-7.26t-5.54-13.44a19.86 19.86 0 013.72-12.12 24.74 24.74 0 0110.33-8.11 36.74 36.74 0 0115-2.91 35.62 35.62 0 0114.92 2.91 23.43 23.43 0 019.91 8.14 21.54 21.54 0 013.6 12.12zm-113.99 53.3h-16.87v-57.35l-1.73-.02-17.04 57.37h-16.86l-16.58-57.37-2.15.02v57.35h-16.87V88.53h28.67l14.48 50.56h1.75l14.48-50.56h28.72v75.44zm-114.66 0h18.27l-25.33-75.43h-23.15l-25.37 75.43h18.3l4.93-16.54h27.42zm-28.43-29.7l8.22-27.65h3.1l8.26 27.65zm278.58-37.76a4 4 0 01-3.67-2.44 4 4 0 010-3.1 4 4 0 01.85-1.27 4.25 4.25 0 011.27-.86 4.15 4.15 0 013.1 0 4.13 4.13 0 011.27.86 4.08 4.08 0 01.86 1.27 4 4 0 010 3.1 4.08 4.08 0 01-.86 1.27 4 4 0 01-1.27.86 4 4 0 01-1.55.31zm0-1.09a2.84 2.84 0 001.47-.39 2.94 2.94 0 001.05-1 2.93 2.93 0 000-2.92 3 3 0 00-1.06-1 2.93 2.93 0 00-2.92 0 3 3 0 00-1 1 2.86 2.86 0 000 2.92 3 3 0 001 1 2.83 2.83 0 001.46.39zm-1.46-1.15V90.6h1.78a1.52 1.52 0 01.69.15 1.13 1.13 0 01.47.42 1.24 1.24 0 01.17.66 1.16 1.16 0 01-.18.66 1 1 0 01-.48.41 1.56 1.56 0 01-.7.14h-1.2v-.72h1a.52.52 0 00.36-.12.5.5 0 00.14-.37.47.47 0 00-.14-.37.52.52 0 00-.36-.12h-.55v2.93zm2.39-1.68l.82 1.68h-1.11l-.75-1.68zM282.41 1.03h17.05v75.44h-17.05zm98.02 37.72q0 12.42-4.71 21a32.67 32.67 0 01-12.79 13.17 38.57 38.57 0 01-36.31 0 32.75 32.75 0 01-12.79-13.2q-4.71-8.66-4.71-21t4.71-21.05a32.67 32.67 0 0112.75-13.14 38.65 38.65 0 0136.31 0 32.67 32.67 0 0112.79 13.17q4.71 8.64 4.71 21.05m-17.35 0a33.35 33.35 0 00-2.23-13 17.47 17.47 0 00-6.33-8 18.57 18.57 0 00-19.45 0 17.57 17.57 0 00-6.35 8 38.59 38.59 0 000 26 17.49 17.49 0 006.35 8 18.57 18.57 0 0019.45 0 17.39 17.39 0 006.33-8 33.4 33.4 0 002.23-13M246.58 50.17l8.76 26.3h18.71l-9.74-28.33h-13.23l-.79-2.44c2.52-.49 6.83-1.25 10.65-3.85a20 20 0 008.75-16.39 24.15 24.15 0 00-3.26-12.75 21.9 21.9 0 00-9.36-8.64 32.56 32.56 0 00-14.64-3H212v75.4h17.06v-26.3zm-.32-15.61a19.35 19.35 0 01-7.26 1.18h-9.94V14.88h9.91a18.68 18.68 0 017.25 1.24 9.12 9.12 0 014.4 3.7 10 10 0 011.5 5.64 9.65 9.65 0 01-1.48 5.55 8.86 8.86 0 01-4.38 3.55M382.04 1.03v14h29.3l.8 2.45c-2.48.48-6.67 1.22-10.43 3.7v55.31h16.87v-61.5h19.62v-14z"></path></svg> 
                        <div>
                            {click ? <FaCaretUp className="text-val-fade ml-3 group-hover:text-val-red" size={20} /> : <FaCaretDown className="text-val-fade ml-3 group-hover:text-val-red" size={20}/>}
                        </div>
                    </div>
                        {/* Close NAv */}
                        <div className={click ? "cursor-pointer": "hidden" } onClick={handleClick}>
                            <div className='bg-gray-200 p-4 rounded-[18px] transition-all ease-in duration-500'>
                                {click ? <FaBars className="text-black" size={20} /> :  <FaTimes className="text-black" size={20}/>}
                            </div>
                        </div>
                    </div>

                        {/* Games */}
                        <li className={gamesClick? " bg-black p-4 my-4 flex uppercase font-semibold tracking-widest justify-between rounded-lg text-white cursor-pointer relative" :"nav-item bg-gray-100 p-4 my-4 flex uppercase font-semibold tracking-widest justify-between rounded-lg cursor-pointer"} onClick={handleGamesClick}>
                            Games
                            <div className='cursor-pointer right-0'>
                                { gamesClick ?  <FaCaretUp className="text-val-fade" size={20} /> : <FaCaretDown className="text-val-fade" size={20} /> }
                            </div>
                        </li>

                        {Games.map((game, id)=>{
                            return(
                            <div className={gamesClick ? "block transition ease-out" : "hidden"} key={id}>
                                <div className='bg-gradient-to-r from-slate-900 card text-white flex justify-between h-[180px] grid-cols-2 my-6 rounded-lg cursor-pointer'>
                                    <div className='m-auto'>
                                        <img className='w-[100px]' src={game.gameTitle} alt="" />
                                    </div>
                                <img className='w-[290px] right-0 rounded-lg' src={game.gameImg} alt="" />
                                </div>
                            </div>
                            )
                        })}
                        
                        {/* Forge */}
                        <li className={forgeClick ? "bg-black p-4 my-4 flex uppercase font-semibold tracking-widest justify-between rounded-lg cursor-pointer text-white" : "bg-gray-100 p-4 my-4 flex uppercase font-semibold tracking-widest justify-between rounded-lg cursor-pointer" } onClick={handleForgeClick}>
                            Forge
                            <div className='cursor-pointer right-0'>
                                { forgeClick ? <FaCaretUp className="text-val-fade" size={20} /> : <FaCaretDown className="text-val-fade" size={20} />}
                            </div>
                        </li>

                        {Forges.map((forge, id)=>{
                            return(
                            <div className={forgeClick ? "block transition ease-out" : "hidden"} key={id}>
                                <div className='bg-gradient-to-r from-slate-900 card text-white flex justify-between h-[180px] grid-cols-2 my-6 rounded-lg'>
                                    <div className='m-auto'>
                                        <img className='w-[100px]' src={forge.gameTitle} alt="" />
                                    </div>
                                <img className='w-[290px] right-0 rounded-lg' src={forge.gameImg} alt="" />
                                </div>
                            </div>
                            )
                        })}

                        {/* Esports */}
                        <li className={esportsClick ? "nav-item bg-black p-4 my-4 flex uppercase font-semibold tracking-widest justify-between rounded-lg text-white cursor-pointer" : "nav-item bg-gray-100 p-4 my-4 flex uppercase font-semibold tracking-widest justify-between rounded-lg cursor-pointer"} onClick={handleEsportsClick}>
                            Esports
                            <div>
                                {esportsClick ? <FaCaretUp className="text-val-fade" size={20} /> : <FaCaretDown className="text-val-fade" size={20} />}
                            </div>
                        </li>

                        {Esports.map((esp, id) => {
                            return (
                            <div className={esportsClick ? "block transition ease-out" : "hidden"} key={id}>
                                <div className='bg-gradient-to-r from-slate-900 card text-white flex justify-between h-[180px] grid-cols-2 my-6 rounded-lg'>
                                    <div className='m-auto'>
                                        <img className='w-[100px]' src={esp.espTitle} alt="" />
                                    </div>
                                <img className='w-[290px] right-0 rounded-lg' src={esp.espImg} alt="" />
                                </div>
                            </div>
                            )
                        })}

                        {/* Entertainments */}
                        <li className={entertainmentClick ? "nav-item bg-black p-4 my-4 flex uppercase font-semibold tracking-widest justify-between rounded-lg text-white cursor-pointer" : "nav-item bg-gray-100 p-4 my-4 flex uppercase font-semibold tracking-widest justify-between rounded-lg cursor-pointer"} onClick={handleEntertainmentClick}>
                            Entertainments
                            <div>
                                {entertainmentClick ? <FaCaretUp className="text-val-fade" size={20} /> : <FaCaretDown className="text-val-fade" size={20} />}
                            </div>
                        </li>

                        {Entertainments.map((ent, id) => {
                            return (
                            <div className={entertainmentClick ? "block transition ease-out" : "hidden"} key={id}>
                                <div className='bg-gradient-to-r from-slate-900 card text-white flex justify-between h-[180px] grid-cols-2 my-6 rounded-lg'>
                                    <div className='m-auto'>
                                        <img className='w-[100px]' src={ent.enterTitle} alt="" />
                                        <span className='uppercase font-ffmark font-bold'>{ent.spanTitle}</span>
                                    </div>
                                <img className='w-[290px] right-0 rounded-lg' src={ent.enterImg} alt="" />
                                </div>
                            </div>
                            )
                        })}    


                        {/* Business */}
                        <li className={businessClick ? "nav-item bg-black p-4 my-4 flex uppercase font-semibold tracking-widest justify-between rounded-lg text-white cursor-pointer" : "nav-item bg-gray-100 p-4 my-4 flex uppercase font-semibold tracking-widest justify-between rounded-lg cursor-pointer"} onClick={handleBusinessClick}>
                            Business
                            <div>
                                {businessClick ? <FaCaretUp className="text-val-fade" size={20} /> : <FaCaretDown className="text-val-fade" size={20} />}
                            </div>
                        </li>

                        {Business.map((buss, id)=>{
                            return(
                            <div className={businessClick ? "block transition ease-out" : "hidden"} key={id}>
                                <div className='bg-gradient-to-r from-slate-900 card text-white flex justify-between h-[180px] grid-cols-2 my-6 rounded-lg'>
                                    <div className='m-auto'>
                                        <img className='w-[100px]' src={buss.businessTitle} alt="" />
                                        <span className='uppercase font-ffmark font-bold'>{buss.spanTitle}</span>
                                    </div>
                                <img className='w-[290px] right-0 rounded-lg' src={buss.businessImg} alt="" />
                                </div>
                            </div>
                            )
                        })}


                        <div>
                            <Link>
                                <img className="w-full" src="assets/img/navimg-1.jpeg" alt="" />
                                <p className='tracking-tight text-sm py-4'>New Legends of Runeterra Expansion - Glory in Navori</p>
                            </Link>
                        </div>

                        <div>
                            <Link>
                                <img className="w-full" src="assets/img/navimg-2.jpeg" alt="" />
                                <p className='tracking-tight text-sm py-4'>Meet Gekko’s calamitous crew, Oni’s return, a new Battlepass, and a fresh Ranked Act. All in EP_06 // ACT II.</p>
                            </Link>
                        </div>

                    </ul>
                </div>



                <div className="flex items-center">
                    <div className='cursor-pointer mr-4 hover:bg-gray-700 p-[11px] rounded-[18px] lg:hidden'>
                        <MdOutlineLanguage className="text-white" size={30}/>
                    </div>

                    <div className='cursor-pointer lg:hidden' onClick={handleClickBars}>
                        <div className='w-full bg-gray-700 p-4 rounded-[18px]'>
                          <FaBars className="text-white" size={20}/>
                        </div>
                    </div>

                    <ul className={clickbars ? 'bg-bg-valblack w-[500px] top-0 absolute right-0 z-[200px] p-4 transition-all ease-in-out duration-500' : "absolute right-[-100%] lg:flex lg:items-center lg:text-sm lg:right-[unset] lg:bg-bg-valblack lg:left-0 lg:w-full lg:gap-4 lg:pt-16 lg:px-12 lg:p-2"}>
                        <div className='py-1 flex lg:gap-6'>
                            <div className={click ? "flex cursor-pointer" : ""} onClick={handleClick}>
                            <div className='hidden lg:flex fill-white group hover:fill-val-red'>
                                <svg width="95" height="27" class="_32ANSIZormifc9Vc6VVwrx" viewBox="0 0 587.93 165"><title>mainLogoRiotFist21</title><path d="M98.77.33L0 46.07l24.61 93.66 18.73-2.3-5.15-58.89 6.15-2.74L54.96 136l32.01-3.93-5.69-65 6.09-2.71 11.68 66.23 32.38-3.98-6.23-71.25 6.16-2.74 12.77 72.43 32.01-3.93V19.71L98.77.33zm2.32 142.05l1.63 9.22 73.42 12.24v-30.68l-75.01 9.22h-.04zm144.49-19.22v12.63h15.57a14.84 14.84 0 01-1.92 7.31 13 13 0 01-5.6 5.11 20 20 0 01-8.9 1.8 17.53 17.53 0 01-10-2.8 17.87 17.87 0 01-6.44-8.14 33.06 33.06 0 01-2.27-12.93 31.81 31.81 0 012.32-12.81 18.14 18.14 0 016.5-8 17.27 17.27 0 019.82-2.78 19.31 19.31 0 015.36.71 14.15 14.15 0 014.33 2.09 12.92 12.92 0 013.18 3.29 15.61 15.61 0 012 4.44h17.27a27.22 27.22 0 00-3.46-10.28 28.84 28.84 0 00-7.05-8.1 32.6 32.6 0 00-9.91-5.29 37.91 37.91 0 00-12.06-1.86 37.32 37.32 0 00-14 2.6 32.6 32.6 0 00-11.36 7.61 35 35 0 00-7.61 12.21 46.15 46.15 0 00-2.73 16.44q0 11.94 4.54 20.59a32.4 32.4 0 0012.69 13.27 39.84 39.84 0 0035.84.84 28.39 28.39 0 0011.67-11q4.25-7.19 4.24-17.2v-9.76zm215.03 40.81V88.53h51.67v13.96h-34.62v16.76h27.99v13.96h-27.99v16.8h34.7v13.96h-51.75zm101.83-53.3a9 9 0 00-3.54-6.64c-2.09-1.59-5-2.38-8.69-2.38a16.63 16.63 0 00-6.26 1 8.62 8.62 0 00-3.83 2.78 6.74 6.74 0 00-1.33 4 6.2 6.2 0 00.79 3.29 7.27 7.27 0 002.4 2.45 16.54 16.54 0 003.7 1.79 40.14 40.14 0 004.64 1.31l6.63 1.54a47.19 47.19 0 019.45 3.08 27.46 27.46 0 017.2 4.68 18.84 18.84 0 014.58 6.39 20.37 20.37 0 011.61 8.29 20.65 20.65 0 01-3.54 12.11 22.56 22.56 0 01-10.15 7.85 41.31 41.31 0 01-15.93 2.76 42.69 42.69 0 01-16.17-2.81 23.22 23.22 0 01-10.72-8.48q-3.83-5.66-4-14.12h16.43a10.68 10.68 0 007.05 9.94 19.37 19.37 0 007.24 1.26 18.44 18.44 0 006.66-1.09 10 10 0 004.33-3 7.22 7.22 0 001.57-4.48 6.16 6.16 0 00-1.42-4 10.86 10.86 0 00-4.14-2.81 42.07 42.07 0 00-6.89-2.14l-8.07-1.95q-9.65-2.3-15.23-7.26t-5.54-13.44a19.86 19.86 0 013.72-12.12 24.74 24.74 0 0110.33-8.11 36.74 36.74 0 0115-2.91 35.62 35.62 0 0114.92 2.91 23.43 23.43 0 019.91 8.14 21.54 21.54 0 013.6 12.12zm-113.99 53.3h-16.87v-57.35l-1.73-.02-17.04 57.37h-16.86l-16.58-57.37-2.15.02v57.35h-16.87V88.53h28.67l14.48 50.56h1.75l14.48-50.56h28.72v75.44zm-114.66 0h18.27l-25.33-75.43h-23.15l-25.37 75.43h18.3l4.93-16.54h27.42zm-28.43-29.7l8.22-27.65h3.1l8.26 27.65zm278.58-37.76a4 4 0 01-3.67-2.44 4 4 0 010-3.1 4 4 0 01.85-1.27 4.25 4.25 0 011.27-.86 4.15 4.15 0 013.1 0 4.13 4.13 0 011.27.86 4.08 4.08 0 01.86 1.27 4 4 0 010 3.1 4.08 4.08 0 01-.86 1.27 4 4 0 01-1.27.86 4 4 0 01-1.55.31zm0-1.09a2.84 2.84 0 001.47-.39 2.94 2.94 0 001.05-1 2.93 2.93 0 000-2.92 3 3 0 00-1.06-1 2.93 2.93 0 00-2.92 0 3 3 0 00-1 1 2.86 2.86 0 000 2.92 3 3 0 001 1 2.83 2.83 0 001.46.39zm-1.46-1.15V90.6h1.78a1.52 1.52 0 01.69.15 1.13 1.13 0 01.47.42 1.24 1.24 0 01.17.66 1.16 1.16 0 01-.18.66 1 1 0 01-.48.41 1.56 1.56 0 01-.7.14h-1.2v-.72h1a.52.52 0 00.36-.12.5.5 0 00.14-.37.47.47 0 00-.14-.37.52.52 0 00-.36-.12h-.55v2.93zm2.39-1.68l.82 1.68h-1.11l-.75-1.68zM282.41 1.03h17.05v75.44h-17.05zm98.02 37.72q0 12.42-4.71 21a32.67 32.67 0 01-12.79 13.17 38.57 38.57 0 01-36.31 0 32.75 32.75 0 01-12.79-13.2q-4.71-8.66-4.71-21t4.71-21.05a32.67 32.67 0 0112.75-13.14 38.65 38.65 0 0136.31 0 32.67 32.67 0 0112.79 13.17q4.71 8.64 4.71 21.05m-17.35 0a33.35 33.35 0 00-2.23-13 17.47 17.47 0 00-6.33-8 18.57 18.57 0 00-19.45 0 17.57 17.57 0 00-6.35 8 38.59 38.59 0 000 26 17.49 17.49 0 006.35 8 18.57 18.57 0 0019.45 0 17.39 17.39 0 006.33-8 33.4 33.4 0 002.23-13M246.58 50.17l8.76 26.3h18.71l-9.74-28.33h-13.23l-.79-2.44c2.52-.49 6.83-1.25 10.65-3.85a20 20 0 008.75-16.39 24.15 24.15 0 00-3.26-12.75 21.9 21.9 0 00-9.36-8.64 32.56 32.56 0 00-14.64-3H212v75.4h17.06v-26.3zm-.32-15.61a19.35 19.35 0 01-7.26 1.18h-9.94V14.88h9.91a18.68 18.68 0 017.25 1.24 9.12 9.12 0 014.4 3.7 10 10 0 011.5 5.64 9.65 9.65 0 01-1.48 5.55 8.86 8.86 0 01-4.38 3.55M382.04 1.03v14h29.3l.8 2.45c-2.48.48-6.67 1.22-10.43 3.7v55.31h16.87v-61.5h19.62v-14z"></path></svg> 
                                                            <div className='hidden lg:block'>
                                {clickbars ? <FaCaretDown className="text-val-fade  group-hover:text-val-red" size={20} /> : <FaCaretUp className="text-val-fade group-hover:text-val-red" size={20}/>}
                            </div>
                            </div>
                        </div>
                        <div className=" fill-white">
                                <svg className='cursor-pointer' xmlns="http://www.w3.org/2000/svg" height="35" viewBox="0 0 100 100" width="35"><path d="M99.25 48.66V10.28c0-.59-.75-.86-1.12-.39l-41.92 52.4a.627.627 0 00.49 1.02h30.29c.82 0 1.59-.37 2.1-1.01l9.57-11.96c.38-.48.59-1.07.59-1.68zM1.17 50.34L32.66 89.7c.51.64 1.28 1.01 2.1 1.01h30.29c.53 0 .82-.61.49-1.02L1.7 9.89c-.37-.46-1.12-.2-1.12.39v38.38c0 .61.21 1.2.59 1.68z"></path></svg>
                        </div>

                            {/* Close NAv */}
                            <div className={clickbars ? "absolute right-0 p-4 cursor-pointer top-0": "hidden" } onClick={handleClickBars}>
                                <div className='bg-gray-600 p-4 rounded-[18px] transition-all ease-in duration-500'>
                                    <FaTimes className="text-white" size={20}/>
                                </div>
                            </div>
                        </div>

                        <li className='pt-9 items-center relative lg:hidden'>
                            <form className='block'>
                                <IoSearchOutline className='text-white absolute mt-2 ml-3' size={27} />
                                <IoCloseOutline className='text-gray-300 absolute right-0 mt-2 mr-3' size={30} />
                                <input className='w-full bg-slate-800 py-3 flex uppercase font-semibold justify-between rounded-3xl text-white cursor-pointer p-16' type='text' />
                            </form>

                        </li>

                        {/* Mobile Nav */}

                        <div className='group'>
                            <li className={infoClick ? "hover:bg-gray-700 p-4 my-4 flex uppercase font-bold tracking-widest justify-between rounded-lg text-white cursor-pointer" : "hover:bg-gray-700 text-white p-4 my-4 flex uppercase font-bold tracking-widest justify-between rounded-lg cursor-pointer lg:p-2 lg:px-4 lg:relative lg:font-medium group"} onClick={handleInfoClick}>
                                Game Info
                                <div className='lg:group-hover:lg:bg-bg-valred lg:w-full lg:absolute lg:top-12 lg:h-1 lg:left-0'></div>
                                <div>
                                    {infoClick ? <FaCaretUp className="text-val-fade" size={20} /> : <FaCaretDown className="text-val-fade" size={20} />}
                                </div>
                            </li>

                            {/* fix as you come soon */}
                            <div className={infoClick ? "block transition ease-out" : "hidden lg:group-hover:block w-[200px] lg:absolute lg:top-[136px] lg:left-[240px] lg:bottom-0 lg:bg-gray-700 lg:h-[160px] gameinfo"}>
                                <div className='text-sm cursor-pointer hover:bg-gray-700 hover:text-white text-gray-400 p-4 rounded-lg'>
                                    <div className='m-auto'>
                                        <Link to='/'>
                                            <span className='uppercase font-ffmark font-bold'>Agents</span>
                                        </Link>
                                    </div>
                                </div>
                                <div className='text-sm cursor-pointer hover:bg-gray-700 hover:text-white text-gray-400 p-4 rounded-lg'>
                                    <div className='m-auto'>
                                        <Link to='/'>
                                            <span className='uppercase font-ffmark font-bold'>Maps</span>
                                        </Link>
                                    </div>
                                </div>
                                <div className='text-sm cursor-pointer hover:bg-gray-700 hover:text-white text-gray-400 p-4 rounded-lg'>
                                    <div className='m-auto'>
                                        <Link to='/'>
                                            <span className='uppercase font-ffmark font-bold'>Arsenal</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <li className="hover:bg-gray-700 text-white p-4 my-4 flex uppercase font-bold tracking-widest justify-between rounded-lg cursor-pointer lg:p-2 lg:px-4 lg:font-medium lg:relative group">
                            <Link to='/'>
                                Media
                                <div className='lg:group-hover:lg:bg-bg-valred lg:w-full lg:absolute lg:top-12 lg:h-1 lg:left-0'></div>
                            </Link>
                        </li>

                        <li className="hover:bg-gray-700 text-white p-4 my-4 flex uppercase font-bold tracking-widest justify-between rounded-lg cursor-pointer lg:p-2 lg:px-4 lg:font-medium lg:relative group">
                            <Link to='/'>
                                News
                                <div className='lg:group-hover:lg:bg-bg-valred lg:w-full lg:absolute lg:top-12 lg:h-1 lg:left-0'></div>
                            </Link>
                        </li>

                        <li className="hover:bg-gray-700 text-white p-4 my-4 flex uppercase font-bold tracking-widest justify-between rounded-lg cursor-pointer lg:p-2 lg:px-4 lg:font-medium lg:relative group">
                            <Link to='/'>
                                Leaderboards
                                <div className='lg:group-hover:lg:bg-bg-valred lg:w-full lg:absolute lg:top-12 lg:h-1 lg:left-0'></div>
                            </Link>
                        </li>

                        <li className="hidden hover:bg-gray-700 text-white p-4 my-4 uppercase font-bold tracking-widest justify-between rounded-lg cursor-pointer min-[1088px]:flex lg:p-2 lg:px-4 lg:font-medium lg:relative group">
                            <Link to='/'>
                                More
                                <div className='lg:group-hover:lg:bg-bg-valred lg:w-full lg:absolute lg:top-12 lg:h-1 lg:left-0'></div>
                            </Link>
                            <div>
                                {infoClick ? <FaCaretUp className="text-val-fade" size={20} /> : <FaCaretDown className="text-val-fade" size={20} />}
                            </div>
                        </li>

                        <li className={clickSupport ? "hover:bg-gray-700 p-4 my-4 flex uppercase font-bold tracking-widest justify-between rounded-lg text-white cursor-pointer" : "flex hover:bg-gray-700 text-white p-4 my-4 uppercase font-bold tracking-widest justify-between rounded-lg cursor-pointer lg:font-medium"} onClick={handleClickSupport}>
                            Support
                            <div>
                                {clickSupport ? <FaCaretUp className="text-val-fade" size={20} /> : <FaCaretDown className="text-val-fade" size={20} />}
                            </div>
                        </li>

                        <div className={clickSupport ? "block transition ease-out" : "hidden"}>
                            <div className='text-sm cursor-pointer hover:bg-gray-700 hover:text-white text-gray-400 p-4 rounded-lg'>
                                <div className='m-auto'>
                                    <Link to='/'>
                                        <span className='uppercase font-ffmark font-bold'>Specs</span>
                                    </Link>
                                </div>
                            </div>
                            <div className='text-sm cursor-pointer hover:bg-gray-700 hover:text-white text-gray-400 p-4 rounded-lg'>
                                <div className='m-auto'>
                                    <Link to='/'>
                                        <span className='uppercase font-ffmark font-bold'>Support</span>
                                    </Link>
                                </div>
                            </div>
                            <div className='text-sm cursor-pointer hover:bg-gray-700 hover:text-white text-gray-400 p-4 rounded-lg'>
                                <div className='m-auto'>
                                    <Link to='/'>
                                        <span className='uppercase font-ffmark font-bold'>Community Code</span>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <li className={clickSocials ? "hover:bg-gray-700 p-4 my-4 flex uppercase font-bold tracking-widest justify-between rounded-lg text-white cursor-pointer" : "hover:bg-gray-700 text-white p-4 my-4 flex uppercase font-bold tracking-widest justify-between rounded-lg cursor-pointer lg:hidden"} onClick={handleSocialsClick}>
                            Our Socials
                            <div>
                                {clickSocials ? <FaCaretUp className="text-val-fade" size={20} /> : <FaCaretDown className="text-val-fade" size={20} />}
                            </div>
                        </li>

                        <div className={clickSocials ? "block transition ease-out" : "hidden"}>
                            <div className='text-sm cursor-pointer hover:bg-gray-700 hover:text-white text-gray-400 p-4 rounded-lg'>
                                <div className='m-auto'>
                                    <Link to='/'>
                                        <span className='uppercase font-ffmark font-bold'>Twitter</span>
                                    </Link>
                                </div>
                            </div>
                            <div className='text-sm cursor-pointer hover:bg-gray-700 hover:text-white text-gray-400 p-4 rounded-lg'>
                                <div className='m-auto'>
                                    <Link to='/'>
                                        <span className='uppercase font-ffmark font-bold'>Youtube</span>
                                    </Link>
                                </div>
                            </div>
                            <div className='text-sm cursor-pointer hover:bg-gray-700 hover:text-white text-gray-400 p-4 rounded-lg'>
                                <div className='m-auto'>
                                    <Link to='/'>
                                        <span className='uppercase font-ffmark font-bold'>Instagram</span>
                                    </Link>
                                </div>
                            </div>
                            <div className='text-sm cursor-pointer hover:bg-gray-700 hover:text-white text-gray-400 p-4 rounded-lg'>
                                <div className='m-auto'>
                                    <Link to='/'>
                                        <span className='uppercase font-ffmark font-bold'>Facebook</span>
                                    </Link>
                                </div>
                            </div>
                            <div className='text-sm  cursor-pointer hover:bg-gray-700 hover:text-white text-gray-400 p-4 rounded-lg'>
                                <div className='m-auto'>
                                    <Link to='/'>
                                        <span className='uppercase font-ffmark font-bold'>Discord</span>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <li className="flex hover:bg-gray-700 text-white p-4 my-4 uppercase font-bold tracking-widest justify-between rounded-lg cursor-pointer lg:p-2 lg:px-4  lg:font-medium lg:relative group">
                            <Link to='/'>
                                Esports
                                <div className='lg:group-hover:lg:bg-bg-valred lg:w-full lg:absolute lg:top-12 lg:h-1 lg:left-0'></div>
                            </Link>
                            <div>
                                {infoClick ? <FiArrowUpRight className="text-val-fade" size={20} /> : <FiArrowUpRight className="text-val-fade" size={20} />}
                            </div>
                        </li>

                        <div className="lg:absolute lg:right-0 lg:p-12 lg:flex lg:items-center lg:gap-2">
                            <div className='hidden bg-gray-700 p-3 rounded-[18px] lg:block'>
                                <IoSearchOutline className="text-white" size={26}/>
                            </div>
                            <div className='hidden lg:block'>
                                <MdOutlineLanguage className="text-white" size={30} />
                            </div>
                            <button className="w-full font-ffmark font-bold tracking-widest bg-bg-valred uppercase p-4 rounded-xl hover:bg-bg-valred/80 lg:p-2 lg:px-4">Play Now</button>
                        </div>
                    </ul>

                </div>
            </div>
        </header>
    </>
  )
}

export default Navbar