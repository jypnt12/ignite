import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import logo from '../img/logo.svg'
import { fetchSearch } from "../actions/actionGames";
import { useDispatch } from "react-redux";
import { fadeIn } from "../animation";

const Nav = () =>{

    const dispatch = useDispatch()
    const [textInput, setTextInput]= useState("")
    const InputHandler = (e) => {
        setTextInput(e.target.value)
    };

    const submitSearch = (e) =>{
        e.preventDefault()
        dispatch(fetchSearch(textInput))
        setTextInput("")
    }

    const clearSearched = ()=>{
        dispatch({type: "CLEAR_SEARCHED"})
    }
    return(
        <StyledNav variants={fadeIn} initial='hidden' animate='show'>
            <Logo onClick={clearSearched}>
                <img src={logo} alt="logo"/>
                <h1>Ignite</h1>
            </Logo>
            <form className="search">
                <input type="text" onChange={InputHandler} value={textInput}/>
                <button type="submit" onClick={submitSearch}>Search</button>
            </form>
        </StyledNav>
    )
}

const StyledNav = styled(motion.div)`
    padding: 3rem 5rem;
    text-align: center;
    input{
        width: 30%;
        font-size: 1rem;
        padding: 0.5rem;
        border: none;
        margin-top: 1rem;
        box-shadow: 0px 0px 30px rgb(255, 255, 255);
        border-radius: 20px;
        outline: none;
        @media only screen and (max-width: 768px) {
            width: 100%;
        }
    }
    
    button{
        font-size: 1rem;
        border: none;
        padding:0.5rem 2rem;
        cursor: pointer;
        background: #000000;
        color: white ;
        display: none;
        
    }
    @media only screen and (max-width: 768px) {
            
            padding: 1rem 2rem;
            
    }
`
const Logo = styled(motion.div)`
    display: flex;
    justify-content: center;
    cursor: pointer;
    padding: 1rem;
    img{
        height: 2rem;
        width: 2rem;
     
    }
    
    @media only screen and (max-width: 768px) {
        align-items: center;
        padding: 0px;
    }
`
export default Nav