import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import logo from '../img/logo.svg'
import { fetchSearch } from "../actions/actionGames";
import { useDispatch } from "react-redux";

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
        <StyledNav>
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
        box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
        border-radius: 20px;
        outline: none;
    }
    button{
        font-size: 1rem;
        border: none;
        padding:0.5rem 2rem;
        cursor: pointer;
        background: #ff7676;
        color: white ;
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
`
export default Nav