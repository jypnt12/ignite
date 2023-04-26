import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import  {useDispatch} from 'react-redux'
import { loadDetail } from '../actions/detailAction'
import { Link } from 'react-router-dom';
import { SmallImage } from '../util'
import {  popup } from '../animation';

const Game = ({name, released, image, id,}) => {

  const stringPathId = id.toString()

  const dispatch = useDispatch()
  const loadDetailHandler = ()=>{
    dispatch(loadDetail(id));
    document.body.style.overflow = 'hidden';
    
  }
  return (
    <StyledGame layoutId={stringPathId} onClick={loadDetailHandler} variants={popup} initial='hidden' animate='show'>
        <Link to={`/game/${id}`}>
          <h3>{name}</h3>
          <p>{released} </p>
          <motion.img layoutId={`image ${stringPathId}`} src={SmallImage(image, 640)} alt={name} />
        </Link>  
    </StyledGame>
  )
}

const StyledGame = styled(motion.div)`
    min-height: 30vh;
    box-shadow: 0px 5px 20px rgba(255, 255, 255, 0.3);
    text-align: center;
    border-radius: 1rem;
    cursor: pointer;
    overflow: hidden;
    img{
        width: 100%;
        height: 40vh;
        object-fit: cover;
        
    }
    
`
export default Game;