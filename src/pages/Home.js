import React,{useEffect, useState} from 'react'

import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/actionGames";
import Game from '../components/Game';
import styled from 'styled-components'
import { motion } from 'framer-motion'
import GameDetails from '../components/GameDetails';
import { useLocation } from 'react-router-dom';
import { AnimatePresence, LayoutGroup } from 'framer-motion';
import { fadeIn } from '../animation';

const Home =() =>{
    const location = useLocation();
    const pathId = location.pathname.split("/")[2]
    
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(loadGames())
    },[dispatch])

    const { popular, newGames, searched } = useSelector(state =>state.games)
    

    return(
        <GamesList variants={fadeIn} initial='hidden' animate='show'>
            <LayoutGroup>
                <AnimatePresence>
                    {pathId && <GameDetails pathId={pathId}/>}
                </AnimatePresence>
                {searched.length ?(
                <div className="searched">
                <h2>Searched games</h2>

                    <Games >
                        {searched.map(game=>(
                            <Game name={game.name} 
                            released={game.released}
                            image={game.background_image}
                            key={game.id} 
                            id={game.id}
                            />
                        ))}
                    </Games>
                </div>
                ):null}
                <h2>Popular games</h2>
                <Games >
                    {popular.map(game=>(
                        <Game name={game.name} 
                        released={game.released}
                        image={game.background_image}
                        key={game.id} 
                        id={game.id}
                        />
                    ))}
                </Games>
                <h2>New games</h2>
                <Games>
                    {newGames.map(game=>(
                        <Game name={game.name} 
                        released={game.released}
                        image={game.background_image}
                        key={game.id} 
                        id={game.id}
                        />
                    ))}
                </Games>
            </LayoutGroup>
        </GamesList>
    )
}

const GamesList = styled(motion.div)`
    padding: 0rem 5rem;
    h2{
        padding: 5rem 0rem;
    }
`
const Games = styled(motion.div)`
    min-height: 80vh;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(500px,1fr));
    grid-column-gap:3rem;
    grid-row-gap: 5rem;
`

export default Home