import React, { useState } from 'react';
import '../index.css'
import LeftNavbar from './LeftNavbar';
import RightNavbar from './RightNavbar';
import MainNav from './MainNav';


const Nav = () => {

    const [riotClick, setRiotClick] = useState(false);
    const handleRiotClick = () => setRiotClick(!riotClick);

    const [gamesClick, setGamesclick] = useState(false);
    const handleGamesClick = () => setGamesclick(!gamesClick);

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
    const [clickBars, setClickbars] = useState(false)
    const handleClickBars = () => setClickbars(!clickBars)

    //right-navbar gameinfo
    const [clickGame, setGameClick] = useState(false)
    const handleClickGame = () => setGameClick(!clickGame)

    //Right-navbar support
    const [clickSupport, setSupportClick] = useState(false);
    const handleClickSupport = () => setSupportClick(!clickSupport)

    //right-navbar oursocials
    const [clickSocials, setSocialsClick] = useState(false)
    const handleSocialsClick = () => setSocialsClick(!clickSocials)




  return (
    <div className='w-full fixed bg-bg-valblack p-4 py-4 flex justify-between items-center lg:px-5'>
        <LeftNavbar riotClick={riotClick} 
                    handleRiotClick={handleRiotClick} 
                    gamesClick={gamesClick} 
                    handleGamesClick={handleGamesClick} 
                    forgeClick={forgeClick} 
                    handleForgeClick={handleForgeClick} 
                    esportsClick={esportsClick} 
                    handleEsportsClick={handleEsportsClick} 
                    entertainmentClick={entertainmentClick} 
                    handleEntertainmentClick={handleEntertainmentClick} 
                    businessClick={businessClick} 
                    handleBusinessClick={handleBusinessClick}/>

        <RightNavbar clickBars={clickBars} 
                     handleClickBars={handleClickBars}
                     clickGame={clickGame} 
                     handleClickGame={handleClickGame}
                     clickSupport={clickSupport}
                     handleClickSupport={handleClickSupport}
                     clickSocials={clickSocials}
                     handleSocialsClick={handleSocialsClick}/>

    </div>
  )
}

export default Nav