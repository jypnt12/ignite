import React,{useEffect} from 'react'

import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/actionGames";
import Game from '../components/Game';
import styled from 'styled-components'
import { motion } from 'framer-motion'
import GameDetail from '../components/GameDetail';


const Home =() =>{
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(loadGames())
    },[dispatch])

    const { popular, newGames, upcoming } = useSelector(state =>state.games)
    

    return(
        <GamesList>
            <GameDetail/>
            <h2>Popular games</h2>
            <Games>
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